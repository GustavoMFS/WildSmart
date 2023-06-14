import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../components/Style";
import NavButton from "../../navigation/Navegacao";
import { BotaoVoltarConfig } from "../../components/BotaoCustom";


const TelaProtocolos = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
                <BotaoVoltarConfig rota={'NavInicial'} navigation={navigation} />
                <Text style={styles.titulo}>
                    Protocolos Anestésicos
                </Text>
            </View>
        </View>
        <ScrollView>
            <View>
                <NavButton texto='Desgaste Roedores' rota={'DesgasteRoedores'} navigation={navigation} />
                <NavButton texto='Desgaste Coelho' rota={'DesgasteCoelho'} navigation={navigation} />

            </View>
        </ScrollView>
    </View>
)

export default TelaProtocolos