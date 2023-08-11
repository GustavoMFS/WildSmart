import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { AnestSedat } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AnestesicosPasseriformes = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [0, 0] },
    { index: 1, doses: [0.25, 0.5] },
    { index: 2, doses: [0.01, 2] },
    { index: 3, doses: [0.5, 4] },
    { index: 4, doses: [10, 50] },
    { index: 5, doses: [0.4, 0.4] },
    { index: 6, doses: [0.5, 4] },
    { index: 7, doses: [0.02, 0.1] },
    { index: 8, doses: [0.1, 0.2] },
    { index: 9, doses: [0, 0] },
    { index: 10, doses: [0, 0] },
    { index: 11, doses: [5, 10] },
    { index: 12, doses: [0, 0] },
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
  removerMedicamento(medAtualizados, [0, 9, 10, 12]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <BotaoVoltar rota={() => navigation.goBack()} />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.titulo}>
              Passeriformes - Anestésicos
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
export default AnestesicosPasseriformes