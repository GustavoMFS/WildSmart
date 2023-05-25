import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { OutrasMed } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const DiversosPrimatas = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [0, 0] },
    { index: 1, doses: [0, 0] },
    { index: 2, doses: [2, 2] },
    { index: 3, doses: [0.05, 0.1] },
    { index: 4, doses: [2.5, 5] },
    { index: 5, doses: [0.5, 0.5] },
    { index: 6, doses: [5, 10] },
    { index: 7, doses: [0.1, 0.5] },
    { index: 8, doses: [0.1, 0.1] },
    { index: 9, doses: [0.5, 1] },
    { index: 10, doses: [0, 0] },
    { index: 11, doses: [0.3, 4] },
    { index: 12, doses: [0.5, 0.5] },
    { index: 13, doses: [2, 2] },
    { index: 14, doses: [0, 0] },
    { index: 15, doses: [0.2, 1] },
    { index: 16, doses: [0, 0] },
    { index: 17, doses: [0.1, 3] },
    { index: 18, doses: [4, 15] },
    { index: 19, doses: [25, 25] },
  ];

  const medAtualizados = OutrasMed.map((med, i) => {
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
  removerMedicamento(medAtualizados, []);

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
            Primatas - Diversos
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
export default DiversosPrimatas