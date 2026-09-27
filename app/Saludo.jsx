import { StyleSheet, Text } from 'react-native';

// Componente Saludo
export function Saludo(props) {
  return (
      <Text style={styles.title}>Hello, React Native!</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#229e7f'
  },
});