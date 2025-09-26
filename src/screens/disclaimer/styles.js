import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cabecalhoWarn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#c4c4c4',
  },
  tituloWarn: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  textoWarn: {
    textAlign: 'justify',
    textAlignVertical: 'top',
    fontSize: 18,
    color: 'black',
    padding: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default styles;
