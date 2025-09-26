import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DisclaimerScreen from '../screens/disclaimer/DisclaimerScreen';
import HomeScreen from '../screens/home/HomeScreen';
import CalculatorsScreen from '../screens/calculator/CalculatorsScreen';
import DosageCalculatorScreen from '../screens/calculator/dosageCalculator/DosageCalculatorScreen';
import SpeciesNavigator from './SpeciesNavigator';
import ProtocolsNavigator from './ProtocolsNavigator';
import ContactScreen from '../screens/contact/ContactScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Disclaimer">
      <Stack.Screen
        name="Disclaimer"
        component={DisclaimerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Calculators"
        component={CalculatorsScreen}
        options={{ title: 'Calculadoras', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="DosageCalculator"
        component={DosageCalculatorScreen}
        options={{
          title: 'Calculadora de Dosagem',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Species"
        component={SpeciesNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Protocols"
        component={ProtocolsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Contato', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}
