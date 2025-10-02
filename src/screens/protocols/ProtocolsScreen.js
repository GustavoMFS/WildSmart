import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function ProtocolsScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Protocolos Anestésicos</Text>

      <TouchableOpacity
        style={styles.calcButton}
        onPress={() => navigation.navigate('rabbitsDentistry')}
      >
        <Text style={styles.calcButtonText}>Coelhos - Desgaste</Text>
        <Text style={styles.calcDescription}>
          Protocolo destinado a desgaste dentário de coelhos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.calcButton}
        onPress={() => navigation.navigate('rodentsDentistry')}
      >
        <Text style={styles.calcButtonText}>Roedores - Desgaste</Text>
        <Text style={styles.calcDescription}>
          Protocolo destinado a desgaste dentário de roedores
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.calcButton}
        onPress={() => navigation.navigate('smallRodents')}
      >
        <Text style={styles.calcButtonText}>Pequenos roedores</Text>
        <Text style={styles.calcDescription}>
          Protocolo destinado a procedimentos de pequenos roedores como ratos e
          hamsters
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.calcButton}
        onPress={() => navigation.navigate('psittacidesProtocols')}
      >
        <Text style={styles.calcButtonText}>Psitacídeos</Text>
        <Text style={styles.calcDescription}>
          Protocolo destinado a procedimentos de psitacídeos em geral
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.calcButton}
        onPress={() => navigation.navigate('trachemysProtocols')}
      >
        <Text style={styles.calcButtonText}>Trachemys</Text>
        <Text style={styles.calcDescription}>
          Protocolo destinado a procedimentos rápidos e simples em trachemys
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
