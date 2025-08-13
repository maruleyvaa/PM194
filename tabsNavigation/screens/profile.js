import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>Perfil usuario</Text>
      <Button
        title="Detalles de Usuario"
        onPress={() => navigation.navigate('Detalle')}
      />
    </View>
  );
}