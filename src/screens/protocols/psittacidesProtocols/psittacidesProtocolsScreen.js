import { Text, ScrollView } from 'react-native';
import AnesthesiaCalculator from '../../../components/AnesthesiaCalculator';
import styles from './styles';

const psittacidesAnesthesia = [
  { name: 'Dexmedetomidina', doses: 0.1, concentration: 0.5 },
  { name: 'Cetamina', doses: 20, concentration: 100 },
  { name: 'Midazolam', doses: 0.5, concentration: 5 },
  { name: 'Atipamezole', doses: 1, concentration: 5 },
  { name: 'Flumazenil', doses: 0.1, concentration: 0.1 },
];

export default function RabbitsDentistryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.description}>
        Insira o peso do animal para calcular automaticamente os volumes dos
        anestésicos. Toque na concentração para alterar, se necessário.
      </Text>

      <AnesthesiaCalculator drugs={psittacidesAnesthesia} />
    </ScrollView>
  );
}
