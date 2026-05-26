import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  SafeAreaView 
} from 'react-native';

export default function CadastroScreen({ navigation }: any) {
  const [data, setData] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Logo superior esquerda */}
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://i.snipboard.io/rVenpW.jpg' }} 
            style={styles.smallLogo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Cadastro</Text>

        {/* Inputs Padrão */}
        <View style={styles.form}>
          <Text style={styles.label}>Digite seu nome</Text>
          <TextInput style={styles.input} placeholder="" />

          <Text style={styles.label}>Digite seu e-mail</Text>
          <TextInput style={styles.input} keyboardType="email-address" />

          <Text style={styles.label}>Escolha sua senha</Text>
          <TextInput style={styles.input} secureTextEntry />

          <Text style={styles.label}>Confirme sua senha</Text>
          <TextInput style={styles.input} secureTextEntry />
        </View>

        {/* Seção da Data (Card Roxo Claro) */}
        <View style={styles.dateCard}>
          <Text style={styles.dateCardLabel}>Digite sua data de nascimento</Text>
          
          <View style={styles.dateInputContainer}>
            <Text style={styles.floatingLabel}>Data</Text>
            <TextInput 
              style={styles.innerDateInput} 
              placeholder="dd/mm/aaaa"
              value={data}
              onChangeText={setData}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.dateButtons}>
            <TouchableOpacity><Text style={styles.dateBtnText}>Cancel</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.dateBtnText}>OK</Text></TouchableOpacity>
          </View>
        </View>

{/* Botão Criar Conta */}
<TouchableOpacity 
  style={styles.btnCriar}
  onPress={() => navigation.navigate('Questionario')} // <--- Linha adicionada aqui
  activeOpacity={0.8}
>
  <Text style={styles.btnText}>Criar conta</Text>
</TouchableOpacity>

        {/* Footer Login */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.footerLink}>Login</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f4f0',
  },
  container: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  header: {
    width: '100%',
    paddingTop: 20,
  },
  smallLogo: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0d1e3d',
    textAlign: 'center',
    marginVertical: 20,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#cccccc',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
  },
  // Estilos do Card de Data
  dateCard: {
    backgroundColor: '#e8e4f0',
    borderRadius: 25,
    padding: 20,
    marginTop: 10,
  },
  dateCardLabel: {
    fontSize: 15,
    color: '#444',
    marginBottom: 15,
  },
  dateInputContainer: {
    borderWidth: 2,
    borderColor: '#0d1e3d',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'relative',
  },
  floatingLabel: {
    position: 'absolute',
    top: -12,
    left: 10,
    backgroundColor: '#e8e4f0',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  innerDateInput: {
    fontSize: 18,
    color: '#000',
  },
  dateButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    marginTop: 15,
  },
  dateBtnText: {
    color: '#0d1e3d',
    fontWeight: '700',
    fontSize: 16,
  },
  // Botão Principal
  btnCriar: {
    backgroundColor: '#32B44A',
    height: 65,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  btnText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  footerText: {
    fontSize: 15,
    color: '#000',
  },
  footerLink: {
    fontSize: 15,
    color: '#00ACEE',
    fontWeight: 'bold',
  },
});