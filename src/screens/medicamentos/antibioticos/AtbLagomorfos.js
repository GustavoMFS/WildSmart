import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { Atb } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AtbLagomorfos = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [2, 10] },
    { index: 1, doses: [0, 0] },
    { index: 2, doses: [0, 0] },
    { index: 3, doses: [0, 0] },
    { index: 4, doses: [0, 0] },
    { index: 5, doses: [4, 30] },
    { index: 6, doses: [5, 40] },
    { index: 7, doses: [0, 0] },
    { index: 8, doses: [0, 0] },
    { index: 9, doses: [5, 20] },
    { index: 10, doses: [2.5, 8] },
    { index: 11, doses: [5, 40] },
    { index: 12, doses: [15, 50] },
    { index: 13, doses: [10, 15] },
    { index: 14, doses: [15, 40] },
  ];

  const medAtualizados = Atb.map((med, i) => {
    const atualizacao = atualizacoes.find(a => a.index === i);
    if (atualizacao) {
      return { ...med, doses: atualizacao.doses };
    }
    return med;
  });

  function removerMedicamento(array, index) {
    index.sort((a, b) => b - a);
    for (let i = 0; i < index.length; i++) {
      array.splice(index[i], 1);
    }
  }
  removerMedicamento(medAtualizados, [1, 2, 3, 4, 7, 8]);

  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
      }}>
        <View style={{ flexDirection: 'row' }}>
          <BotaoVoltar rota={() => navigation.goBack()} />
          <Text style={styles.titulo}>
            Lagomorfos - Antibióticos
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraBase medIndefinida={medAtualizados} />
        </View>
        <Text style={styles.textoObs}>Obs: Penicilinas são contraindicadas para diversos roedores e para lagomorfos.{"\n"}Animais sensíveis a penicilinas também podem ser sensíveis a cefalosporinas</Text>
      </ScrollView>
    </View>
  )
}
export default AtbLagomorfos
