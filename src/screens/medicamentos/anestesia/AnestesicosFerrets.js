import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { AnestSedat } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AnestesicosFerrets = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [0.1, 0.5] },
    { index: 1, doses: [0.4, 0.4] },
    { index: 2, doses: [1, 1.5] },
    { index: 3, doses: [0.1, 0.4] },
    { index: 4, doses: [10, 60] },
    { index: 5, doses: [0.04, 0.1] },
    { index: 6, doses: [0.5, 2] },
    { index: 7, doses: [0, 0] },
    { index: 8, doses: [0.25, 0.5] },
    { index: 9, doses: [5, 10] },
    { index: 10, doses: [1, 20] },
    { index: 11, doses: [5, 10] },
    { index: 12, doses: [0.1, 2] },
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
  removerMedicamento(medAtualizados, [7]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <BotaoVoltar rota={() => navigation.goBack()} />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.titulo}>
              Ferrets - Anestésicos
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
export default AnestesicosFerrets