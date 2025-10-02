import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProtocolsScreen from '../screens/protocols/ProtocolsScreen';
import rabbitsDentistryScreen from '../screens/protocols/rabbitsDentistry/rabbitsDentistryScreen';
import psittacidesProtocolsScreen from '../screens/protocols/psittacidesProtocols/psittacidesProtocolsScreen';
import smallRodentsScreen from '../screens/protocols/smallRodents/smallRodentsScreen';
import rodentsDentistryScreen from '../screens/protocols/rodentsDentistry/rodentsDentistryScreen';
import trachemysProtocolsScreen from '../screens/protocols/trachemysProtocols/trachemysProtocolsScreen';

const Stack = createNativeStackNavigator();

export default function SpeciesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProtocolsMain"
        component={ProtocolsScreen}
        options={{ title: 'Protocolos Anestésicos' }}
      />
      <Stack.Screen
        name="rabbitsDentistry"
        component={rabbitsDentistryScreen}
        options={{ title: 'Desgaste Dentário em Coelhos' }}
      />
      <Stack.Screen
        name="rodentsDentistry"
        component={rodentsDentistryScreen}
        options={{ title: 'Desgaste Dentário em Roedores' }}
      />
      <Stack.Screen
        name="smallRodents"
        component={smallRodentsScreen}
        options={{ title: 'Anestesia de Pequenos Roedores' }}
      />
      <Stack.Screen
        name="psittacidesProtocols"
        component={psittacidesProtocolsScreen}
        options={{ title: 'Anestesia de Psitacídeos' }}
      />
      <Stack.Screen
        name="trachemysProtocols"
        component={trachemysProtocolsScreen}
        options={{ title: 'Sedação para Trachemys' }}
      />
    </Stack.Navigator>
  );
}
