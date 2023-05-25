import React from "react";
import { StyleSheet, Text, TouchableHighlight, View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const BotaoVoltar = ({ rota }) => {
  return (
    <TouchableWithoutFeedback onPress={(rota)} >
    <View>
      <Icon name="arrow-back-outline" size={50} color="black"></Icon>
    </View>
  </TouchableWithoutFeedback>
    )
  }

const CalcularButton = ({ rota }) => {
  return (
    <View style={{alignItems:'center'}}>
      <TouchableHighlight
        style={styles.button}
        onPress={rota}>
        <Text style={styles.texto}>Calcular</Text>
      </TouchableHighlight>
    </View>
  )
}
const WarnButton = ({ texto, rota, navigation }) => {
  return (
      <View style={styles.container}>
          <TouchableOpacity
              style={styles.botaoPosicao}
              onPress={() => navigation.navigate(rota)}>
              <Text style={styles.botaoTexto}>{texto}</Text>
          </TouchableOpacity>
      </View>

  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
},
botaoPosicao: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    backgroundColor: '#00FF00',
    borderRadius: 50,
    width: 150,
    height: 80,
},
botaoTexto: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#215bff',
    borderRadius: 5,
    width: 100,
    height: 50,
  },
  texto: {
    textAlign: 'center',
    color: 'white',
  }
})

export {
  CalcularButton,
  BotaoVoltar,
  WarnButton,
}
