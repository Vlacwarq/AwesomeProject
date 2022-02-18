import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test Txt</Text>
      <Text>Masha</Text>
      <Text>Masha</Text>
<<<<<<< HEAD
      <Text>Vlad 2</Text>
      <Text>Vlad 12</Text>
=======
      <Text>Masha</Text>
>>>>>>> d20a6010306221f6c5611b7bc9d03b287f5489fb
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
