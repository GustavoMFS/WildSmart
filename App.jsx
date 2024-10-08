import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import NavInicial from './src/navigation/NavegacaoInicial';
import { StackProtocolos } from './src/navigation/StackProtocolos';
import Repteis from './src/screens/repteis/Repteis';
import { AvesStackScreens } from './src/navigation/StackAves';
import { MamiferosStackScreen } from './src/navigation/StackMamiferos';
import EmergenciaAves from './src/screens/aves/EmergenciaAves';
import EmergenciaMamiferos from './src/screens/mamiferos/EmergenciaMamiferos';
import InicioWarn from './src/screens/InicioWarn';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalculadoraIndividual from './src/components/CalculadoraIndividual';
import Sobre from './src/screens/Sobre';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='InicioWarn'
                    backBehavior="history"
                // screenOptions={{ headerShown: false, headerTitle: '' }}
                >
                    <Stack.Screen name='InicioWarn' component={InicioWarn} options={{ headerShown: false, drawerItemStyle: { display: 'none' } }} />
                    <Stack.Screen name='NavInicial' component={NavInicial} options={{ headerShown: false, drawerLabel: 'Ínicio' }} />
                    <Stack.Screen name='Sobre' component={Sobre} options={{ headerShown: false, drawerLabel: 'Sobre' }} />
                    {/* <Stack.Screen name='Info' component={Info} options={{ drawerLabel: 'Informações' }} /> */}

                            <Stack.Screen name="protocolos" options={{ drawerLabel: 'Protocolos Anestésicos', headerShown: false}}>
                                {() => <Stack.Navigator screenOptions={{ headerShown: false, headerShown: false }}>
                                    {Object.entries(StackProtocolos).map(([name, component]) => (
                                        <Stack.Screen key={name} name={name} component={component.screen} />
                                    ))}
                                </Stack.Navigator>}
                            </Stack.Screen>

                    <Stack.Screen name="Aves" options={{ drawerLabel: 'Aves', headerShown: false}}>
                        {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
                            {Object.entries(AvesStackScreens).map(([name, component]) => (
                                <Stack.Screen key={name} name={name} component={component.screen} />
                            ))}
                        </Stack.Navigator>}
                    </Stack.Screen>
                    <Stack.Screen name="Mamiferos" options={{ drawerLabel: 'Mamíferos', headerShown: false}} >
                        {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
                            {Object.entries(MamiferosStackScreen).map(([name, component]) => (
                                <Stack.Screen key={name} name={name} component={component.screen} />
                            ))}
                        </Stack.Navigator>}
                    </Stack.Screen>
                    {/* <Stack.Screen name='Repteis' component={Repteis} /> */}
                    <Stack.Screen name='EmergenciaMamiferos' component={EmergenciaMamiferos} options={{ drawerItemStyle: { display: 'none' }, headerTitle: '', headerStyle:{ backgroundColor:'#c4c4c4' } }} />
                    <Stack.Screen name='EmergenciaAves' component={EmergenciaAves} options={{ drawerItemStyle: { display: 'none' }, headerTitle: '', headerStyle:{ backgroundColor:'#c4c4c4' }  }} />
                    <Stack.Screen name='Calculadora Individual' component={CalculadoraIndividual} options={{ drawerLabel: 'Calculadora', headerShown: false, headerTitle: '', headerStyle:{ backgroundColor:'#c4c4c4' }}}/>

                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

