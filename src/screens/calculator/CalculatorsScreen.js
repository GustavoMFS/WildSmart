import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function CalculatorsScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calculadoras Disponíveis</Text>

      <TouchableOpacity
        style={styles.calcButton}
        onPress={() => navigation.navigate('DosageCalculator')}
      >
        <Text style={styles.calcButtonText}>💉 Calculadora de Dosagem</Text>
        <Text style={styles.calcDescription}>
          Calcule o volume ou quantidade de medicamento com base em dose, peso e
          concentração.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.calcButton}
        onPress={() => navigation.navigate('DilutionCalculator')}
      >
        <Text style={styles.calcButtonText}>⚗️ Calculadora de Diluição</Text>
        <Text style={styles.calcDescription}>
          Calcule o volume necessário para preparar uma solução com concentração
          desejada a partir de comprimidos ou frascos sólidos.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
