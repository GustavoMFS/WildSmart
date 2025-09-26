import React from 'react';
import { Text, ScrollView } from 'react-native';
import DosageCalculator from '../../../components/DosageCalculator';
import styles from './styles';

export default function DosageCalculatorScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calculadora de Medicação</Text>
      <Text style={styles.subtitle}>
        Informe os dados abaixo para calcular a dose correta.
      </Text>

      <DosageCalculator />
    </ScrollView>
  );
}
