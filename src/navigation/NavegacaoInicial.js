import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import styles from "../components/Style";
import NavButton from "./Navegacao";


const NavInicial = ({ navigation }) => {
    return (
        <View style={styles.container2}>
            {/* <ScrollView> */}
                <View>
                    <View style={styles.tituloPosicao}>
                        <Text style={styles.titulo}>
                            Calculadora de Medicações de Animais Selvagens
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <View style={{ paddingVertical: 10 }}>
                        <NavButton texto='Calculadora de Doses' rota={'Calculadora Individual'} navigation={navigation} />
                        {/* <NavButton texto='Sobre o App' rota={'Info'} navigation={navigation} /> */}
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <NavButton texto='Anestesia' rota={'protocolos'} navigation={navigation} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <View style={{ paddingVertical: 10 }}>
                        <NavButton texto='Aves' rota={'Aves'} navigation={navigation} />
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <NavButton texto='Mamíferos' rota={'Mamiferos'} navigation={navigation} />
                    </View>
                </View>
                <View 
                style={styles.creditosRodaPe}
                >
                    <Text 
                    style={styles.creditos}
                    >gusmfscoder@gmail.com - Versão Alfa 0.9.3</Text>
                </View>
            {/* </ScrollView> */}
        </View>
    )

}

export default NavInicial
