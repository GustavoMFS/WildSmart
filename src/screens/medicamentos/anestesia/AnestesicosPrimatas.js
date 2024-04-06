import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { AnestSedat } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AnestesicosPrimatas = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [0.5, 1] },
    { index: 1, doses: [0.15, 0.3] },
    { index: 2, doses: [2, 2] },
    { index: 3, doses: [0.05, 0.2] },
    { index: 4, doses: [5, 12] },
    { index: 5, doses: [0.01, 0.035] },
    { index: 6, doses: [0.25, 1] },
    { index: 7, doses: [0.02, 0.025] },
    { index: 8, doses: [0.05, 0.1] },
    { index: 9, doses: [2, 4] },
    { index: 10, doses: [2.5, 5] },
    { index: 11, doses: [1, 5] },
    { index: 12, doses: [0.5, 6] },
  ];

  const medAtualizados = AnestSedat.map((med, i) => {
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
  removerMedicamento(medAtualizados, [9, 11]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <BotaoVoltar rota={() => navigation.goBack()} />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.titulo}>
              Primatas - Anestésicos
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
export default AnestesicosPrimatas