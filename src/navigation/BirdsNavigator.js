import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BirdsScreen from '../screens/birds/BirdsScreen';

const Stack = createNativeStackNavigator();

export default function BirdsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BirdsMain"
        component={BirdsScreen}
        options={{ title: 'Aves' }}
      />
    </Stack.Navigator>
  );
}
