import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter, useFocusEffect } from 'expo-router';
import { getLessonById } from '@/data/sections';
import { recordLessonCompleted } from '@/storage/progress';
import { useHearts } from '@/hooks/useHearts';
import { HeartsBadge } from '@/components/HeartsBadge';
import { AnnotatedText } from '@/components/AnnotatedText';
import { colors, spacing, radii, shadow } from '@/theme/theme';

export default function LessonScreen() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const router = useRouter();
  const found = getLessonById(lessonId);
  const { hearts, refillAt, loading: heartsLoading, loseHeart, refresh: refreshHearts } = useHearts();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useFocusEffect(
    useCallback(() => {
      refreshHearts().then((state) => {
        if (state.hearts <= 0) {
          router.replace({ pathname: '/results', params: { outcome: 'failed', lessonId } });
        }
      });
    }, [refreshHearts, router, lessonId])
  );

  if (!found) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>Lesson not found.</Text>
      </View>
    );
  }

  if (heartsLoading) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>Loading…</Text>
      </View>
    );
  }

  const { lesson } = found;
  const question = lesson.questions[questionIndex];
  const isCorrect = selected === question.correctAnswer;
  const isLastQuestion = questionIndex === lesson.questions.length - 1;
  const progressRatio = (questionIndex + (submitted ? 1 : 0)) / lesson.questions.length;

  async function handleCheck() {
    if (!selected) return;
    setSubmitted(true);

    if (selected === question.correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      await loseHeart();
    }
  }

  async function handleContinue() {
    if (hearts <= 0) {
      router.replace({ pathname: '/results', params: { outcome: 'failed', lessonId } });
      return;
    }

    if (isLastQuestion) {
      const updated = await recordLessonCompleted(lessonId, score, lesson.questions.length);
      router.replace({
        pathname: '/results',
        params: {
          outcome: 'passed',
          lessonId,
          score: String(score),
          total: String(lesson.questions.length),
          xp: String(updated.totalXP),
        },
      });
      return;
    }

    setQuestionIndex((prev) => prev + 1);
    setSelected(null);
    setSubmitted(false);
  }

  function getOptionStyle(option: string) {
    if (!submitted) {
      return option === selected ? styles.optionSelected : styles.option;
    }
    if (option === question.correctAnswer) return styles.optionCorrect;
    if (option === selected) return styles.optionWrong;
    return [styles.option, styles.optionFaded];
  }

  function getOptionMarkerStyle(option: string) {
    if (!submitted) {
      return option === selected ? styles.markerSelected : styles.marker;
    }
    if (option === question.correctAnswer) return styles.markerCorrect;
    if (option === selected) return styles.markerWrong;
    return styles.marker;
  }

  function getOptionMarkerContent(option: string) {
    if (submitted && option === question.correctAnswer) return '✓';
    if (submitted && option === selected) return '✕';
    return '';
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${Math.max(progressRatio, 0.04) * 100}%` }]} />
        </View>
        <HeartsBadge hearts={hearts} refillAt={refillAt} />
      </View>
      <Text style={styles.progressLabel}>
        Question {questionIndex + 1} of {lesson.questions.length}
      </Text>

      <View style={styles.promptCard}>
        <AnnotatedText style={styles.prompt} text={question.prompt} />
      </View>

      <View style={styles.options}>
        {question.options.map((option) => (
          <Pressable
            key={option}
            style={getOptionStyle(option)}
            disabled={submitted}
            onPress={() => setSelected(option)}
          >
            <View style={getOptionMarkerStyle(option)}>
              <Text style={styles.markerText}>{getOptionMarkerContent(option)}</Text>
            </View>
            <Text style={styles.optionText}>{option}</Text>
          </Pressable>
        ))}
      </View>

      {submitted && (
        <View style={isCorrect ? styles.feedbackBannerCorrect : styles.feedbackBannerWrong}>
          <Text style={styles.feedbackIcon}>{isCorrect ? '🎉' : '💡'}</Text>
          <Text style={isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}>
            {isCorrect ? 'Correct!' : `Nope! It's "${question.correctAnswer}"`}
          </Text>
        </View>
      )}

      <Pressable
        style={({ pressed }) => [
          styles.actionButton,
          !selected && styles.actionButtonDisabled,
          pressed && !!selected && styles.actionButtonPressed,
        ]}
        disabled={!selected}
        onPress={submitted ? handleContinue : handleCheck}
      >
        <Text style={[styles.actionButtonText, !selected && styles.actionButtonTextDisabled]}>
          {submitted ? (hearts <= 0 ? 'See results' : isLastQuestion ? 'Finish 🏁' : 'Continue') : 'Check'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.xl, justifyContent: 'center', backgroundColor: colors.bg },
  centerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg },
  emptyText: { fontSize: 16, color: colors.textMuted, fontWeight: '600' },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: spacing.md },
  progressTrack: {
    flex: 1,
    height: 10,
    borderRadius: radii.pill,
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: radii.pill,
    backgroundColor: colors.primary,
  },
  progressLabel: { fontSize: 12, color: colors.textMuted, fontWeight: '700', marginTop: spacing.sm, marginBottom: spacing.lg },
  promptCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadow.card,
  },
  prompt: { fontSize: 22, fontWeight: '700', color: colors.text, lineHeight: 30 },
  options: { gap: spacing.md },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    padding: spacing.md,
  },
  optionFaded: { opacity: 0.55 },
  optionSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: radii.md,
    padding: spacing.md,
    backgroundColor: colors.secondaryLight,
  },
  optionCorrect: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: radii.md,
    padding: spacing.md,
    backgroundColor: colors.primaryLight,
  },
  optionWrong: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.danger,
    borderRadius: radii.md,
    padding: spacing.md,
    backgroundColor: colors.dangerLight,
  },
  marker: {
    width: 22,
    height: 22,
    borderRadius: radii.pill,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerSelected: {
    width: 22,
    height: 22,
    borderRadius: radii.pill,
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
    marginRight: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerCorrect: {
    width: 22,
    height: 22,
    borderRadius: radii.pill,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    marginRight: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerWrong: {
    width: 22,
    height: 22,
    borderRadius: radii.pill,
    borderWidth: 2,
    borderColor: colors.danger,
    backgroundColor: colors.danger,
    marginRight: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerText: { color: colors.white, fontSize: 12, fontWeight: '800' },
  optionText: { fontSize: 16, fontWeight: '600', color: colors.text, flexShrink: 1 },
  feedbackBannerCorrect: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primaryTint,
    borderRadius: radii.md,
    padding: spacing.md,
    marginTop: spacing.lg,
  },
  feedbackBannerWrong: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.dangerLight,
    borderRadius: radii.md,
    padding: spacing.md,
    marginTop: spacing.lg,
  },
  feedbackIcon: { fontSize: 18 },
  feedbackCorrect: { color: colors.primaryDark, fontWeight: '800', fontSize: 15, flexShrink: 1 },
  feedbackWrong: { color: colors.dangerDark, fontWeight: '800', fontSize: 15, flexShrink: 1 },
  actionButton: {
    backgroundColor: colors.primary,
    borderRadius: radii.lg,
    padding: spacing.lg,
    alignItems: 'center',
    marginTop: spacing.xl,
    ...shadow.button,
  },
  actionButtonPressed: { backgroundColor: colors.primaryDark },
  actionButtonDisabled: { backgroundColor: colors.border, shadowOpacity: 0 },
  actionButtonText: { color: colors.white, fontWeight: '800', fontSize: 16, letterSpacing: 0.3 },
  actionButtonTextDisabled: { color: colors.textFaint },
});
