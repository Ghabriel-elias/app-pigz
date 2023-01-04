import React, { useState, useRef } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Picker } from '@react-native-picker/picker';

import * as Animatable from 'react-native-animatable'

export default function Inputs3(props) {
  const [typeSelected, setTypeSelected] = useState(0)

  const refInput = useRef(0)

  setTimeout(() => {
    refInput.current.focus()
  }, 10);


  const lojas = [
    { key: 1, nome: 'Restaurante', value: 1 },
    { key: 2, nome: 'Lanchonete', value: 2 },
    { key: 3, nome: 'PIzzaria', value: 3 },
    { key: 3, nome: 'Peixada', value: 4 }
  ]

  let lojasItens = lojas.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.nome} />
  })

  return (
    <Animatable.View
      animation='fadeInRight'
    >
      <View style={styles.areaInputs}>
        <Text style={styles.titleInput}>Me conta um pouco sobre a sua loja</Text>
        <View style={styles.textInputs}>
          <Text style={styles.text}>Nome da loja</Text>
          <TextInput style={styles.inputs} ref={refInput} placeholder='Restaurante Todo Mundo Gosta' />
          <Text style={styles.text}>CNPJ da loja</Text>
          <TextInput style={styles.inputs} placeholder='12.345.678/0001-99' keyboardType="numeric" />
          <Text style={styles.text}>Tipo de loja</Text>
          <View style={styles.Areapicker}>
            <View style={styles.picker}>
              <Picker
                selectedValue={typeSelected}
                onValueChange={(value) => setTypeSelected(value)}
              >
                {lojasItens}
              </Picker>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btnFinal} onPress={() => props.set(0)}>
          <Text style={styles.btnTextFinal}>Concluir</Text>
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
  titleInput: {
    marginHorizontal: 5,
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
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
    paddingVertical: 15,
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
  },
  picker: {
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 20,
    backgroundColor: '#fff',
    minWidth: '85%',
    borderRadius: 20,
    borderColor: '#999999',
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