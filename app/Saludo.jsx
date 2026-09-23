import { Text } from 'react-native';

// Componente Saludo
export function Saludo(props) {
  return (
      <Text style={styles.title}>{props.lang}, React Native!.</Text>
  );
}

const styles = StyleSheet.create({
  contenedor: { 
    flex: 1, justifyContent: 'center', alignItems: 'center' 
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#229e7f'
  },
});