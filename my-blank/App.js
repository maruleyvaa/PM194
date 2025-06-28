//Zona 1, IMPORTACIONES

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Button } from 'react-native-web';

//Zona 2
export default function App() {

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const simularcarga = () => {
    setLoading(true);
    setMensaje('');
    setTimeout(() => {
      setLoading(false);
      setMensaje('Carga completada');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        carga
      </Text>
      {loading ? (
        <View>
          <ActivityIndicator size="large" color="#2D9CDB"/>
          <Text style={styles.subtitle}> CARGANDO... </Text>
        </View>
      ) : (
        <>
        <Button title ="Iniciar Carga" onPress={simularcarga} />
        {mensaje !== ''&& <Text style={styles.exito}>{mensaje}</Text>}
        </>
      )}
    </View>
  );
}
    


// Zona 3, ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  texto:{
    marginTop:15,
    color: 'gray',
  },
  exito: {
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
  }
});