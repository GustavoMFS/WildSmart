import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { Antipara } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AntiparasitariosLagomorfos = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [1, 5] },
    { index: 1, doses: [0.2, 0.4] },
    { index: 2, doses: [5, 20] },
    { index: 3, doses: [0, 0] },
    { index: 4, doses: [5, 80] },
    { index: 5, doses: [10, 10] },
    { index: 6, doses: [0, 0] },
    { index: 7, doses: [5, 40] },
    { index: 8, doses: [0.2, 0.4] },
    { index: 9, doses: [0.2, 0.2] },
    { index: 10, doses: [12, 30] },
    { index: 11, doses: [100000, 100000] },
  ];

  const medAtualizados = Antipara.map((med, i) => {
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
  removerMedicamento(medAtualizados, [3, 6]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <BotaoVoltar rota={() => navigation.goBack()} />
          <Text style={styles.titulo}>
            Lagomorfos - Antiparasitários
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraBase medIndefinida={medAtualizados} />
        </View>
        <Text style={styles.textoObs}>Obs: Advantage Max3 possui indicação de 0,1ml/kg.{"\n"}</Text>
      </ScrollView>
    </View>
  )
}
export default AntiparasitariosLagomorfos