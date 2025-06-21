//Zona 1, IMPORTACIONES

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React, {useState} from 'react';
import { TextInput, Alert, ScrollView } from 'react-native-web';


// Zona 2, MAIN (ejecucuión del programa)
export default function App() {
  const[nombre,setNombre] = useState('');
  const[password,setPassword] = useState('');
  const[comments, setComments] = useState('');
  const[age, setAge] = useState('');

const showAlert = () => {
if(nombre.trim() === '' || password.trim() === '' || age.trim() === '') {
    window.alert('Por favor, completa todos los campos.');
  }
  else{
    window.alert(
      `Nombre: ${nombre}\nContraseña: ${password}\nEdad: ${age}\nComentarios: ${comments}`,
      [{ text: 'OK' }],
    );
  }
}

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
         value={nombre}
        onChangeText={setNombre}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
      <Text style={styles.label}>Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe un numero"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Comentarios Multilineal</Text>
      <TextInput
        style={[styles.input, {height:100, textAlignVertical: 'top'}]}
        placeholder="Escribe tus comentarios"
        value={comments}
        onChangeText={setComments}
        multiline={true}
        numberOfLines={4}
      />

      <text style={styles.label}>Campo de solo lectura</text>
      <TextInput
        style={styles.input}
        value="Este campo es de solo lectura"
        editable={false}
      />

      <button
        style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5}}
        onClick={showAlert}
      >
        Enviar
      </button>


    </ScrollView>
  );
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