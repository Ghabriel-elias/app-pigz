import React, { useState, useRef } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Picker } from '@react-native-picker/picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import * as Animatable from 'react-native-animatable'

export default function Inputs1(props) {
  const [dddSelected, setDDDSeleceted] = useState(0)

  const [hidePass, setHidePass] = useState(true)
  const [icon, setIcon] = useState('eye-slash')
  const [messageError, setMessageError] = useState('')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  let paises = props.paises

  let dddItems = paises.map((value, key) => {
    return <Picker.Item key={key} value={key} label={`${value.value}+`} />
  })

  function show() {
    if (hidePass === true) {
      setHidePass(false)
      setIcon('eye')
    } else {
      setHidePass(true)
      setIcon('eye-slash')
    }
  }


  function guardar() {
    if (nome === '' || senha === '' || email === '') {
      setMessageError("Por favor insira as informações para prosseguir")
      return
    } else {
      props.set(1)
      AsyncStorage.setItem("nome", nome)
      AsyncStorage.setItem("email", email)
      AsyncStorage.setItem("senha", senha)
    }
  }

  return (
    <Animatable.View
      animation='fadeInRight'
    >
      <View style={styles.areaInputs}>
        <View style={styles.titles}>
          <Text style={styles.titleInput}>Quero vender no Pigz</Text>
          <Text style={styles.subtitleInput}>Dê o primeiro passo para aumentar suas vendas</Text>
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.text}>Nome</Text>
          <TextInput style={styles.inputs} value={nome} onChangeText={(value) => setNome(value)} placeholder='Ex: Ghabriel' />
          <Text style={styles.text}>E-mail</Text>
          <TextInput style={styles.inputs} value={email} onChangeText={(value) => setEmail(value)} keyboardType='email-address' placeholder='Ex: ghsouza1013@gmail.com' />
          <Text style={styles.text}>Senha</Text>
          <View style={styles.areaSenha}>
            <TextInput style={styles.senha} value={senha} onChangeText={(value) => setSenha(value)} secureTextEntry={hidePass} textContentType='password' />
            <TouchableOpacity onPress={show}>
              <FontAwesome name={icon} color='#000' size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Telefone</Text>
          <View style={styles.telefone}>
            <View style={styles.Areapicker}>
              <View style={styles.picker}>
                <Picker
                  selectedValue={dddSelected}
                  onValueChange={(value) => setDDDSeleceted(value)}
                >
                  {dddItems}
                </Picker>
              </View>
              <TextInput style={styles.inputTelefone} keyboardType='numeric' placeholder='Ex: (95) 98405-0997' />
            </View>
          </View>
        </View>
        <Text style={[styles.finalText, { color: '#ff0000', marginTop: 0 }]}>{messageError}</Text>
        <Text style={styles.finalText}>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</Text>
        <TouchableOpacity style={styles.btnFinal} onPress={guardar}>
          <Text style={styles.btnTextFinal}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  areaInputs: {
    marginTop: 25,
    borderRadius: 20,
    backgroundColor: '#fff',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titles: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  titleInput: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333333'
  },
  subtitleInput: {
    marginTop: 5,
    fontSize: 12,
    color: '#333333'
  },
  textInputs: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputs: {
    borderWidth: 1,
    minWidth: '85%',
    borderColor: '#999999',
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 20,
    marginHorizontal: 30,
  },
  text: {
    marginTop: 20,
    marginHorizontal: 40,
    color: '#333333',
    marginBottom: 5
  },
  Areapicker: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 20,
    marginHorizontal: 30,
  },
  picker: {
    backgroundColor: '#F0F0F0',
    width: 95,
    borderRadius: 20,
  },
  inputTelefone: {
    width: '70%',
    paddingHorizontal: 15,
    paddingVertical: 11,
  },
  areaSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: '#999999',
    justifyContent: 'space-between'
  },
  senha: {
    width: '95%',
    zIndex: 5
  },
  finalText: {
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 10,
    fontSize: 12,
    color: '#666666',
    marginTop: 15,
  },
  btnFinal: {
    backgroundColor: '#FA641E',
    minWidth: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 25,
    borderRadius: 15,
  },
  btnTextFinal: {
    padding: 10,
    color: '#fff',
    fontSize: 18
  },

})