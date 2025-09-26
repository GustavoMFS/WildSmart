import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SpeciesScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Espécies</Text>
      <Button
        title="Mamíferos"
        onPress={() => navigation.navigate('Mammals')}
      />
      <Button title="Aves" onPress={() => navigation.navigate('Birds')} />
      <Button title="Répteis" onPress={() => navigation.navigate('Reptiles')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
