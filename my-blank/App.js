//Zona 1, IMPORTACIONES

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto=(props) => {
  const {contenido}=props
  return (
    <Text>{contenido}</Text>
  );
}


// Zona 2, MAIN (ejecucuión del programa)
export default function App() {
  return (
    <View style={styles.container}>


      <Texto contenido="Hola"></Texto>
      <Texto contenido="mundo"></Texto>
      <Texto contenido="React"></Texto>
      <Texto contenido="Native"></Texto>
      <Text>Hola Mundo, React Native</Text>
      <Button title="Tlabaja"></Button>
       
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
