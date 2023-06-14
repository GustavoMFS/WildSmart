import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraMultiEspecies from "../../../components/CalculadoraMultiEspecies";
import { RoedoresAnestSedat } from "../../../data/dataMedicamentos";
import {  BotaoVoltar } from "../../../components/BotaoCustom";

const AnestesicosRoedores = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{flexDirection: 'row'}}>
        <BotaoVoltar rota={() => navigation.goBack()}/>
        <Text style={styles.titulo}>
          Roedores - Anestésicos
        </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraMultiEspecies medIndefinida={RoedoresAnestSedat} />
        </View>
        <Text style={styles.textoObs}>Obs: Dose de Atipamezole para roedores é 10x a dose utilizada da Dexmedetomidina.{"\n"}</Text>
      </ScrollView>
    </View>
  )
}
export default AnestesicosRoedores