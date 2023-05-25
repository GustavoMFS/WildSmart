import React from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "../../../components/Style";
import NavButton from "../../../navigation/Navegacao";
import { VoltarButton } from "../../../components/BotaoCustom";

const Anseriformes = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <Text style={styles.titulo}>
                Anseriformes
            </Text>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                <View style={{ paddingLeft: 20 }}>
                    <VoltarButton />
                </View>
            </TouchableWithoutFeedback>
        </View>
        <ScrollView>
        <View>
            <NavButton texto='Emergencia' rota={'EmergenciaAnseriformes'} navigation={navigation} />
            <NavButton texto='Anestésicos/Analgésicos' rota={'Galliformes'} navigation={navigation} />
            <NavButton texto='Antibióticos' rota={'Passeriformes'} navigation={navigation} />
            <NavButton texto='Antiparasitários' rota={'Psittaciformes'} navigation={navigation} />
            <NavButton texto='Oftalmológicos' rota={'Psittaciformes'} navigation={navigation} />
            <NavButton texto='Diversos' rota={'Psittaciformes'} navigation={navigation} />
        </View>
        </ScrollView>
    </View>
)

export default Anseriformes