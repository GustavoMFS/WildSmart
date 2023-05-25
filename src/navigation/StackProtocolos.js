import TelaProtocolos from "../screens/protocolos/protocolos";
import DesgasteRoedores from "../screens/protocolos/desgastes/DesgasteRoedores";
import DesgasteCoelho from "../screens/protocolos/desgastes/DesgasteCoelho";


export const StackProtocolos = {
  TelaProtocolos: {
    screen: TelaProtocolos,
    navigationOptions: {
      headerShown: false,
    },
  },
  DesgasteRoedores: {
    screen: DesgasteRoedores,
    navigationOptions: {
      headerShown: false,
    },
  },
  DesgasteCoelho: {
    screen: DesgasteCoelho,
    navigationOptions: {
      headerShown: false,
    },
  },
};