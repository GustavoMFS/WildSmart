import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../../components/Style";
import NavButton from "../../navigation/Navegacao";

export default ({ navigation }) => (
    <View style={styles.container}>
        <View style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 20,}}>
            <Text style={styles.titulo}>
                Répteis
            </Text>
            <Button
                title="Voltar"
                style={{ marginStart: 20, }}
                onPress={() => navigation.goBack()} />
        </View>
        <View>
            <NavButton/>
            <NavButton/>
            <NavButton/>
        </View>
    </View>
)
