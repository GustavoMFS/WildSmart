import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/Stack';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </SafeAreaView>
    );
}
