import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const NavButton = ({ texto, rota, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.botaoPosicao}
                onPress={() => navigation.navigate(rota)}>
                <Text style={styles.botaoTexto}>{texto}</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    botaoPosicao: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        backgroundColor: '#215bff',
        borderRadius: 10,
        width: 150,
        height: 120,
        borderWidth: 2,
        borderColor: 'black',
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }

});
export default NavButton
