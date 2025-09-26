import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpeciesScreen from '../screens/species/SpeciesScreen';
import MammalsNavigator from './MammalsNavigator';
import BirdsNavigator from './BirdsNavigator';
import ReptilesNavigator from './ReptilesNavigator';

const Stack = createNativeStackNavigator();

export default function SpeciesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SpeciesMain"
        component={SpeciesScreen}
        options={{ title: 'Espécies' }}
      />
      <Stack.Screen
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
      />
    </Stack.Navigator>
  );
}
