import React from "react";
import { View, Text } from "react-native";
import styles from "../../components/Style";
import NavButton from "../../navigation/Navegacao";
import { BotaoVoltar } from "../../components/BotaoCustom";

const TelaAves = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
                <BotaoVoltar rota={() => navigation.goBack()} />
                <Text style={styles.titulo}>
                    Aves
                </Text>
            </View>
        </View>
        <View>
            <NavButton texto='Emergência' rota={'EmergenciaAves'} navigation={navigation} />
            <NavButton texto='Passeriformes' rota={'Passeriformes'} navigation={navigation} />
            <NavButton texto='Psitacídeos' rota={'Psittaciformes'} navigation={navigation} />
        </View>
    </View>
)

export default TelaAves