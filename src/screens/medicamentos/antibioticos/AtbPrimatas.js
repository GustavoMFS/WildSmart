import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { Atb } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AtbPrimatas = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [2, 5] },
    { index: 1, doses: [6.7, 13.3] },
    { index: 2, doses: [6.7, 13.3] },
    { index: 3, doses: [0, 0] },
    { index: 4, doses: [25, 50] },
    { index: 5, doses: [20, 40] },
    { index: 6, doses: [25, 50] },
    { index: 7, doses: [10, 30] },
    { index: 8, doses: [2.5, 4] },
    { index: 9, doses: [5, 5] },
    { index: 10, doses: [2, 5] },
    { index: 11, doses: [0, 0] },
    { index: 12, doses: [10, 50] },
    { index: 13, doses: [25, 50] },
    { index: 14, doses: [4, 4] },
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
  removerMedicamento(medAtualizados, [3, 11]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <BotaoVoltar rota={() => navigation.goBack()} />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.titulo}>
              Primatas - Antibióticos
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraBase medIndefinida={medAtualizados} />
        </View>
        <Text style={styles.textoObs}>
          Para sulfadimetoxina recomenda-se iniciar o primeiro dia com 50mg/kg e depois manter com 25mg/kg.
        </Text>
      </ScrollView>
    </View>
  )
}
export default AtbPrimatas

