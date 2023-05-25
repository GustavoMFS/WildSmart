import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Tabela = ({ headers, data }) => {
  return (
    <View style={styles.tabela}>
      <View style={styles.linha}>
        {headers.map((header, index) => (
          <Text key={index} style={styles.celula}>
            {header}
          </Text>
        ))}
      </View>
      {data.map((linha, linhaIndex) => (
        <View key={linhaIndex} style={styles.linha}>
          {linha.map((celula, celulaIndex) => (
            <Text key={celulaIndex} style={styles.celula}>
              {celula}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabela: {
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  linha: {
    flexDirection: 'row',
  },
  celula: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Tabela;