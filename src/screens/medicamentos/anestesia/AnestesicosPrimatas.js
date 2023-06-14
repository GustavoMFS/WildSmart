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
    { index: 3, doses: [0.05, 0.05] },
    { index: 4, doses: [5, 40] },
    { index: 5, doses: [0.01, 0.01] },
    { index: 6, doses: [0.25, 1] },
    { index: 7, doses: [0.02, .01] },
    { index: 8, doses: [0.05, 1.2] },
    { index: 9, doses: [2, 4] },
    { index: 10, doses: [0.3, 6] },
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
  removerMedicamento(medAtualizados, []);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <BotaoVoltar rota={() => navigation.goBack()} />
          <Text style={styles.titulo}>
            Primatas - Anestésicos
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
export default AnestesicosPrimatas