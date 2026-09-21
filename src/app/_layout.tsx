import { Stack } from 'expo-router';
import { colors } from '@/theme/theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.bg },
        headerShadowVisible: false,
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: '800', fontSize: 18 },
        contentStyle: { backgroundColor: colors.bg },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Courantino' }} />
      <Stack.Screen name="section/[sectionId]" options={{ title: 'Section' }} />
      <Stack.Screen name="lesson/[lessonId]" options={{ title: 'Lesson', headerBackTitle: 'Exit' }} />
      <Stack.Screen name="results" options={{ title: '', headerBackVisible: false }} />
    </Stack>
  );
}
