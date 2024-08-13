import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import styles from "./Style";
import { CalcularButton, BotaoCalculadoraIndividual } from "./BotaoCustom";
import InfoCalc from "../screens/popUp/PopUpInfo";

const CalculadoraBase = (props) => {
    const medIndefinida = props
    const [peso, setPeso] = useState('');
    const [concentracoesSelecionadas, setConcentracoesSelecionadas] = useState([]);
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        calcular();
    }, [peso, concentracoesSelecionadas]);


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
            const concentracoes = props.medIndefinida[i].concentracao;
            const unidade = props.medIndefinida[i].unidade;
            const concentracaoSelecionada = (concentracoesSelecionadas[i] || concentracoes[0]);
            const doseMinima = doses[0];
            const doseMaxima = doses[1];
            const volumeMinimo = (peso.replace(",", ".") * doseMinima) / concentracaoSelecionada;
            const volumeMaximo = (peso.replace(",", ".") * doseMaxima) / concentracaoSelecionada;
            res.push([nomeMedicamento, doseMinima, doseMaxima, volumeMinimo, volumeMaximo, concentracaoSelecionada, unidade]);
        }
        setResultados(res);
    }

    const handleConcentracaoChange = (index, concentracao) => {
        const updatedConcentracoesSelecionadas = [...concentracoesSelecionadas];
        updatedConcentracoesSelecionadas[index] = concentracao;
        setConcentracoesSelecionadas(updatedConcentracoesSelecionadas);
    };

    const renderTableHeader = () => {
        return (
            <View style={styles.cabecalhoTabela}>
                <Text style={[styles.celula2, styles.textoCabecalho]}>Medicamento</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Concentração</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Dose Mínima (mg/kg)</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Dose Máxima (mg/kg)</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Volume Mínimo (ml)</Text>
                <Text style={[styles.celula, styles.textoCabecalho]}>Volume Máximo (ml)</Text>
            </View>
        );
    };

    const renderTableData = () => {
        return resultados.map((res, index) => {
            const [nomeMedicamento, doseMinima, doseMaxima, volumeMinimo, volumeMaximo, concentracao, unidade] = res;
            const maxLength = Math.max(...props.medIndefinida[index].concentracao.map(conc => `${conc}`.length));
            const pickerWidth = maxLength * 10
            return (
                <View key={index} style={styles.linha}>
                    <Text style={[styles.celula2]}>{nomeMedicamento}</Text>
                    <Text style={[styles.celula]}>{concentracao} {unidade}</Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                        onPress={() => { }}
                    >
                        <Picker
                            selectedValue={concentracoesSelecionadas[index]}
                            style={{ height: 50, width: pickerWidth }}
                            dropdownIconColor="#000"
                            onValueChange={(itemValue) => handleConcentracaoChange(index, itemValue)}>
                            {props.medIndefinida[index].concentracao.map((concentracao, index) => (
                                <Picker.Item key={index} label={`${concentracao} ${unidade}`} value={concentracao} />
                            ))}
                        </Picker>
                    </TouchableOpacity>
                    <Text style={[styles.celula]}>{doseMinima}</Text>
                    <Text style={[styles.celula]}>{doseMaxima}</Text>
                    <Text style={[styles.celula]}>{volumeMinimo.toFixed(2)}</Text>
                    <Text style={[styles.celula]}>{volumeMaximo.toFixed(2)}</Text>
                </View>
            );
        });
    };

    const navigation = useNavigation()

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
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                <View>
                    <BotaoCalculadoraIndividual rota={'Calculadora Individual'} navigation={navigation} />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <CalcularButton rota={calcular} />
                </View>
                <View style={{ alignSelf: 'flex-end' }}>
                    <InfoCalc />
                </View>
            </View>
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