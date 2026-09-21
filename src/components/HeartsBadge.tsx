import { View, Text, StyleSheet } from 'react-native';
import { MAX_HEARTS } from '@/storage/progress';
import { formatTimeLeft } from '@/hooks/useHearts';
import { colors, spacing, radii } from '@/theme/theme';

type Props = {
  hearts: number;
  refillAt: string | null;
};

export function HeartsBadge({ hearts, refillAt }: Props) {
  const timeLeft = formatTimeLeft(refillAt);
  const low = hearts <= 1;

  return (
    <View style={styles.wrap}>
      <View style={[styles.pill, low && styles.pillLow]}>
        <Text style={styles.hearts}>
          {'❤️'.repeat(hearts)}
          {'🖤'.repeat(MAX_HEARTS - hearts)}
        </Text>
      </View>
      {timeLeft && <Text style={styles.timer}>⏱ {timeLeft}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'flex-end' },
  pill: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radii.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  pillLow: { borderColor: colors.dangerLight, backgroundColor: colors.dangerLight },
  hearts: { fontSize: 14, letterSpacing: 1 },
  timer: { fontSize: 11, color: colors.textMuted, marginTop: spacing.xs, fontWeight: '600' },
});
