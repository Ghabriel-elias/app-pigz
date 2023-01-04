import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'

import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';

const BtnAnimation = Animatable.createAnimatableComponent(TouchableOpacity)

import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const [hidePass, setHidePass] = useState(true)
  const [icon, setIcon] = useState('eye-slash')

  const [emailLogin, setEmailLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')

  const nameRef = useRef(null)
  const senhaRef = useRef(null)
  const btnRef = useRef(null)

  const [messageError, setMessageError] = useState('')

  const navigation = useNavigation()

  function irHome() {
    navigation.goBack()
  }

  function show() {
    if (hidePass === true) {
      setHidePass(false)
      setIcon('eye')
    } else {
      setHidePass(true)
      setIcon('eye-slash')
    }
  }

  async function conferir() {
    const email = await AsyncStorage.getItem('email')
    const senha = await AsyncStorage.getItem('senha')
    if (emailLogin == '' && senhaLogin == '') {
      setMessageError('Por favor insira as informações para prosseguir.')
      nameRef.current.focus()
      btnRef.current.shake()
      return
    }
    else if (email && senha && email == emailLogin && senha == senhaLogin) {
      const nome = await AsyncStorage.getItem('nome')
      alert(`Seja bem vindo ${nome}`)
      return
    } else {
      setMessageError('E-mail ou senha estão incorretos.')
      btnRef.current.shake()
      nameRef.current.clear()
      senhaRef.current.clear()
      nameRef.current.focus()
      return
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require('../../imgs/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.toch} onPress={irHome}>
          <LinearGradient style={styles.btnHeader} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#FF881F', '#FA641E']}>
            <Text style={styles.textBtnHeader}>Voltar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <LinearGradient style={styles.inputsArea} locations={[.5, .95]} colors={['#FF881F', '#FA641E']}>
        <View style={styles.areaInterna}>
          <Text style={styles.title}>Faça seu Login</Text>
          <Text style={styles.text}>E-mail</Text>
          <TextInput style={styles.inputs} ref={nameRef} value={emailLogin} onChangeText={(value) => setEmailLogin(value)} placeholder='Ex: ghsouza1013@gmail.com' keyboardType="email-address" />
          <Text style={styles.text}>Senha</Text>
          <View style={styles.areaSenha}>
            <TextInput style={styles.senha} ref={senhaRef} value={senhaLogin} onChangeText={(value) => setSenhaLogin(value)} secureTextEntry={hidePass} textContentType='password' />
            <TouchableOpacity onPress={show}>
              <FontAwesome name={icon} color='#000' size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.finalText}>{messageError}</Text>
          <BtnAnimation ref={btnRef} onPress={conferir} style={styles.btn} >
            <Text style={styles.btnText}>Login</Text>
          </BtnAnimation>
        </View>
      </LinearGradient>
    </SafeAreaView>
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
  inputsArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF881F'
  },
  areaInterna: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 20,
    padding: 25,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#333333'
  },
  inputs: {
    borderWidth: 1,
    minWidth: '85%',
    borderColor: '#999999',
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 20,
  },
  text: {
    marginTop: 20,
    marginHorizontal: 11,
    color: '#333333',
    marginBottom: 5
  },
  areaSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 11,
    height: 50,
    borderWidth: 1,
    borderColor: '#999999',
    justifyContent: 'space-between'
  },
  senha: {
    width: '85%',
    zIndex: 5
  },
  finalText: {
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 10,
    fontSize: 12,
    color: '#ff0000',
  },
  btn: {
    backgroundColor: '#FA641E',
    minWidth: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 25,
    borderRadius: 15,
  },
  btnText: {
    padding: 10,
    color: '#fff',
    fontSize: 18
  },
})