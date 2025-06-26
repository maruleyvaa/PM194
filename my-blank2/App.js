//ZONA 1 / IMPORTACIONES

import {StyleSheet,Text, View, ImageBackground, ScrollView, TextInput, TouchableOpacity,  Switch} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

//vita que se oculte la pantalla de carga automáticamente
SplashScreen.preventAutoHideAsync();


//ZONA 2 / MAIN 
export default function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [appReady, setAppReady] = useState(false);

  const showAlert = () => {
    if (nombre.trim() === '' || email.trim() === '') {
      alert('Completa todos los campos.');
    } else if (!acceptTerms) {
      alert('Debes aceptar los términos y condiciones.');
    } else {
      alert(`Nombre: ${nombre}\nEmail: ${email}\nAcepta términos: ${acceptTerms}`);
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      setAppReady(true);
      await SplashScreen.hideAsync(); 
    }, 2000);
  }, []);

  if (!appReady) {
    return null;
  }

  return (
    <ImageBackground
      source={require('./assets/atardecer.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Registro</Text>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre:"
          value={nombre}
          onChangeText={setNombre}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu correo electrónico:"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.termsContainer}>
          <Switch
            value={acceptTerms}
            onValueChange={setAcceptTerms}
          />
          <Text style={styles.termsText}>Acepto los términos y condiciones</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={showAlert}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}


//ZONA 3/ estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#333'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  termsText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#333'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white'
  }
});