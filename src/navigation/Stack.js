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
import Info from '../screens/Info';
import CalculadoraIndividual from '../components/CalculadoraIndividual';


const Stack = createStackNavigator();
export default function MyStack() {
    return (
        <Stack.Navigator
            // screenOptions={{ headerShown: false }}
            >
            <Stack.Screen name='Info' component={Info} />
            <Stack.Screen name="protocolos">
                {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {Object.entries(StackProtocolos).map(([name, component]) => (
                        <Stack.Screen key={name} name={name} component={component.screen} />
                    ))}
                </Stack.Navigator>}
            </Stack.Screen>
            <Stack.Screen name="Aves" >
                {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {Object.entries(AvesStackScreens).map(([name, component]) => (
                        <Stack.Screen key={name} name={name} component={component.screen} />
                    ))}
                </Stack.Navigator>}
            </Stack.Screen>
            <Stack.Screen name="Mamiferos" >
                {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {Object.entries(MamiferosStackScreen).map(([name, component]) => (
                        <Stack.Screen key={name} name={name} component={component.screen} />
                    ))}
                </Stack.Navigator>}
            </Stack.Screen>
            {/* <Stack.Screen name='Repteis' component={Repteis} /> */}
            <Stack.Screen name='EmergenciaMamiferos' component={EmergenciaMamiferos} />
            <Stack.Screen name='EmergenciaAves' component={EmergenciaAves} />
            <Stack.Screen name='CalculadoraIndividual' component={CalculadoraIndividual} />
        </Stack.Navigator>
    );
}



// import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
// import NavInicial from './NavegacaoInicial';
// import { StackProtocolos } from './StackProtocolos';
// import Repteis from '../screens/repteis/Repteis';
// import { AvesStackScreens } from './StackAves';
// import { MamiferosStackScreen } from './StackMamiferos';
// import EmergenciaAves from '../screens/aves/EmergenciaAves';
// import EmergenciaMamiferos from '../screens/mamiferos/EmergenciaMamiferos';
// import InicioWarn from '../screens/InicioWarn';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import TelaAves from '../screens/aves/Aves';


// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// export default function MyStack() {
//     return (
//         <Stack.Navigator initialRouteName='InicioWarn'
//             screenOptions={{ headerShown: false }}>
//             <Drawer.Navigator>
//                 <Drawer.Screen name="Avesteste" component={TelaAves} />
//             </Drawer.Navigator>
//             <Stack.Screen name='InicioWarn' component={InicioWarn} />

//             <Stack.Screen name='NavInicial' component={NavInicial} />
//             <Stack.Screen name="protocolos" >
//                 {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
//                     {Object.entries(StackProtocolos).map(([name, component]) => (
//                         <Stack.Screen key={name} name={name} component={component.screen} />
//                     ))}
//                 </Stack.Navigator>}
//             </Stack.Screen>
//             <Stack.Screen name="Aves" >
//                 {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
//                     {Object.entries(AvesStackScreens).map(([name, component]) => (
//                         <Stack.Screen key={name} name={name} component={component.screen} />
//                     ))}
//                 </Stack.Navigator>}
//             </Stack.Screen>
//             <Stack.Screen name="Mamiferos" >
//                 {() => <Stack.Navigator screenOptions={{ headerShown: false }}>
//                     {Object.entries(MamiferosStackScreen).map(([name, component]) => (
//                         <Stack.Screen key={name} name={name} component={component.screen} />
//                     ))}
//                 </Stack.Navigator>}
//             </Stack.Screen>
//             <Stack.Screen name='Repteis' component={Repteis} />
//             <Stack.Screen name='EmergenciaMamiferos' component={EmergenciaMamiferos} />
//             <Stack.Screen name='EmergenciaAves' component={EmergenciaAves} />
//         </Stack.Navigator>
//     );
// }


