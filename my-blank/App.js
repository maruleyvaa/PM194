import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  SectionList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const CATEGORIAS = [
  { etiqueta: 'Ficción', valor: 'Fiction' },
  { etiqueta: 'Historia', valor: 'History' },
  { etiqueta: 'Tecnología', valor: 'Technology' },
  { etiqueta: 'Ciencia', valor: 'Science' },
  { etiqueta: 'Arte', valor: 'Art' },
];

export default function App() {
  const [librosAgrupados, setLibrosAgrupados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Fiction');
  const [error, setError] = useState(null);
  const [expandido, setExpandido] = useState({});

  const buscarLibros = async () => {
    setLoading(true);
    setError(null);

    try {
      let todosLosLibros = [];
      // para mayores resuktados, se hacen 3 peticiones de 40 libros cada una 
      for (let startIndex = 0; startIndex < 120; startIndex += 40) {
        const respuesta = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${categoriaSeleccionada}&maxResults=40&startIndex=${startIndex}`
        );
        const libros = respuesta.data.items || [];
        todosLosLibros = todosLosLibros.concat(libros);
        if (libros.length < 40) break;
      }

      const agrupados = {};

      todosLosLibros.forEach((item) => {
        const autor = item.volumeInfo.authors?.[0] || 'Autor desconocido';
        if (!agrupados[autor]) agrupados[autor] = [];
        agrupados[autor].push(item);
      });

      // filtro solo autores con 2 o más libros
      const secciones = Object.entries(agrupados)
        .filter(([_, libros]) => libros.length >= 2)
        .slice(0, 5) // slo los primeros 5 autores con 2 o mas libros
        .map(([autor, libros]) => ({
          title: autor,
          data: libros,
        }));

      setLibrosAgrupados(secciones);
    } catch (err) {
      setError('Ocurrió un error al obtener los libros. Intenta de nuevo.');
    }

    setLoading(false);
  };

  useEffect(() => {
    buscarLibros();
  }, [categoriaSeleccionada]);

  const toggleExpandido = (id) => {
    setExpandido((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Libros por Autor</Text>

      <View style={styles.selector}>
        {CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat.valor}
            style={[
              styles.boton,
              cat.valor === categoriaSeleccionada && styles.botonActivo,
            ]}
            onPress={() => setCategoriaSeleccionada(cat.valor)}
          >
            <Text
              style={[
                styles.botonTexto,
                cat.valor === categoriaSeleccionada && styles.textoActivo,
              ]}
            >
              {cat.etiqueta}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#800020" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <SectionList
          sections={librosAgrupados}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }) => {
            const id = item.id;
            const info = item.volumeInfo;

            return (
              <ScrollView style={styles.card}>
                <Text style={styles.titulo}>{info.title}</Text>
                {info.imageLinks?.thumbnail && (
                  <TouchableOpacity onPress={() => toggleExpandido(id)}>
                    <Image
                      source={{ uri: info.imageLinks.thumbnail }}
                      style={styles.portada}
                    />
                  </TouchableOpacity>
                )}

                {expandido[id] && (
                  <>
                    <Text style={styles.descripcion}>
                      {info.description?.slice(0, 200) || 'Sin reseña disponible.'}
                    </Text>
                    <Text style={styles.editorial}>
                      🏷️ {info.publisher || 'Editorial desconocida'}
                    </Text>
                  </>
                )}
              </ScrollView>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.autor}>👤 {title}</Text>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#800020',
    marginBottom: 10,
  },
  selector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  boton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginBottom: 5,
  },
  botonActivo: {
    backgroundColor: '#800020',
  },
  botonTexto: {
    color: '#333',
    fontWeight: 'bold',
  },
  textoActivo: {
    color: '#fff',
  },
  autor: {
    backgroundColor: '#f3f3f3',
    padding: 8,
    fontWeight: 'bold',
    color: '#800020',
    fontSize: 16,
  },
  card: {
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    elevation: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  portada: {
    width: 100,
    height: 150,
    marginVertical: 8,
    alignSelf: 'center',
  },
  descripcion: {
    fontSize: 12,
    marginBottom: 4,
  },
  editorial: {
    fontStyle: 'italic',
    fontSize: 12,
    color: '#333',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
