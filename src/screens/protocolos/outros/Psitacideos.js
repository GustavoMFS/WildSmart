import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../../../components/Style";
import { AnestesiaPsitacideos } from "../../../data/dataMedicamentos";
import NavButton from "../../../navigation/Navegacao";
import { BotaoVoltar, CalcularButton } from "../../../components/BotaoCustom";


const ProtocoloPsictacideos = ({ navigation }) => {
    const [peso, setPeso] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        calcular();
    }, []);

    const handlePesoInputChange = (text) => {
        const regex = /^[0-9]*(?:[.,][0-9]*)?$/;
        if (regex.test(text) && (text.indexOf('.') === -1 || text.indexOf('.') === text.lastIndexOf('.'))) {
            setPeso(text);
        }
    };
    const calcular = () => {
        const res = [];
        for (let i = 0; i < AnestesiaPsitacideos.length; i++) {
            const nomeMedicamento = AnestesiaPsitacideos[i].nome;
            const doses = AnestesiaPsitacideos[i].doses;
            const concentracao = AnestesiaPsitacideos[i].concentracao;
            const volume = (peso.replace(",", ".") * doses) / concentracao;
            res.push([nomeMedicamento, doses, volume]);
        }
        setResultados(res);
    };

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
            <View style={styles.cabecalho}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                    <View style={{ paddingLeft: 20 }}>
                        <BotaoVoltar rota={() => navigation.goBack()} />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.titulo2}>Protocolo para{"\n"}psitacídeos</Text>
            </View>
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
            <CalcularButton rota={calcular} />
            <ScrollView nestedScrollEnabled={true}>
                <ScrollView horizontal={true}>
                    {resultados.length > 0 && (
                        <View style={styles.tabelaContainer}>
                            {renderTableHeader()}
                            {renderTableData()}
                        </View>
                    )}
                </ScrollView>
                <NavButton texto='Emergência' rota={'EmergenciaAves'} navigation={navigation} />
            </ScrollView>
        </View>
    );
};

export default ProtocoloPsictacideos;
