import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./Style";
import { CalcularButton } from "./BotaoCustom";


const CalculadoraBase = (props) => {
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
            const doseMinima = doses[0];
            const doseMaxima = doses[1];
            const volumeMinimo = (peso.replace(",", ".") * doseMinima) / concentracao;
            const volumeMaximo = (peso.replace(",", ".") * doseMaxima) / concentracao;
            res.push([nomeMedicamento, doseMinima, doseMaxima, volumeMinimo, volumeMaximo]);
        }
        setResultados(res);
    }

    const renderTableHeader = () => {
        return (
            <View style={styles.cabecalhoTabela}>
                <Text style={[styles.celula2, styles.textoCabecalho]}>Medicamento</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Dose Mínima (mg/kg)</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Dose Máxima (mg/kg)</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Volume Mínimo (ml)</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Volume Máximo (ml)</Text>
            </View>
        );
    };

    const renderTableData = () => {
        return resultados.map((res, index) => {
            const [nomeMedicamento, doseMinima, doseMaxima, volumeMinimo, volumeMaximo] = res;
            return (
                <View key={index} style={styles.linha}>
                    <Text style={[styles.celula2]}>{nomeMedicamento}</Text>
                    <Text style={[styles.celula]}>{doseMinima}</Text>
                    <Text style={[styles.celula]}>{doseMaxima}</Text>
                    <Text style={[styles.celula]}>{volumeMinimo.toFixed(2)}</Text>
                    <Text style={[styles.celula]}>{volumeMaximo.toFixed(2)}</Text>
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
            <CalcularButton rota={calcular}/>
            <ScrollView 
                nestedScrollEnabled={true} 
                maximumZoomScale={10}
                contentContainerStyle={{ flexGrow: 1 }}
                >
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

export default CalculadoraBase;