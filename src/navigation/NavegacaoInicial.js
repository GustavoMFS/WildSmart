import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import styles from "../components/Style";

const NavInicial = ({ navigation }) => {
    const BotaoProtocolos = () => {
        navigation.navigate('protocolos')
    }

    const BotaoAves = () => {
        navigation.navigate('Aves')
    }

    const BotaoMamiferos = () => {
        navigation.navigate('Mamiferos')
    }

    const BotaoRepteis = () => {
        navigation.navigate('Repteis')
    }

    return (
        <View style={styles.container2}>
            <ScrollView>
                <View>
                    <View style={styles.tituloPosicao}>
                        <Text style={styles.titulo}>
                            Calculadora de Medicações de Animais Selvagens
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.botaoPosicao}
                        onPress={BotaoProtocolos}>
                        <Text style={styles.botaoTexto}>Anestesia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botaoPosicao}
                        onPress={BotaoAves}>
                        <Text style={styles.botaoTexto}>Aves</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botaoPosicao}
                        onPress={BotaoMamiferos}>
                        <Text style={styles.botaoTexto}>Mamíferos</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                    style={styles.botaoPosicao}
                    onPress={BotaoRepteis}>
                    <Text style={styles.botaoTexto}>Répteis</Text>
                </TouchableOpacity> */}
                </View>
                <View style={styles.creditosRodaPe}>
                    <Text style={styles.creditos}>Gustavo M F Santos - gusmfscoder@gmail.com Calculadora V 0.9.2</Text>
                </View>
            </ScrollView>
        </View>
    )

}

export default NavInicial
