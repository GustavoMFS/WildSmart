// import React from "react";
// import { View, Text, ScrollView } from "react-native";
// import styles from "../components/Style";
// import { WarnButton } from "../components/BotaoCustom";
// const Info = ({ navigation }) => (

import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../components/Style";
import CalculadoraIndividual from "../components/CalculadoraIndividual";
import { AnestSedat } from "../data/dataMedicamentos";
import { BotaoVoltarConfig } from "../components/BotaoCustom";

const Info = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
      }}>
        <View style={{ flexDirection: 'row' }}>
        <BotaoVoltarConfig rota={'NavInicial'} navigation={navigation} />
          <Text style={styles.titulo}>
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          {/* <CalculadoraIndividual /> */}
        </View>
      </ScrollView>
    </View> 
  )
}










//     <View style={styles.container}>
//         <View style={styles.cabecalhoWarn}>
//             <Text style={styles.tituloWarn}>
//                 Sobre este App
//             </Text>
//         </View>
//         <ScrollView>
//             <Text style={styles.textoWarn}>
//                 {'\t'}{"\n"}{"\n"}
//             </Text>
//         </ScrollView>
//     </View>
// )


export default Info

