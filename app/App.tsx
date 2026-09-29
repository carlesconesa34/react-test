import { StyleSheet, View } from 'react-native';
import { Saludo } from './components/Saludo';

export default function App() {
  return (
    <View style={styles.container}>
      <Saludo lang="es"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
