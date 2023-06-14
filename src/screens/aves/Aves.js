import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../components/Style";
import NavButton from "../../navigation/Navegacao";
import { BotaoVoltarConfig } from "../../components/BotaoCustom";

const TelaAves = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row', }}>
                <BotaoVoltarConfig rota={'NavInicial'} navigation={navigation} />
                <Text style={styles.titulo}>
                    Aves
                </Text>
            </View>
        </View>
        <ScrollView>
            <View>
                <NavButton texto='Emergência' rota={'EmergenciaAves'} navigation={navigation} />
                <NavButton texto='Passeriformes' rota={'Passeriformes'} navigation={navigation} />
                <NavButton texto='Psitacídeos' rota={'Psittaciformes'} navigation={navigation} />
            </View>
        </ScrollView>
    </View>
)

export default TelaAves