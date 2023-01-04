import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Telefone() {
  return (
    <View style={styles.contato}>
      <Text style={styles.telefone}>Fale com a Pigz</Text>
      <FontAwesome
        name='whatsapp'
        size={25}
        style={{ paddingHorizontal: 5 }}
      />
      <Text style={styles.ddd}>95</Text>
      <Text style={styles.telefone}>3224-2603</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contato: {
    margin: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  telefone: {
    paddingHorizontal: 10,
    color: '#333333',
    fontSize: 16
  },
  ddd: {
    color: '#333333',
    paddingLeft: 3,
    fontSize: 12
  }
})