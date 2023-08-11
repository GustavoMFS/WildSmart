import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { OutrasMed } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const DiversosFerrets = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [0, 0] },
    { index: 1, doses: [0, 0] },
    { index: 2, doses: [4, 6] },
    { index: 3, doses: [0.25, 0.5] },
    { index: 4, doses: [0, 0] },
    { index: 5, doses: [0, 0] },
    { index: 6, doses: [5, 10] },
    { index: 7, doses: [0.25, 0.5] },
    { index: 8, doses: [0, 0] },
    { index: 9, doses: [0.25, 2.5] },
    { index: 10, doses: [0, 0] },
    { index: 11, doses: [1, 4] },
    { index: 12, doses: [0.5, 0.5] },
    { index: 13, doses: [2, 2] },
    { index: 14, doses: [0.15, 0.75] },
    { index: 15, doses: [0.2, 1] },
    { index: 16, doses: [0, 0] },
    { index: 17, doses: [0.2, 3] },
    { index: 18, doses: [50, 250] },
    { index: 19, doses: [25, 125] },
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
  removerMedicamento(medAtualizados, [0, 1, 4, 5, 8, 10, 16]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <BotaoVoltar rota={() => navigation.goBack()} />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.titulo}>
              Ferrets - Diversos
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraBase medIndefinida={medAtualizados} />
        </View>
        <Text style={styles.textoObs}>Obs: Bromexina possui indicação de 0.3mg/animal{"\n"}</Text>
      </ScrollView>
    </View>
  )
}
export default DiversosFerrets