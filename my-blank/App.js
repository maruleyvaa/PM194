//Zona 1, IMPORTACIONES

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';
import { FlatList, SectionList } from 'react-native';

// Zona 2, MAIN (ejecucuión del programa)

const frutas = ['Manzana', 'Banana', 'Pera', 'Sandía'];

const secciones = [
  {
    title: 'Frutas',
    data: ['Naranja', 'Uva', 'Mango'],
  },
  {
    title: 'Verduras',
    data: ['Zanahoria', 'Lechuga', 'Brócoli'],
  },
];

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />

      <View style={styles.section}>
        <Text style={styles.title}>FlatList</Text>
        <FlatList
          data={frutas}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>SectionList</Text>
        <SectionList
          sections={secciones}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </View>
  );
}

//Zona 3, ESTILOS y CSS (lo bonito)
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'purple',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  item: {
    fontSize: 16,
    padding: 6,
    marginLeft: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f9c2ff',
    padding: 5,
  },
});

