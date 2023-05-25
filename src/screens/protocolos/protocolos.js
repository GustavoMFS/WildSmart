import React from "react";
import { View, Text} from "react-native";
import styles from "../../components/Style";
import NavButton from "../../navigation/Navegacao";
import { BotaoVoltar } from "../../components/BotaoCustom";

const TelaProtocolos = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <View style={{ flexDirection: 'row' }}>
                <BotaoVoltar rota={() => navigation.goBack()} />
                <Text style={styles.titulo}>
                    Protocolos Anestésicos
                </Text>
            </View>
        </View>
        <View>
            <NavButton texto='Desgaste Roedores' rota={'DesgasteRoedores'} navigation={navigation} />
            <NavButton texto='Desgaste Coelho' rota={'DesgasteCoelho'} navigation={navigation} />

        </View>
    </View>
)

export default TelaProtocolos