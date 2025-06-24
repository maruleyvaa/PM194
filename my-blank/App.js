//Zona 1, IMPORTACIONES

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React, {use, useEffect,useState} from 'react';
import { TextInput, Alert, ScrollView } from 'react-native-web';
import * as SplashScreen from 'expo-splash-screen';



SplashScreen.preventAutoHideAsync(); // Evita que la pantalla de carga se oculte automáticamente
// Zona 2, MAIN (ejecucuión del programa)
export default function App() {
  const[spash,setSplash] = useState(false);

  useEffect(() => {
    setTimeout(async() => {
      setAppReady(true);
      await SplashScreen.hideAsync(); // Oculta la pantalla de carga después de 2 segundos
    },2000);
   }, []);
  
      
}


// Zona 3, ESTILOS
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'lightpink',
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  textArea: {
    height: 100,
  },
});