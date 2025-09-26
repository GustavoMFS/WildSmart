import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MammalsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mamíferos</Text>
      <Text>Aqui futuramente você listará os grupos de mamíferos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
});
