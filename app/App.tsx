import { StyleSheet, View } from 'react-native';
import { Saludo } from './Saludo';

export default function App() {
  return (
    <View style={styles.container}>
      <Saludo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1cccc',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
