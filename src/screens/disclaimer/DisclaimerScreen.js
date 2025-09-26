import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';

export default function DisclaimerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoWarn}>
        <Text style={styles.tituloWarn}>
          AVISO - Leia antes de utilizar este aplicativo
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.textoWarn}>
          {'\t'}Bem-vindo ao aplicativo de cálculo de doses para animais
          selvagens. Antes de começar a usá-lo, é importante que você leia
          atentamente este aviso.{'\n'}
          {'\n'}
          {'\t'}Este aplicativo foi criado para ser utilizado apenas por médicos
          veterinários com experiência no atendimento e tratamento de animais
          selvagens. As doses fornecidas pelo aplicativo são baseadas em
          literatura e experiência do criador do aplicativo. No entanto, é
          importante lembrar que as doses e volumes resultantes do aplicativo
          devem ser conferidos antes de utilizados, pois o aplicativo pode
          conter erros.{'\n'}
          {'\n'}
          {'\t'}Algumas doses são generalizadas e podem ser contraindicadas para
          determinadas espécies. Portanto, é fundamental que você utilize seu
          próprio conhecimento e experiência ao utilizar as doses fornecidas
          pelo aplicativo.{'\n'}
          {'\n'}
          {'\t'}O autor do aplicativo não se responsabiliza por eventuais
          problemas gerados pelo uso do aplicativo, e o aplicativo deve ser
          utilizado por sua própria conta e risco.{'\n'}
          {'\n'}
          {'\t'}Se você identificar possíveis erros ou bugs no aplicativo ou
          tiver conhecimento de novas doses de medicamentos, entre em contato
          com o criador do aplicativo para que possamos atualizá-lo e
          melhorá-lo.{'\n'}
          {'\n'}
          {'\t'}Ao clicar em "Aceito", você concorda com todos os termos e
          condições acima. Caso não concorde, por favor, não utilize este
          aplicativo.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Aceito" onPress={() => navigation.replace('Home')} />
        </View>
      </ScrollView>
    </View>
  );
}
