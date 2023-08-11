import React from "react";
import { StyleSheet, Text, TouchableHighlight, View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const BotaoVoltarConfig = ({ rota, navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(rota)} >
      <View>
        <Icon name="arrow-back-outline" size={50} color="black"></Icon>
      </View>
    </TouchableWithoutFeedback>
  )
}

const BotaoCalculadoraIndividual = ({ rota, navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(rota)} >
      <View>
        <Icon name="calculator" size={40} color="black"></Icon>
      </View>
    </TouchableWithoutFeedback>
  )
}


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
    <View style={{ alignItems: 'center' }}>
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

const CalculadoraIndiv = ({ rota, navigation }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate(rota)}>
        <Text style={styles.texto}>Calculadora Individual</Text>
      </TouchableHighlight>
    </View>
  )
}

const BotaoComprimido = ({ title, onPress, selected }) => (
  <TouchableHighlight
    onPress={onPress}
    style={[styles.botaoDuplo, selected ? styles.botaoSelecionado : styles.botaoNaoSelecionado]}
  >
    <Text style={[styles.buttonText, selected ? styles.selectedButtonText : styles.unselectedButtonText]}>
      {title}
    </Text>
  </TouchableHighlight>
);

const BotaoSobre = ({ rota, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoSobre}
        onPress={() => navigation.navigate(rota)}>
        <Text style={styles.buttonText}>Contato</Text>
      </TouchableOpacity>
    </View>
  )
};


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
  botaoSobre: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    backgroundColor: '#215bff',
    borderRadius: 7,
    width: 110,
    height: 70,
    borderWidth: 2,
    borderColor: 'black'
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
  },
  botaoDuplo: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 100,
    height: 50,
    marginTop: 15,
    marginBottom: 30,
  },
  botaoNaoSelecionado: {
    backgroundColor: 'grey',
  },
  botaoSelecionado: {
    backgroundColor: '#215bff',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: 'white',
  },
  unselectedButtonText: {
    color: 'black',
  },
})

export {
  CalcularButton,
  BotaoVoltar,
  WarnButton,
  BotaoVoltarConfig,
  CalculadoraIndiv,
  BotaoCalculadoraIndividual,
  BotaoComprimido,
  BotaoSobre,
}
