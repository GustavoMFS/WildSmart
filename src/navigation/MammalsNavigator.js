import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MammalsScreen from '../screens/mammals/MammalsScreen';
// import FerretsScreen from '../screens/species/mammals/ferrets/FerretsScreen';
// import RabbitsScreen from '../screens/species/mammals/rabbits/RabbitsScreen';
// import RodentsScreen from '../screens/species/mammals/rodents/RodentsScreen';

const Stack = createNativeStackNavigator();

export default function MammalsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MammalsMain"
        component={MammalsScreen}
        options={{ title: 'Mamíferos' }}
      />
      {/* <Stack.Screen name="Ferrets" component={FerretsScreen} />
      <Stack.Screen name="Rabbits" component={RabbitsScreen} />
      <Stack.Screen name="Rodents" component={RodentsScreen} /> */}
    </Stack.Navigator>
  );
}
