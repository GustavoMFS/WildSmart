import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import NavButton from "../../../navigation/Navegacao";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const Ferrets = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
                <BotaoVoltar rota={() => navigation.goBack()} />
                <Text style={styles.titulo}>
                    Ferrets
                </Text>
            </View>
        </View>
        <ScrollView>
            <View>
                <NavButton texto='Analgésicos' rota={'AnalgesicosFerrets'} navigation={navigation} />
                <NavButton texto='Anestesicos' rota={'AnestesicosFerrets'} navigation={navigation} />
                <NavButton texto='Antibióticos' rota={'AtbFerrets'} navigation={navigation} />
                <NavButton texto='Antiparasitários' rota={'AntiparasitariosFerrets'} navigation={navigation} />
                <NavButton texto='Diversos' rota={'DiversosFerrets'} navigation={navigation} />
                {/* <NavButton texto='Vitaminas e Minerais' rota={'NutricionalFerrets'} navigation={navigation} /> */}
            </View>
        </ScrollView>
    </View>
)

export default Ferrets