import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import NavButton from "../../../navigation/Navegacao";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const Psittaciformes = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
                <BotaoVoltar rota={() => navigation.goBack()} />
                <Text style={styles.titulo}>
                    Psitacídeos
                </Text>
            </View>
        </View>
        <ScrollView>
            <View>
                <NavButton texto='Analgésicos' rota={'AnalgesicosPsitacídeos'} navigation={navigation} />
                <NavButton texto='Anestesicos' rota={'AnestesicosPsitacídeos'} navigation={navigation} />
                <NavButton texto='Antibióticos' rota={'AtbPsitacídeos'} navigation={navigation} />
                <NavButton texto='Antiparasitários' rota={'AntiparasitariosPsitacídeos'} navigation={navigation} />
                <NavButton texto='Diversos' rota={'DiversosPsitacídeos'} navigation={navigation} />
                {/* <NavButton texto='Vitaminas e Minerais' rota={'NutricionalPsitacídeos'} navigation={navigation} /> */}
            </View>
        </ScrollView>
    </View>
)

export default Psittaciformes