import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';

export default function AnesthesiaCalculator({ drugs }) {
  const [weight, setWeight] = useState('');
  const [concentrations, setConcentrations] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDrugIndex, setSelectedDrugIndex] = useState(null);
  const [newConcValue, setNewConcValue] = useState('');

  useEffect(() => {
    setConcentrations(drugs.map(d => d.concentration));
  }, [drugs]);

  const handleWeightChange = text => {
    const clean = text.replace(',', '.');
    if (/^\d*\.?\d*$/.test(clean)) setWeight(clean);
  };

  const calculateVolume = (dose, conc) => {
    const p = parseFloat(weight);
    if (!p || !conc) return 0;
    return (p * dose) / conc;
  };

  const openConcentrationModal = index => {
    setSelectedDrugIndex(index);
    setNewConcValue(concentrations[index].toString());
    setModalVisible(true);
  };

  const handleSaveConcentration = () => {
    const newConcentrations = [...concentrations];
    newConcentrations[selectedDrugIndex] = parseFloat(newConcValue) || 0;
    setConcentrations(newConcentrations);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Peso do animal (kg)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ex: 2.5"
        value={weight}
        onChangeText={handleWeightChange}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={[styles.cell, styles.cellName, styles.header]}>
              Medicamento
            </Text>
            <Text style={[styles.cell, styles.cellSmall, styles.header]}>
              Dose (mg/kg)
            </Text>
            <Text style={[styles.cell, styles.cellSmall, styles.header]}>
              Conc. (mg/ml)
            </Text>
            <Text style={[styles.cell, styles.cellSmall, styles.header]}>
              Volume (ml)
            </Text>
          </View>

          {/* Dados */}
          {drugs.map((drug, index) => (
            <View key={index} style={styles.row}>
              <Text style={[styles.cell, styles.cellName]} numberOfLines={1}>
                {drug.name}
              </Text>

              <Text style={[styles.cell, styles.cellSmall]}>{drug.doses}</Text>

              <TouchableOpacity
                style={[styles.cell, styles.cellSmall]}
                onPress={() => openConcentrationModal(index)}
              >
                <Text style={styles.concentration}>
                  {concentrations[index]}
                </Text>
              </TouchableOpacity>

              <Text style={[styles.cell, styles.cellSmall]}>
                {weight
                  ? calculateVolume(drug.doses, concentrations[index]).toFixed(
                      2,
                    )
                  : '--'}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Digite a nova concentração:</Text>
            <TextInput
              style={styles.modalInput}
              keyboardType="numeric"
              value={newConcValue}
              onChangeText={setNewConcValue}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Salvar" onPress={handleSaveConcentration} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    minWidth: 300,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  cell: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellName: {
    width: 150,
    textAlign: 'left',
    paddingLeft: 10,
  },
  cellSmall: {
    width: 110,
    textAlign: 'center',
  },
  header: {
    fontWeight: '700',
    backgroundColor: '#e0e0e0',
  },
  concentration: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '600',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
