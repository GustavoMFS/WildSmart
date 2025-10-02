import { Text, ScrollView } from 'react-native';
import AnesthesiaCalculator from '../../../components/AnesthesiaCalculator';
import styles from './styles';

const rodentsAnesthesia = [
  { name: 'Dexmedetomidina', doses: 0.06, concentration: 0.5 },
  { name: 'Petidina', doses: 10, concentration: 50 },
  { name: 'Midazolam', doses: 1, concentration: 5 },
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

      <AnesthesiaCalculator drugs={rodentsAnesthesia} />
    </ScrollView>
  );
}
