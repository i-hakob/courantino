import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getLessonById } from '@/data/sections';
import { useHearts, formatTimeLeft, MAX_HEARTS } from '@/hooks/useHearts';
import { colors, spacing, radii, shadow } from '@/theme/theme';

export default function ResultsScreen() {
  const router = useRouter();
  const { outcome, score, total, lessonId } = useLocalSearchParams<{
    outcome: string;
    score?: string;
    total?: string;
    lessonId?: string;
  }>();

  const failed = outcome === 'failed';
  const found = getLessonById(lessonId);
  const sectionId = found?.section.id;
  const { hearts, refillAt, loading } = useHearts(failed);
  const timeLeft = formatTimeLeft(refillAt);

  const scoreNum = Number(score ?? 0);
  const totalNum = Number(total ?? 0);
  const perfect = !failed && totalNum > 0 && scoreNum === totalNum;

  function handleContinue() {
    if (sectionId) {
      router.replace(`/section/${sectionId}`);
    } else {
      router.replace('/');
    }
  }

  return (
    <View style={[styles.container, failed ? styles.containerFailed : styles.containerPassed]}>
      <View style={[styles.medal, failed ? styles.medalFailed : styles.medalPassed]}>
        <Text style={styles.medalEmoji}>{failed ? '💔' : perfect ? '🏆' : '🎉'}</Text>
      </View>

      <Text style={styles.title}>{failed ? 'Out of Hearts!' : 'Lesson Complete!'}</Text>

      {!failed && (
        <>
          <Text style={styles.score}>
            {score} / {total} correct
          </Text>
          {perfect && <Text style={styles.perfectTag}>Perfect lesson ✨</Text>}
        </>
      )}

      {failed && (
        <Text style={styles.subtext}>
          {loading
            ? ' '
            : hearts >= MAX_HEARTS
              ? "Your hearts have refilled — you're ready to try again!"
              : timeLeft
                ? `Your hearts refill in ${timeLeft}.`
                : 'Practice a bit more and try again.'}
        </Text>
      )}

      <Pressable
        style={({ pressed }) => [
          styles.button,
          failed ? styles.buttonFailed : styles.buttonPassed,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xl },
  containerPassed: { backgroundColor: colors.primaryTint },
  containerFailed: { backgroundColor: colors.dangerLight },
  medal: {
    width: 96,
    height: 96,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
    ...shadow.floating,
  },
  medalPassed: { backgroundColor: colors.white },
  medalFailed: { backgroundColor: colors.white },
  medalEmoji: { fontSize: 48 },
  title: { fontSize: 28, fontWeight: '800', color: colors.text, marginBottom: spacing.sm, letterSpacing: -0.4 },
  score: { fontSize: 18, fontWeight: '700', color: colors.text, textAlign: 'center' },
  perfectTag: {
    marginTop: spacing.sm,
    fontSize: 13,
    fontWeight: '800',
    color: colors.goldDark,
    backgroundColor: colors.goldLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
    overflow: 'hidden',
  },
  subtext: { fontSize: 16, color: colors.text, marginBottom: spacing.xl, textAlign: 'center', paddingHorizontal: spacing.lg },
  button: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xxl,
    borderRadius: radii.lg,
    marginTop: spacing.xxl,
    ...shadow.button,
  },
  buttonPassed: { backgroundColor: colors.primary },
  buttonFailed: { backgroundColor: colors.secondary },
  buttonPressed: { opacity: 0.85 },
  buttonText: { color: colors.white, fontSize: 18, fontWeight: '800', letterSpacing: 0.3 },
});
