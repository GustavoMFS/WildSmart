import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../components/Style";
import NavButton from "../../../navigation/Navegacao";
import { BotaoVoltar } from "../../../components/BotaoCustom";

const Roedores = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
                <BotaoVoltar rota={() => navigation.goBack()} />
                <Text style={styles.titulo}>
                    Roedores
                </Text>
            </View>
        </View>
        <ScrollView>
            <View>
                <NavButton texto='Analgésicos' rota={'AnalgesicosRoedores'} navigation={navigation} />
                <NavButton texto='Anestesicos' rota={'AnestesicosRoedores'} navigation={navigation} />
                <NavButton texto='Antibióticos' rota={'AtbRoedores'} navigation={navigation} />
                <NavButton texto='Antiparasitários' rota={'AntiparasitariosRoedores'} navigation={navigation} />
                <NavButton texto='Diversos' rota={'DiversosRoedores'} navigation={navigation} />
                {/* <NavButton texto='Vitaminas e Minerais' rota={'NutricionalRoedores'} navigation={navigation} /> */}
            </View>
        </ScrollView>
    </View>
)

export default Roedores