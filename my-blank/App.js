//Zona 1, IMPORTACIONES

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

const Texto=() => {
  const [contenido,setContenido]=useState("Hola Mundo, React Native");
  const actualizaTexto=()=>{setContenido("Texto actualizado");}
  return (
    <Text onPress={actualizaTexto}>{contenido}</Text>
  );
}

//cambiar contenido del boton al pulsar
const Boton=() => {
  const [textoBoton,setTextoBoton]=useState("Tlabaja");
  const actualizaBoton=()=>{setTextoBoton("Ya no");}
  return (
  <Button title={textoBoton} onPress={actualizaBoton}></Button>
  );
}

// Zona 2, MAIN (ejecucuión del programa)
export default function App() {
  return (
    <View style={styles.container}>


      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Text>Hola Mundo, React Native</Text>
      <Boton></Boton>
       
      <StatusBar style="auto" />
    </View>
  );
}



//Zona 3, ESTILOS y CSS (lo bonito)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
