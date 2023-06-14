import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { Antipara } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const AntiparasitariosFerrets = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [0.15, 0.8] },
    { index: 1, doses: [0, 0] },
    { index: 2, doses: [20, 50] },
    { index: 3, doses: [0, 0] },
    { index: 4, doses: [0, 0] },
    { index: 5, doses: [0, 0] },
    { index: 6, doses: [0, 0] },
    { index: 7, doses: [1.5, 33] },
    { index: 8, doses: [0.02, 1] },
    { index: 9, doses: [0, 0] },
    { index: 10, doses: [6, 18] },
    { index: 11, doses: [0, 0] },
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
  removerMedicamento(medAtualizados, [1, 3, 4, 5, 6, 9, 11]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoEspecie}>
        <View style={{ flexDirection: 'row' }}>
          <BotaoVoltar rota={() => navigation.goBack()} />
          <Text style={styles.titulo}>
            Ferrets - Antiparasitários
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <CalculadoraBase medIndefinida={medAtualizados} />
        </View>
        <Text style={styles.textoObs}>Obs: Advocate possui indicação de 0,4ml/animal.{"\n"}
          Fipronil possui indicação de 50mg de medicamento/animal.{"\n"}
          Moxidectina possui indicação de 0,17mg/animal</Text>
      </ScrollView>
    </View>
  )
}
export default AntiparasitariosFerrets