import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function Compra(props) {
  return (
    <View style={styles.compra}>
      <Text style={styles.title}>{props.data.title}</Text>
      <Text style={styles.subtitle}>{props.data.subtitle}</Text>
      <Text style={styles.bonus}>{props.data.bonus1}</Text>
      <Text style={styles.bonus}>{props.data.bonus2}</Text>
      <Text style={styles.bonus}>{props.data.bonus3}</Text>
      <Text style={styles.bonus}>{props.data.bonus4}</Text>
      <Text style={styles.bonus}>{props.data.bonus5}</Text>
      <View style={styles.areaPreco}>
        <Text style={styles.preco}>{props.data.preco}</Text>
      </View>
      <View style={{ width: '100%' }}>
        <TouchableOpacity style={{ paddingVertical: 19 }}>
          <LinearGradient style={styles.linearPreco} locations={[.5, 0.9]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#FF881F', '#FA641E']}>
            <Text style={styles.btnText}>{props.data.textBtn}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  compra: {
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 55,
    marginTop: 25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333333'
  },
  subtitle: {
    color: '#666666',
    fontSize: 16,
    marginBottom: 10
  },
  bonus: {
    fontSize: 14,
    color: '#333333',
    marginVertical: 2
  },
  areaPreco: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 35
  },
  preco: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold'
  },
  linearPreco: {
    padding: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 45,
  },
  btnText: {
    fontSize: 16,
    color: '#fff'
  }
})