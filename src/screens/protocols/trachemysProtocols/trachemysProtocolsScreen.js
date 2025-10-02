import { Text, ScrollView } from 'react-native';
import AnesthesiaCalculator from '../../../components/AnesthesiaCalculator';
import styles from './styles';

const psittacidesAnesthesia = [
  { name: 'Propofol', doses: 4, concentration: 10 },
];

export default function RabbitsDentistryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.description}>
        Insira o peso do animal para calcular automaticamente os volumes dos
        anestésicos. Toque na concentração para alterar, se necessário.
      </Text>

      <AnesthesiaCalculator drugs={psittacidesAnesthesia} />
      <Text style={styles.description}>
        Obs: Sedação para procedimentos rápidos. Para procedimentos complexos
        que podem causar dor ao paciente deve ser associado outros fármacos.
      </Text>
    </ScrollView>
  );
}
