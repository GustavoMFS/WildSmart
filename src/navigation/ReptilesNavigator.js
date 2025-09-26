import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReptilesScreen from '../screens/reptiles/ReptilesScreen';

const Stack = createNativeStackNavigator();

export default function ReptilesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReptilesMain"
        component={ReptilesScreen}
        options={{ title: 'Répteis' }}
      />
    </Stack.Navigator>
  );
}
