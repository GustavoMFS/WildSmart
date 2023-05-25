import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { Antipara } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AntiparasitariosPsitacídeos = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [1, 1.5] },
    { index: 1, doses: [1, 1] },
    { index: 2, doses: [8, 50] },
    { index: 3, doses: [3, 7.5] },
    { index: 4, doses: [4, 20] },
    { index: 5, doses: [0, 0] },
    { index: 6, doses: [0, 0] },
    { index: 7, doses: [5, 10] },
    { index: 8, doses: [0.2, 0.4] },
    { index: 9, doses: [0.2, 0.4] },
    { index: 10, doses: [20, 20] },
    { index: 11, doses: [300000, 600000] },
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
  removerMedicamento(medAtualizados, [5, 6]);

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
            Psitacídeos - Antiparasitários
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraBase medIndefinida={medAtualizados} />
        </View>
      </ScrollView>
    </View>
  )
}
export default AntiparasitariosPsitacídeos