import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProtocolsScreen from '../screens/protocols/ProtocolsScreen';

const Stack = createNativeStackNavigator();

export default function SpeciesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProtocolsMain"
        component={ProtocolsScreen}
        options={{ title: 'Protocolos Anestésicos' }}
      />
      {/* <Stack.Screen
        name="Mammals"
        component={MammalsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Birds"
        component={BirdsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reptiles"
        component={ReptilesNavigator}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
