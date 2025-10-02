import {
  View,
  Text,
  Linking,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

export default function ContactScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:gusmfscoder@gmail.com');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contato</Text>

      {/* Contact Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📧 Email</Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.link}>gusmfscoder@gmail.com</Text>
        </TouchableOpacity>
      </View>

      {/* App Development Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚠️ Aviso</Text>
        <Text style={styles.text}>
          Este aplicativo ainda está em desenvolvimento. Algumas funcionalidades
          podem não estar disponíveis.
        </Text>
      </View>

      {/* Latest Updates */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📝 Últimas Atualizações</Text>
        <View style={styles.updateList}>
          <Text style={styles.updateItem}></Text>
          <Text style={styles.updateItem}></Text>
          <Text style={styles.updateItem}></Text>
        </View>
      </View>

      {/* App Version */}
      <View style={styles.section}>
        <Text style={styles.text}>Versão: 2.0.0</Text>
      </View>
    </ScrollView>
  );
}
