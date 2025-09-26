import { Text, ScrollView } from 'react-native';
import styles from './styles';
import DilutionCalculator from '../../../components/DilutionCalculator';

export default function DilutionCalculatorScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calculadora de Diluição</Text>
      <Text style={styles.subtitle}>
        Informe a quantidade total do medicamento disponível (em mg) e a
        concentração desejada (mg/ml).
      </Text>
      <DilutionCalculator />
    </ScrollView>
  );
}
