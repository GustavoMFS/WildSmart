import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./Style";
import { CalcularButton, BotaoVoltarConfig, BotaoComprimido } from "./BotaoCustom";
import { InfoCalcIndividual } from "../screens/popUp/PopUpInfo";




const CalculadoraIndividual = ({ navigation }) => {
    const [peso, setPeso] = useState('');
    const [dose, setDose] = useState('');
    const [concentracao, setConcentracao] = useState('');
    const [resultado, setResultado] = useState('');
    const [medicacaoTipo, setMedicacaoTipo] = useState('liquida');

    const selecionarMedicacaoLiquida = () => {
        setMedicacaoTipo('liquida');
    };

    const selecionarMedicacaoComprimido = () => {
        setMedicacaoTipo('comprimido');
    };

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
        if (peso && dose) {
            let resultadoCalculo;
            if (medicacaoTipo === 'comprimido') {
                resultadoCalculo = parseFloat(peso.replace(",", ".")) * parseFloat(dose.replace(",", "."));
            } else {
                resultadoCalculo = (parseFloat(peso.replace(",", ".")) * parseFloat(dose.replace(",", "."))) / parseFloat(concentracao.replace(",", "."));
            }
            setResultado(resultadoCalculo.toFixed(2));
        }

    };

    return (
        <View style={styles.container}>
            <View style={styles.cabecalhoEspecie}>
                <View style={{ flexDirection: 'row',}}>
                    <View style={{flex: 1}}>
                    <BotaoVoltarConfig rota={'NavInicial'} navigation={navigation} />
                    </View>
                    <View style={{flex: 5}}>
                    <Text style={styles.titulo}> Calculadora de Doses</Text>
                    </View>
                    <View style={{flex: 1}}>
                    <InfoCalcIndividual/>
                    </View>
                </View>
            </View>
            <ScrollView>

                <View style={styles.inputContainer}>
                    <Text style={styles.textoObs}>Selecione a apresentação do medicamento</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <BotaoComprimido
                            title="Sólido"
                            onPress={selecionarMedicacaoComprimido}
                            selected={medicacaoTipo === 'comprimido'}
                        />
                        <BotaoComprimido
                            title="Líquido"
                            onPress={selecionarMedicacaoLiquida}
                            selected={medicacaoTipo === 'liquida'}
                        />
                    </View>

                    <Text style={{ color: 'black', fontWeight: 'bold', padding: 5, fontSize: 15 }}>Peso (kg)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        value={peso}
                        onChangeText={handlePesoInputChange}
                        keyboardType="numeric"
                        accessibilityLabel={`Insira o peso em quilos ${peso}`}
                    />
                    <Text style={{ color: 'black', fontWeight: 'bold', padding: 5, fontSize: 15 }}>Dose (mg/kg)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        value={dose}
                        onChangeText={handleDoseInputChange}
                        keyboardType="numeric"
                        accessibilityLabel={`Insira a dose em miligramas por quilo ${peso}`}
                    />
                    {medicacaoTipo === 'liquida' && (
                        <>
                            <Text style={{ color: 'black', fontWeight: 'bold', padding: 5, fontSize: 15 }}>Concentração (mg/ml)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="0"
                                value={concentracao}
                                onChangeText={handleConcentracaoInputChange}
                                keyboardType="numeric"
                                accessibilityLabel={`Insira a concentração em miligramas por mililitro ${peso}`}
                            />
                        </>
                    )}
                </View>
                <View style={{ paddingBottom: 10 }}>
                    <CalcularButton rota={calcularDose} />
                </View>
                <View style={{ backgroundColor: '#c4c4c4', padding: 20 }}>
                    <Text Text style={{ color: 'black', paddingBottom: 5, fontSize: 15 }}>Resultado:</Text>
                    {isFinite(resultado) ? (
                        <Text style={{ color: 'black' }}>
                            {resultado} {medicacaoTipo === 'liquida' ? 'ml' : 'mg'}
                        </Text>
                    ) : null}
                </View>
            </ScrollView>
        </View>
    );
};

export default CalculadoraIndividual;