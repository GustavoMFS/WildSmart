import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DosageCalculator() {
  const [weight, setWeight] = useState('');
  const [dose, setDose] = useState('');
  const [concentration, setConcentration] = useState('');
  const [isLiquid, setIsLiquid] = useState(true);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const d = parseFloat(dose);
    const c = parseFloat(concentration);

    if (!w || !d || (isLiquid && !c)) {
      setResult('Preencha todos os campos corretamente.');
      return;
    }

    let volume;
    if (isLiquid) {
      volume = (d * w) / c;
      setResult(`${volume.toFixed(2)} ml`);
    } else {
      volume = d * w;
      setResult(`${volume.toFixed(2)} mg`);
    }
  };

  return (
    <View style={styles.calcContainer}>
      {/* Toggle */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, isLiquid && styles.activeToggle]}
          onPress={() => setIsLiquid(true)}
        >
          <Text
            style={[
              styles.toggleText,
              // eslint-disable-next-line react-native/no-inline-styles
              { color: isLiquid ? '#fff' : '#3E5BA6' },
            ]}
          >
            Líquido
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.toggleButton, !isLiquid && styles.activeToggle]}
          onPress={() => setIsLiquid(false)}
        >
          <Text
            style={[
              styles.toggleText,
              // eslint-disable-next-line react-native/no-inline-styles
              { color: !isLiquid ? '#fff' : '#3E5BA6' },
            ]}
          >
            Sólido
          </Text>
        </TouchableOpacity>
      </View>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Peso do animal (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Dose (mg/kg)"
        keyboardType="numeric"
        value={dose}
        onChangeText={setDose}
      />

      {isLiquid && (
        <TextInput
          style={styles.input}
          placeholder="Concentração (mg/ml)"
          keyboardType="numeric"
          value={concentration}
          onChangeText={setConcentration}
        />
      )}

      {/* Button */}
      <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
        <Text style={styles.calculateText}>Calcular</Text>
      </TouchableOpacity>

      {/* Resultado */}
      {result && <Text style={styles.result}>Resultado: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  calcContainer: {
    flex: 1,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3E5BA6',
    backgroundColor: '#fff',
  },
  activeToggle: {
    backgroundColor: '#3E5BA6',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
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
