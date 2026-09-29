import { StyleSheet, Text } from 'react-native';

const translations = {
  es: 'Hola',
  en: 'Hello',
};

// Componente Saludo
export function Saludo({ lang = 'en' }) {
  const greeting = translations[lang]

  return (
      <Text style={styles.title}>{greeting}!</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#229e7f'
  },
});