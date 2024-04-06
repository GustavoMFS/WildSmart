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
    { index: 2, doses: [25, 100] },
    { index: 3, doses: [0, 0] },
    { index: 4, doses: [0, 0] },
    { index: 5, doses: [0, 0] },
    { index: 6, doses: [2, 2] },
    { index: 7, doses: [0.3, 0.5] },
    { index: 8, doses: [0, 0] },
    { index: 9, doses: [0.5, 0.8] },
    { index: 10, doses: [0.45, 2] },
    { index: 11, doses: [1, 4] },
    { index: 12, doses: [0, 0] },
    { index: 13, doses: [0, 0] },
    { index: 14, doses: [0.25, 1.1] },
    { index: 15, doses: [0.2, 0.5] },
    { index: 16, doses: [0, 0] },
    { index: 17, doses: [1, 2] },
    { index: 18, doses: [4, 15] },
    { index: 19, doses: [500, 500] },
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
  removerMedicamento(medAtualizados, [0, 1, 3, 4, 5, 8, 12, 13, 16]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <BotaoVoltar rota={() => navigation.goBack()} />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.titulo}>
              Primatas - Diversos
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraBase medIndefinida={medAtualizados} />
        </View>
        <Text style={styles.textoObs}>
          Para sucralfato use 0.5g por animal
        </Text>
      </ScrollView>
    </View>
  )
}
export default DiversosPrimatas