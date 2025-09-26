import { Text, ScrollView } from 'react-native';
import styles from './styles';

export default function ProtocolsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PROTOCOLOS</Text>
    </ScrollView>
  );
}
