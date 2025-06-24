//Zona 1, IMPORTACIONES

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Evita que la pantalla de carga se oculte automáticamente
SplashScreen.preventAutoHideAsync();

// Zona 2, MAIN (ejecución del programa)
export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setAppReady(true);
      await SplashScreen.hideAsync(); // Oculta la pantalla de carga después de 2 segundos
    }, 2000);
  }, []);
  
  return (
    <ImageBackground 
      source={require('./assets/messi.jpg')}
      style={styles.background}
      resizeMode="cover">
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a mi app</Text>
          <Text style={styles.subtitle}>
            {appReady ? 'La app está lista' : 'Cargando...'}
          </Text>
        </View>
    </ImageBackground>
  );
}

// Zona 3, ESTILOS
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle: {
    fontSize: 16,
    color: '#fff'
  }
});