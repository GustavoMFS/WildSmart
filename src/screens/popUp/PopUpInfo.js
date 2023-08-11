import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export const InfoCalc = () => {
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisivel(true)} style={styles.botao}>
        <Icon name="help-circle" size={30} color="blue" />
      </TouchableOpacity>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.textoHeader}>Como funciona a Calculadora de Doses:{"\n"}</Text>
            <Text style={styles.textoBody}> Na área indicada coloque o peso do animal, em quilos, e em seguida pressione o botão "Calcular"</Text>
            <Text style={styles.textoBody}> Na tabela será possível ver o nome dos medicamentos, a espécie indicada, sua dose máxima e mínima e em seguida o volume máximo e mínimo referente as doses citadas</Text>
            <Text style={styles.textoBody}> Caso queira usar uma dose ou concentração diferente acesse a Calculadora Individual no icone de calculadora ao lado</Text>
            <TouchableOpacity onPress={() => setModalVisivel(false)} style={styles.fecharBotao}>
              <Text style={styles.textoFecharBotao}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const InfoCalcIndividual = () => {
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisivel(true)} style={styles.botao}>
        <Icon name="help-circle" size={30} color="blue" />
      </TouchableOpacity>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.textoHeader}> Selecione qual é a apresentação do medicamento que será calculado: {"\n"}</Text>
            <Text style={styles.textoBody}> Exemplos de medicamentos sólidos: comprimidos, drágeas e capsulas{"\n"}</Text>
            <Text style={styles.textoBody}> Exemplos de medicamentos líquidos: xaropes, soluções e injetáveis</Text>
            <TouchableOpacity onPress={() => setModalVisivel(false)} style={styles.fecharBotao}>
              <Text style={styles.textoFecharBotao}>Fechar </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoHeader: {
    color: 'black',
    fontSize: 18,
    textAlign: 'justify',
  },
  textoBody: {
    color: 'black',
    fontSize: 14,
    textAlign: 'justify',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  fecharBotao: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  textoFecharBotao: {
    color: 'blue',
  },
  botao: {
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  
});

export default InfoCalc