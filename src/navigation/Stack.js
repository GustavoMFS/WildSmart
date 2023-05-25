import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NavInicial from './NavegacaoInicial';
import { StackProtocolos } from './StackProtocolos';
import Repteis from '../screens/repteis/Repteis';
import { AvesStackScreens } from './StackAves';
import { MamiferosStackScreen } from './StackMamiferos';
import EmergenciaAves from '../screens/aves/EmergenciaAves';
import EmergenciaMamiferos from '../screens/mamiferos/EmergenciaMamiferos';
import InicioWarn from '../screens/InicioWarn';


const Stack = createStackNavigator();
export default function MyStack() {
    return (
        <Stack.Navigator initialRouteName='InicioWarn'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='InicioWarn' component={InicioWarn} />
        <Stack.Screen name='NavInicial' component={NavInicial} />
            <Stack.Screen name="protocolos" >
                {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {Object.entries(StackProtocolos).map(([name, component]) => (
                        <Stack.Screen key={name} name={name} component={component.screen}/>
                    ))}
                </Stack.Navigator>}
            </Stack.Screen>
            <Stack.Screen name="Aves" >
                {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {Object.entries(AvesStackScreens).map(([name, component]) => (
                        <Stack.Screen key={name} name={name} component={component.screen}/>
                    ))}
                </Stack.Navigator>}
            </Stack.Screen>
            <Stack.Screen name="Mamiferos" >
                {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {Object.entries(MamiferosStackScreen).map(([name, component]) => (
                        <Stack.Screen key={name} name={name} component={component.screen}/>
                    ))}
                </Stack.Navigator>}
            </Stack.Screen>
            <Stack.Screen name='Repteis' component={Repteis} />
            <Stack.Screen name='EmergenciaMamiferos' component={EmergenciaMamiferos} />
            <Stack.Screen name='EmergenciaAves' component={EmergenciaAves} />
        </Stack.Navigator>
    );
}
