import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const HomeButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.mainButton} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calculadora Veterinária</Text>
        <Text style={styles.subtitle}>
          Bem-vindo! Escolha uma das opções abaixo para começar.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <HomeButton
          label="Calculadoras"
          onPress={() => navigation.navigate('Calculators')}
        />
        <HomeButton
          label="Protocolos Anestésicos"
          onPress={() => navigation.navigate('Protocols')}
        />
        <HomeButton
          label="Medicamentos por Espécie"
          onPress={() => navigation.navigate('Species')}
        />
      </View>
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.contactText}>📞 Contato / Suporte</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
