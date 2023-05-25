import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import NavButton from "../../../navigation/Navegacao";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const Passeriformes = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
                <BotaoVoltar rota={() => navigation.goBack()} />
                <Text style={styles.titulo}>
                    Passeriformes
                </Text>
            </View>
        </View>
        <ScrollView>
            <View>
                <NavButton texto='Analgésicos' rota={'AnalgesicosPasseriformes'} navigation={navigation} />
                <NavButton texto='Anestesicos' rota={'AnestesicosPasseriformes'} navigation={navigation} />
                <NavButton texto='Antibióticos' rota={'AtbPasseriformes'} navigation={navigation} />
                <NavButton texto='Antiparasitários' rota={'AntiparasitariosPasseriformes'} navigation={navigation} />
                <NavButton texto='Diversos' rota={'DiversosPasseriformes'} navigation={navigation} />
                {/* <NavButton texto='Vitaminas e Minerais' rota={'NutricionalPasseriformes'} navigation={navigation} /> */}
            </View>
        </ScrollView>
    </View>
)

export default Passeriformes