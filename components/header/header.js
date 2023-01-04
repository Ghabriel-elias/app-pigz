import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from '@react-navigation/native';


export default function Header(props) {

  const navigation = useNavigation()

  function irLogin() {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.header}>
      <Image
        source={require('../../imgs/logo.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.toch} onPress={irLogin}>
        <LinearGradient style={styles.btnHeader} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#FF881F', '#FA641E']}>
          <Text style={styles.textBtnHeader}>Já sou parceiro</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 22,
    paddingRight: 18,
  },
  logo: {
    width: 80,
    height: 40
  },
  toch: {
    width: 160,
    backgroundColor: '#f45f',
    borderRadius: 25
  },
  btnHeader: {
    borderRadius: 25,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnHeader: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#fff',
    fontSize: 15,
  },
})