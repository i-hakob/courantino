import { View, Text, StyleSheet } from 'react-native';

export default function LessonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson goes here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24 },
});