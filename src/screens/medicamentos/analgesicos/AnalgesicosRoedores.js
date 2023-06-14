import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraMultiEspecies from "../../../components/CalculadoraMultiEspecies";
import { RoedoresAnalgesia } from "../../../data/dataMedicamentos";
import {  BotaoVoltar } from "../../../components/BotaoCustom";

const AnalgesicosRoedores = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{flexDirection: 'row'}}>
        <BotaoVoltar rota={() => navigation.goBack()}/>
        <Text style={styles.titulo}>
          Roedores - Analgésicos/Anti-Inflamatórios
        </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraMultiEspecies medIndefinida={RoedoresAnalgesia} />
        </View>
      </ScrollView>
    </View>
  )
}
export default AnalgesicosRoedores