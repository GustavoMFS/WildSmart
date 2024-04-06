import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../components/Style";
import { BotaoSobre } from "../components/BotaoCustom";


const NavInicial = ({ navigation }) => {
    return (
        <View style={styles.container2}>
            <View>
                <View style={styles.tituloPosicao}>
                    <Text style={styles.titulo}>
                        Calculadora de Medicações de Animais Selvagens
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <View style={{ paddingVertical: 30 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Calculadora Individual')}>
                        <Image source={require('../../assets/iconecalc.png')} style={{ width: 150, height: 120, alignItems: 'center', justifyContent: 'center', margin: 10, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingVertical: 30 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('protocolos')}>
                        <Image source={require('../../assets/iconeanest.png')} style={{ width: 150, height: 120, alignItems: 'center', justifyContent: 'center', margin: 10, }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <View style={{ paddingVertical: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Aves')}>
                        <Image source={require('../../assets/iconeaves.png')} style={{ width: 150, height: 120, alignItems: 'center', justifyContent: 'center', margin: 10, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingVertical: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Mamiferos')}>
                        <Image source={require('../../assets/iconemamiferos.png')} style={{ width: 150, height: 120, alignItems: 'center', justifyContent: 'center', margin: 10, }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.creditosRodaPe}>
                <BotaoSobre rota='Sobre' navigation={navigation} />
            </View>
        </View>
    )

}

export default NavInicial
