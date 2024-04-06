import React from "react";
import { View, Text, ScrollView, Linking } from "react-native";
import styles from "../components/Style";
import { BotaoVoltarConfig } from "../components/BotaoCustom";
import { TouchableHighlight } from "react-native-gesture-handler";

const Sobre = ({ navigation }) => {

  const abrirEmail = () => {
    const email = 'gusmfscoder@gmail.com';
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#c4c4c4',
        alignItems: 'center'
      }}>
        <BotaoVoltarConfig rota={'NavInicial'} navigation={navigation} />
        <Text style={{
          fontSize: 30,
          color: 'black',
          flex: 1,
          textAlign: "center",
        }}>
          Contato
        </Text>
      </View>
      <Text style={styles.textoWarn}>
        {'\t'} Este aplicativo ainda esta em desenvolvimento, portanto podem surgir problemas ou erros ao usá-lo. Caso encontre algum problema ou tenha alguma sugestão envie uma mensagem para o email:
      </Text>
      <TouchableHighlight onPress={abrirEmail}>
        <Text style={{ fontSize: 20, textAlign: 'center', color: 'blue' }}>gusmfscoder@gmail.com</Text>
      </TouchableHighlight>
      <View style={styles.creditosRodaPe}>
        <Text style={styles.creditos}> V 1.1.0</Text>
      </View>
    </View>
  )
}

export default Sobre







