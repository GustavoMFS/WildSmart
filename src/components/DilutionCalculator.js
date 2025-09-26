import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DilutionCalculator() {
  const [totalMg, setTotalMg] = useState('');
  const [desiredConcentration, setDesiredConcentration] = useState('');
  const [result, setResult] = useState(null);

  const calculateDilution = () => {
    const mg = parseFloat(totalMg);
    const conc = parseFloat(desiredConcentration);

    if (!mg || !conc) {
      setResult('Preencha todos os campos corretamente.');
      return;
    }

    const volume = mg / conc;
    setResult(`${volume.toFixed(2)} ml`);
  };

  return (
    <View style={styles.calcContainer}>
      <TextInput
        style={styles.input}
        placeholder="Quantidade total (mg)"
        keyboardType="numeric"
        value={totalMg}
        onChangeText={setTotalMg}
      />

      <TextInput
        style={styles.input}
        placeholder="Concentração desejada (mg/ml)"
        keyboardType="numeric"
        value={desiredConcentration}
        onChangeText={setDesiredConcentration}
      />

      <TouchableOpacity
        style={styles.calculateButton}
        onPress={calculateDilution}
      >
        <Text style={styles.calculateText}>Calcular</Text>
      </TouchableOpacity>

      {result && (
        <Text style={styles.result}>Você precisa adicionar: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  calcContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  calculateButton: {
    backgroundColor: '#3E5BA6',
    paddingVertical: 15,
    borderRadius: 14,
    marginTop: 10,
  },
  calculateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  result: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});
