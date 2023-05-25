import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraMultiEspecies from "../../../components/CalculadoraMultiEspecies";
import { RoedoresATB } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AtbRoedores = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
      }}>
        <View style={{flexDirection: 'row'}}>
        <BotaoVoltar rota={() => navigation.goBack()}/>
        <Text style={styles.titulo}>
          Roedores - Antibióticos
        </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraMultiEspecies medIndefinida={RoedoresATB} />
        </View>
        <Text style={styles.textoObs}>Obs: Penicilinas são contraindicadas diversos roedores e para lagomorfos.{"\n"}Animais sensíveis a penicilinas também podem ser sensíveis a cefalosporinas</Text>
      </ScrollView>
    </View>
  )
}
export default AtbRoedores