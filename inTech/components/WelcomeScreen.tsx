import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';

// Adicionamos a propriedade { navigation } aqui para permitir a mudança de tela
export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f4f0" />
      
      {/* Área da Logo */}
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: 'https://i.snipboard.io/rVenpW.jpg' }} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Área dos Botões */}
      <View style={styles.buttonContainer}>
        {/* Agora ao clicar, ele navega para a tela 'Cadastro' definida no App.tsx */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Cadastro')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => console.log('Login pressionado')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f4f0', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20, 
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#0d1e3d', 
    width: '85%',
    height: 56,
    borderRadius: 28, 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});