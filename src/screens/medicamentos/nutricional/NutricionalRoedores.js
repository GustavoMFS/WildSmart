import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import CalculadoraBase from "../../../components/CalculadoraBase";
import { Analgesia } from "../../../data/dataMedicamentos";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const NutricionalRoedores = ({ navigation }) => {
  const atualizacoes = [
    { index: 0, doses: [0, 0] },
    { index: 1, doses: [0, 0] },
    { index: 2, doses: [0, 0] },
    { index: 3, doses: [0, 0] },
    { index: 4, doses: [0, 0] },
    { index: 5, doses: [0, 0] },
    { index: 6, doses: [0, 0] },
    { index: 7, doses: [0, 0] },
    { index: 8, doses: [0, 0] },
    { index: 9, doses: [0, 0] },
  ];

  const medAtualizados = Analgesia.map((med, i) => {
    const atualizacao = atualizacoes.find(a => a.index === i);
    if (atualizacao) {
      return { ...med, doses: atualizacao.doses };
    }
    return med;
  });
  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
      }}>
        <View style={{ flexDirection: 'row' }}>
          <BotaoVoltar rota={() => navigation.goBack()} />
          <Text style={styles.titulo}>
            Roedores - Diversos
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
export default NutricionalRoedores