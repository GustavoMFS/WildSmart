import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { OutrasMed } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const DiversosPasseriformes = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [0, 0] },
    { index: 1, doses: [10, 30] },
    { index: 2, doses: [4, 5] },
    { index: 3, doses: [0.5, 0.5] },
    { index: 4, doses: [0, 0] },
    { index: 5, doses: [1.5, 6] },
    { index: 6, doses: [5, 20] },
    { index: 7, doses: [1.25, 5] },
    { index: 8, doses: [0, 0] },
    { index: 9, doses: [0, 0] },
    { index: 10, doses: [0.5, 1] },
    { index: 11, doses: [0.1, 2.2] },
    { index: 12, doses: [0, 0] },
    { index: 13, doses: [2, 2.2] },
    { index: 14, doses: [0.2, 1] },
    { index: 15, doses: [0.5, 1] },
    { index: 16, doses: [5, 10] },
    { index: 17, doses: [0.5, 5] },
    { index: 18, doses: [100, 150] },
    { index: 19, doses: [5, 20] },
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
  removerMedicamento(medAtualizados, [0, 4, 8, 9, 12]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
        <View style={{flex: 1}}>
          <BotaoVoltar rota={() => navigation.goBack()} />
        </View>
        <View style={{flex: 7}}>
          <Text style={styles.titulo}>
            Passeriformes - Diversos
          </Text>
        </View>
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
export default DiversosPasseriformes