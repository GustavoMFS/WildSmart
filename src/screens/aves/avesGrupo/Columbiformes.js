import React from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "../../../components/Style";
import NavButton from "../../../navigation/Navegacao";
import { VoltarButton } from "../../../components/BotaoCustom";

const Columbiformes = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.cabecalhoEspecie}>
            <Text style={styles.titulo}>
                Columbiformes
            </Text>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                <View style={{ paddingLeft: 20 }}>
                    <VoltarButton />
                </View>
            </TouchableWithoutFeedback>
        </View>
        <ScrollView>
        <View>
            <NavButton texto='Emergência' rota={'Anseriformes'} navigation={navigation} />
            <NavButton texto='Anestésicos/Analgésicos' rota={'Galliformes'} navigation={navigation} />
            <NavButton texto='Antibióticos' rota={'Passeriformes'} navigation={navigation} />
            <NavButton texto='Antiparasitários' rota={'Psittaciformes'} navigation={navigation} />
            <NavButton texto='Oftalmológicos' rota={'Psittaciformes'} navigation={navigation} />
            <NavButton texto='Diversos' rota={'Psittaciformes'} navigation={navigation} />
        </View>
        </ScrollView>
    </View>
)

export default Columbiformes