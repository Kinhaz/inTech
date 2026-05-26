import 'react-native-gesture-handler'; // <-- ESSENCIAL NA PRIMEIRA LINHA PARA EVITAR TELA BRANCA
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando os 4 componentes das suas telas
import WelcomeScreen from './components/WelcomeScreen';
import CadastroScreen from './components/CadastroScreen';
import QuestionarioScreen from './components/QuestionarioScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Questionario" component={QuestionarioScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}