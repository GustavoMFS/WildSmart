import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import NavButton from "../../../navigation/Navegacao";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const Primatas = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
                <BotaoVoltar rota={() => navigation.goBack()} />
                <Text style={styles.titulo}>
                    Primatas
                </Text>
            </View>
        </View>
        <ScrollView>
            <View>
                <NavButton texto='Analgésicos' rota={'AnalgesicosPrimatas'} navigation={navigation} />
                <NavButton texto='Anestesicos' rota={'AnestesicosPrimatas'} navigation={navigation} />
                <NavButton texto='Antibióticos' rota={'AtbPrimatas'} navigation={navigation} />
                <NavButton texto='Antiparasitários' rota={'AntiparasitariosPrimatas'} navigation={navigation} />
                <NavButton texto='Diversos' rota={'DiversosPrimatas'} navigation={navigation} />
                {/* <NavButton texto='Vitaminas e Minerais' rota={'NutricionalPrimatas'} navigation={navigation} /> */}
            </View>
        </ScrollView>
    </View>
)

export default Primatas