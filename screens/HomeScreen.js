import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courantino</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Lesson')}
      >
        <Text style={styles.buttonText}>Start Lesson</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40 },
  button: { backgroundColor: '#58cc02', paddingVertical: 16, paddingHorizontal: 32, borderRadius: 16 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});