import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 
//Páginas do app
function TelaInicial({ navigation }) {
 
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>CURRÍCULO</Text>
      <Pressable
        style={styles.button}
        title="Experiência"
        onPress={() => navigation.navigate('Experiencia')}
      ><Text>Experiência</Text></Pressable>
       <Pressable
        style={styles.button}
        title="Formação Acadêmica"
        onPress={() => navigation.navigate('Formacao')}
      ><Text>Formação Acadêmica</Text></Pressable>
        <Pressable
        style={styles.button}
        title="Tecnologias"
        onPress={() => navigation.navigate('Tecnologias')}
      ><Text>Tecnologias</Text></Pressable>
        <Pressable
        style={styles.button}
        title="Idiomas"
        onPress={() => navigation.navigate('Idiomas')}
      ><Text>Idiomas</Text></Pressable>
    </View>
  );
}
 
function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>(Estágio)</Text>
      <Text style={styles.local}>(Enext)</Text>
      <Text style={styles.periodo}>(Março/2021 - Outubro/2021)</Text>
      <Text style={styles.descricao}>(Desenvolvedor Front End VTEX)</Text>
      <Text style={styles.local}>(Híbrido)</Text>
      <Text style={styles.periodo}>(Junho/2022 - Atualmente)</Text>
    </View>
  );
}
 
function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>(Graduação em Engenharia Civil)</Text>
      <Text style={styles.local}>(Universidade Católica de Pernambuco)</Text>
      <Text style={styles.periodo}>(Conclusão: Dezembro/2019)</Text>
      <Text style={styles.descricao}>(Sistemas para Internet)</Text>
      <Text style={styles.local}>(Universidade Católica de Pernambuco)</Text>
      <Text style={styles.periodo}>(Em andamento)</Text>
    </View>
  );
}
 
function Tecnologias() {
  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>(VTEX)</Text>
      <Text style={styles.descricao}>(HTML)</Text>
      <Text style={styles.descricao}>(CSS)</Text>
      <Text style={styles.descricao}>(SASS)</Text>
      <Text style={styles.descricao}>(JavaScript)</Text>
      <Text style={styles.descricao}>(React)</Text>
      <Text style={styles.descricao}>(TypeScript)</Text>
      <Text style={styles.descricao}>(GraphQL)</Text>
      <Text style={styles.descricao}>(Arquitetura REST API)</Text>
    </View>
  );
}
 
function Idiomas() {
  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>(Português)</Text>
      <Text style={styles.periodo}>(Nativo)</Text>
      <Text style={styles.descricao}>(Inglês)</Text>
      <Text style={styles.periodo}>(Fluente)</Text>
    </View>
  );
}
 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="TelaInicial" component={TelaInicial}  options={{ title: 'Home' }} />
        <Stack.Screen name="Experiencia" component={Experiencia} options={{ title: 'Experiência'}} />
        <Stack.Screen name="Formacao" component={Formacao} options={{ title: 'Formação Acadêmica'}} />
        <Stack.Screen name="Tecnologias" component={Tecnologias} options={{ title: 'Tecnologias'}} />
        <Stack.Screen name="Idiomas" component={Idiomas} options={{ title: 'Idiomas'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightgray',
    color: 'darkgray',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'lightslategray',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descricao: {
    margin: 4,
    fontSize: 14,
    color: 'deepskyblue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  local: {
    margin: 3,
    fontSize: 13,
    color: '#FFFF00',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  periodo: {
    margin: 3,
    fontSize: 12,
    fontWeight: 'lighter',
    textAlign: 'center',
    marginBottom: 25,
  },
});