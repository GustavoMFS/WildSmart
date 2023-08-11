import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { Atb } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AtbPsitacídeos = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [15, 30] },
    { index: 1, doses: [50, 150] },
    { index: 2, doses: [125, 150] },
    { index: 3, doses: [150, 175] },
    { index: 4, doses: [50, 200] },
    { index: 5, doses: [40, 80] },
    { index: 6, doses: [10, 50] },
    { index: 7, doses: [40, 100] },
    { index: 8, doses: [25, 50] },
    { index: 9, doses: [5, 30] },
    { index: 10, doses: [5, 5] },
    { index: 11, doses: [10, 50] },
    { index: 12, doses: [50, 50] },
    { index: 13, doses: [25, 55] },
    { index: 14, doses: [40, 100] },
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
  removerMedicamento(medAtualizados, []);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <BotaoVoltar rota={() => navigation.goBack()} />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.titulo}>
              Psitacídeos - Antibióticos
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
export default AtbPsitacídeos