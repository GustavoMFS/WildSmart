import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import NavButton from "../../../navigation/Navegacao";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const Lagomorfos = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
                <BotaoVoltar rota={() => navigation.goBack()} />
                <Text style={styles.titulo}>
                    Lagomorfos
                </Text>
            </View>
        </View>
        <ScrollView>
            <View>
                <NavButton texto='Analgésicos' rota={'AnalgesicosLagomorfos'} navigation={navigation} />
                <NavButton texto='Anestesicos' rota={'AnestesicosLagomorfos'} navigation={navigation} />
                <NavButton texto='Antibióticos' rota={'AtbLagomorfos'} navigation={navigation} />
                <NavButton texto='Antiparasitários' rota={'AntiparasitariosLagomorfos'} navigation={navigation} />
                <NavButton texto='Diversos' rota={'DiversosLagomorfos'} navigation={navigation} />
                {/* <NavButton texto='Vitaminas e Minerais' rota={'NutricionalLagomorfos'} navigation={navigation} /> */}
            </View>
        </ScrollView>
    </View>
)

export default Lagomorfos