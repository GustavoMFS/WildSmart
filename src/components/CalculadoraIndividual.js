import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./Style";
import { CalcularButton, BotaoVoltarConfig } from "./BotaoCustom";


const CalculadoraIndividual = ({ navigation }) => {
    const [peso, setPeso] = useState('');
    const [dose, setDose] = useState('');
    const [concentracao, setConcentracao] = useState('');
    const [resultado, setResultado] = useState('');

    const handlePesoInputChange = (text) => {
        const regex = /^[0-9]*(?:[.,][0-9]*)?$/;
        if (regex.test(text) && (text.indexOf('.') === -1 || text.indexOf('.') === text.lastIndexOf('.'))) {
            setPeso(text);
        }
    };
    const handleDoseInputChange = (text) => {
        const regex = /^[0-9]*(?:[.,][0-9]*)?$/;
        if (regex.test(text) && (text.indexOf('.') === -1 || text.indexOf('.') === text.lastIndexOf('.'))) {
            setDose(text);
        }
    };
    const handleConcentracaoInputChange = (text) => {
        const regex = /^[0-9]*(?:[.,][0-9]*)?$/;
        if (regex.test(text) && (text.indexOf('.') === -1 || text.indexOf('.') === text.lastIndexOf('.'))) {
            setConcentracao(text);
        }
    };

    const calcularDose = () => {
        if (peso && dose && concentracao) {
            const resultadoCalculo = (parseFloat(peso.replace(",", ".")) * parseFloat(dose.replace(",", "."))) / parseFloat(concentracao.replace(",", "."));
            setResultado(resultadoCalculo.toFixed(2));
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.cabecalhoEspecie}>
                <View style={{ flexDirection: 'row' }}>
                    <BotaoVoltarConfig rota={'NavInicial'} navigation={navigation} />
                    <Text style={styles.titulo}> Calculadora de Doses</Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.textoObs}>Caso a medicação não seja líquida, utilize a concentração "1"</Text>
                <Text style={{color: 'black', fontWeight: 'bold', padding: 5, fontSize: 15}}>Peso (kg)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    value={peso}
                    onChangeText={handlePesoInputChange}
                    keyboardType="numeric"
                    accessibilityLabel={`Insira o peso em quilos ${peso}`}
                />
                <Text style={{color: 'black', fontWeight: 'bold', padding: 5, fontSize: 15}}>Dose (mg/kg)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    value={dose}
                    onChangeText={handleDoseInputChange}
                    keyboardType="numeric"
                    accessibilityLabel={`Insira a dose em miligramas por quilo ${peso}`}
                />
                <Text style={{color: 'black', fontWeight: 'bold', padding: 5, fontSize: 15}}>Concentração (mg/ml)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    value={concentracao}
                    onChangeText={handleConcentracaoInputChange}
                    keyboardType="numeric"
                    accessibilityLabel={`Insira a concentração em miligramas por mililitro ${peso}`}
                />
            </View>
            <View style={{paddingBottom: 10}}>
                <CalcularButton rota={calcularDose} />
            </View>
            <View style={{ backgroundColor: '#c4c4c4', padding: 20}}>
                <Text Text style={{color: 'black', paddingBottom: 5, fontSize: 15}}>Resultado:</Text>
                {resultado ? <Text style={{color: 'black'}}> {resultado}</Text> : null}
            </View>
        </View>
    );
};

export default CalculadoraIndividual;