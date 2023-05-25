import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraMultiEspecies from "../../../components/CalculadoraMultiEspecies";
import { RoedoresAntipara } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AntiparasitariosRoedores = ({ navigation }) => {
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
          Roedores - Antiparasitários
        </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraMultiEspecies medIndefinida={RoedoresAntipara} />
        </View>
        <Text style={styles.textoObs}>Obs: Advantage Max3 pode ser utilizado na dose 0,1ml/kg para porquinhos da índia{"\n"}</Text>
      </ScrollView>
    </View>
  )
}
export default AntiparasitariosRoedores