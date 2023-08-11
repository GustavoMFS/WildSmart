import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  tituloPosicao: {
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center'
  },
  tituloTamanhoMenor: {
    fontSize: 23,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center'
  },
  background: {
    backgroundColor: '#1d0040',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'grey',
    color: 'white'
  },
  resultadoItem: {
    marginBottom: 8,
  },
  resultadoNome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
  resultadoVolume: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#c4c4c4",
    height: 60,
    // padding: 10,
  },
  titulo2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 20,
    lineHeight: 20,
  },
  inputContainer: {
    margin: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#545258",
  },
  tabelaContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: '#545258',
    width: 600
  },
  cabecalhoTabela: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 3,
    borderBottomColor: "#ddd",
    padding: 10,
    alignItems: 'center'
  },
  textoCabecalho: {
    fontWeight: "bold",
    textAlign: "center",
    color: 'black',
    fontSize: 18
  },
  linha: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    padding: 15,
    backgroundColor: 'white'
  },
  celula: {
    flex: 1,
    textAlign: 'center',
    flexWrap: "wrap",
    paddingHorizontal: 5,
    color: '#000000',
    fontSize: 17,
  },
  celula2: {
    flex: 2,
    textAlign: 'center',
    flexWrap: "wrap",
    paddingHorizontal: 5,
    color: '#000000',
    fontSize: 17,
  },
  textoObs: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black'
  },
  botaoPosicao: {
    justifyContent: 'center',
    margin: 50,
    backgroundColor: '#2b02c9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    width: 130,
    height: 130,
  },
  creditos: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',

  },
  creditosRodaPe: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,

  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cabecalhoEspecie: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#c4c4c4'
  },
  //warn
  cabecalhoWarn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#c4c4c4'
  },
  tituloWarn: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  textoWarn: {
    textAlign: 'justify',
    textAlignVertical: 'top',
    fontSize: 18,
    color: 'black',
    padding: 20,
  },


});

export default styles
