import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../components/Style";
import NavButton from "../../navigation/Navegacao";
import { BotaoVoltarConfig } from "../../components/BotaoCustom";

const TelaMamiferos = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
            <BotaoVoltarConfig rota={'NavInicial'} navigation={navigation} />
                <Text style={styles.titulo}>
                    Mamíferos
                </Text>
            </View>
        </View>
        <ScrollView>
            <View>
                <NavButton texto='Emergência' rota={'EmergenciaMamiferos'} navigation={navigation} />
                <NavButton texto='Ferrets' rota={'Ferrets'} navigation={navigation} />
                <NavButton texto='Lagomorfos' rota={'Lagomorfos'} navigation={navigation} />
                {/* <NavButton texto='Primatas' rota={'Primatas'} navigation={navigation} /> */}
                <NavButton texto='Roedores' rota={'Roedores'} navigation={navigation} />
            </View>
        </ScrollView>
    </View>
)

export default TelaMamiferos