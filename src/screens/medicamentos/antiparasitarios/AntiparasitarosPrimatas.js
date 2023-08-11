import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { Antipara } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AntiparasitariosPrimatas = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [0, 0] },
    { index: 1, doses: [0, 0] },
    { index: 2, doses: [10, 50] },
    { index: 3, doses: [0, 0] },
    { index: 4, doses: [7, 25] },
    { index: 5, doses: [0, 0] },
    { index: 6, doses: [0, 0] },
    { index: 7, doses: [5, 10] },
    { index: 8, doses: [0.2, 0.3] },
    { index: 9, doses: [0.5, 0.5] },
    { index: 10, doses: [0, 0] },
    { index: 11, doses: [100000, 200000] },
  ];

  const medAtualizados = Antipara.map((med, i) => {
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
  removerMedicamento(medAtualizados, [0, 1, 3, 5, 6, 10]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <BotaoVoltar rota={() => navigation.goBack()} />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.titulo}>
              Primatas - Antiparasitários
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraBase medIndefinida={medAtualizados} />
        </View>
        <Text style={styles.textoObs}>Obs: Fipronil 9,8% possui indicação de 0,2ml/kg.{"\n"}</Text>
      </ScrollView>
    </View>
  )
}
export default AntiparasitariosPrimatas