import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./Style";


const CalculadoraDoseUnica = (props) => {
    const medIndefinida = props
    const [peso, setPeso] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        calcular();
    }, [peso]);

    const handlePesoInputChange = (text) => {
        const regex = /^[0-9]*(?:[.,][0-9]*)?$/;
        if (regex.test(text) && (text.indexOf('.') === -1 || text.indexOf('.') === text.lastIndexOf('.'))) {
            setPeso(text);
        }
    };
    const calcular = () => {
        const res = [];
        for (let i = 0; i < props.medIndefinida.length; i++) {
            const nomeMedicamento = props.medIndefinida[i].nome;
            const doses = props.medIndefinida[i].doses;
            const concentracao = props.medIndefinida[i].concentracao;
            const volume = (peso.replace(",", ".") * doses) / concentracao;
            res.push([nomeMedicamento, doses, volume]);
        }
        setResultados(res);
    }

    const renderTableHeader = () => {
        return (
            <View style={styles.cabecalhoTabela}>
                <Text style={[styles.celula, styles.textoCabecalho]}>Medicamento</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Dose (mg/kg)</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Volume (ml)</Text>
            </View>
        );
    };

    const renderTableData = () => {
        return resultados.map((res, index) => {
            const [nomeMedicamento, doses, volume] = res;
            return (
                <View key={index} style={styles.linha}>
                    <Text style={[styles.celula]}>{nomeMedicamento}</Text>
                    <Text style={[styles.celula]}>{doses}</Text>
                    <Text style={[styles.celula]}>{volume.toFixed(2)}</Text>
                </View>
            );
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    label="Peso (kg)"
                    keyboardType="numeric"
                    value={peso}
                    onChangeText={handlePesoInputChange}
                    accessibilityLabel={`Insira o peso em quilos ${peso}`}
                />
            </View>
            <Button title="Calcular" style={styles.button} onPress={calcular}>
            </Button>
            <ScrollView nestedScrollEnabled={true}>
                <ScrollView horizontal={true}>
                    {resultados.length > 0 && (
                        <View style={styles.tabelaContainer}>
                            {renderTableHeader()}
                            {renderTableData()}
                        </View>
                    )}
                </ScrollView>
            </ScrollView>
        </View>
    );
};

export default CalculadoraDoseUnica;
