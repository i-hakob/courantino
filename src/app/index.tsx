import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { SECTIONS } from '@/data/sections';
import { colors, spacing, radii, shadow, accentFor } from '@/theme/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.kicker}>BIENVENUE 👋</Text>
        <Text style={styles.title}>Courantino</Text>
        <Text style={styles.subtitle}>Pick a section and keep the streak alive</Text>
      </View>

      <FlatList
        data={SECTIONS}
        keyExtractor={(s) => s.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const accent = accentFor(item.id);
          return (
            <Pressable
              style={({ pressed }) => [
                styles.card,
                { borderColor: accent.light },
                pressed && styles.cardPressed,
              ]}
              onPress={() => router.push(`/section/${item.id}`)}
            >
              <View style={[styles.badge, { backgroundColor: accent.tint }]}>
                <Text style={styles.badgeText}>{index + 1}</Text>
              </View>
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardMeta}>{item.lessons.length} lessons</Text>
              </View>
              <View style={[styles.chevronWrap, { backgroundColor: accent.base }]}>
                <Text style={styles.chevron}>›</Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, paddingHorizontal: spacing.xl },
  hero: { paddingTop: spacing.xl, paddingBottom: spacing.lg },
  kicker: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: spacing.xs,
  },
  title: { fontSize: 34, fontWeight: '800', color: colors.text, letterSpacing: -0.5 },
  subtitle: { fontSize: 15, color: colors.textMuted, marginTop: spacing.xs },
  listContent: { paddingBottom: spacing.xxl, gap: spacing.md },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 2,
    padding: spacing.lg,
    ...shadow.card,
  },
  cardPressed: { opacity: 0.85, transform: [{ scale: 0.99 }] },
  badge: {
    width: 44,
    height: 44,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.lg,
  },
  badgeText: { fontSize: 16, fontWeight: '800', color: colors.text },
  cardBody: { flex: 1 },
  cardTitle: { fontSize: 17, fontWeight: '700', color: colors.text },
  cardMeta: { fontSize: 13, color: colors.textMuted, marginTop: 2 },
  chevronWrap: {
    width: 30,
    height: 30,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevron: { color: colors.white, fontSize: 18, fontWeight: '800', marginTop: -2 },
});
