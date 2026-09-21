import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter, useFocusEffect } from 'expo-router';
import { getSectionById } from '@/data/sections';
import { loadProgress, Progress } from '@/storage/progress';
import { isLessonUnlocked } from '@/logic/progression';
import { useHearts, formatTimeLeft } from '@/hooks/useHearts';
import { HeartsBadge } from '@/components/HeartsBadge';
import { colors, spacing, radii, shadow, accentFor } from '@/theme/theme';

export default function SectionScreen() {
  const { sectionId } = useLocalSearchParams<{ sectionId: string }>();
  const router = useRouter();
  const [progress, setProgress] = useState<Progress | null>(null);
  const { hearts, refillAt } = useHearts();
  const outOfHearts = hearts <= 0;
  const timeLeft = formatTimeLeft(refillAt);

  const section = getSectionById(sectionId);

  useFocusEffect(
    useCallback(() => {
      loadProgress().then(setProgress);
    }, [])
  );

  if (!section) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyEmoji}>🧭</Text>
        <Text style={styles.emptyText}>Section not found.</Text>
      </View>
    );
  }

  if (!progress) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>Loading…</Text>
      </View>
    );
  }

  const sectionAccent = accentFor(section.id);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.titleWrap}>
          <Text style={[styles.eyebrow, { color: sectionAccent.dark }]}>SECTION</Text>
          <Text style={styles.title}>{section.title}</Text>
        </View>
        <HeartsBadge hearts={hearts} refillAt={refillAt} />
      </View>

      {outOfHearts && (
        <View style={styles.outOfHeartsBanner}>
          <Text style={styles.outOfHeartsIcon}>💔</Text>
          <Text style={styles.outOfHeartsText}>
            Out of hearts{timeLeft ? ` — refills in ${timeLeft}` : ''}
          </Text>
        </View>
      )}

      <FlatList
        data={section.lessons}
        keyExtractor={(l) => l.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const unlocked = isLessonUnlocked(section, item.id, progress) && !outOfHearts;
          const completed = progress.lessons[item.id]?.completed ?? false;
          const accent = accentFor(item.id);

          const nodeStyle = completed
            ? { backgroundColor: colors.primary, borderColor: colors.primaryDark }
            : unlocked
              ? { backgroundColor: accent.base, borderColor: accent.dark }
              : { backgroundColor: colors.locked, borderColor: colors.lockedDark };

          return (
            <Pressable
              style={({ pressed }) => [
                styles.lessonRow,
                !unlocked && styles.lessonRowLocked,
                pressed && unlocked && styles.lessonRowPressed,
              ]}
              disabled={!unlocked}
              onPress={() => router.push(`/lesson/${item.id}`)}
            >
              <View style={[styles.node, nodeStyle]}>
                <Text style={styles.nodeText}>
                  {completed ? '✓' : unlocked ? index + 1 : '🔒'}
                </Text>
              </View>
              <View style={styles.lessonBody}>
                <Text style={[styles.lessonText, !unlocked && styles.lessonTextLocked]}>
                  {item.title}
                </Text>
                <Text style={styles.lessonMeta}>
                  {completed ? 'Completed' : unlocked ? `${item.questions.length} questions` : 'Locked'}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: spacing.xl },
  centerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg, gap: spacing.sm },
  emptyEmoji: { fontSize: 40 },
  emptyText: { fontSize: 16, color: colors.textMuted, fontWeight: '600' },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.lg },
  titleWrap: { flex: 1, paddingRight: spacing.md },
  eyebrow: { fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 2 },
  title: { fontSize: 26, fontWeight: '800', color: colors.text, letterSpacing: -0.3 },
  outOfHeartsBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.dangerLight,
    borderRadius: radii.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  outOfHeartsIcon: { fontSize: 18 },
  outOfHeartsText: { color: colors.dangerDark, fontWeight: '700', flexShrink: 1 },
  listContent: { paddingBottom: spacing.xxl, gap: spacing.md },
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.md,
    ...shadow.card,
  },
  lessonRowPressed: { opacity: 0.85, transform: [{ scale: 0.99 }] },
  lessonRowLocked: { opacity: 0.6, shadowOpacity: 0 },
  node: {
    width: 48,
    height: 48,
    borderRadius: radii.pill,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.lg,
  },
  nodeText: { fontSize: 17, fontWeight: '800', color: colors.white },
  lessonBody: { flex: 1 },
  lessonText: { fontSize: 16, fontWeight: '700', color: colors.text },
  lessonTextLocked: { color: colors.textFaint },
  lessonMeta: { fontSize: 12, color: colors.textMuted, marginTop: 2, fontWeight: '600' },
});
