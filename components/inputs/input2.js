import React, { useState, useRef } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Keyboard } from 'react-native'

import { Picker } from '@react-native-picker/picker';

import * as Animatable from 'react-native-animatable'

export default function Inputs2(props) {
  const [state, setState] = useState(0)
  const [citySelected, setCitySelected] = useState(0)

  const refInput = useRef(0)

  setTimeout(() => {
    refInput.current.focus()
  }, 10);

  let estados = props.estados


  let ufsItens = estados.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.value} />
  })

  const city = [
    { key: 1, nome: 'Boa Vista', value: 1 },
    { key: 2, nome: 'Pacaraima', value: 2 },
    { key: 3, nome: 'Bonfim', value: 3 },
    { key: 4, nome: 'Amajari', value: 4 }
  ]

  let cityItens = city.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.nome} />
  })

  return (
    <Animatable.View
      animation='fadeInRight'
    >
      <View style={styles.areaInputs}>
        <View style={styles.titles}>
          <Text style={styles.titleInput}>Onde fica sua loja?</Text>
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.text}>Cep</Text>
          <TextInput style={styles.inputs} ref={refInput} maxLength={8} placeholder='00000-000' keyboardType="numeric" />
          <View style={styles.Areapicker}>
            <Text style={styles.text}>Estado</Text>
            <Text style={styles.text}>Cidade</Text>
          </View>
          <View style={styles.Areapicker}>
            <View style={styles.picker}>
              <Picker
                selectedValue={state}
                onValueChange={(value) => setState(value)}
              >
                {ufsItens}
              </Picker>
            </View>
            <View style={styles.pickerCity}>
              <Picker
                selectedValue={citySelected}
                onValueChange={(value) => setCitySelected(value)}
              >
                {cityItens}
              </Picker>
            </View>
          </View>
          <Text style={styles.text}>Endereço</Text>
          <TextInput style={styles.inputs} placeholder='Avenida Brasil' />
          <View style={styles.Areapicker}>
            <Text style={styles.text}>Número</Text>
            <Text style={styles.text}>Complemento</Text>
          </View>
          <View style={styles.Areapicker}>
            <TextInput style={[styles.inputs, { minWidth: '30%', marginHorizontal: 0, marginLeft: 30, marginRight: 20 }]} maxLength={3} placeholder='123' keyboardType="numeric" />
            <TextInput style={[styles.inputs, { minWidth: '50%', marginHorizontal: 0 }]} placeholder='Sala 1' />
          </View>
        </View>
        <TouchableOpacity style={styles.btnFinal} onPress={() => props.set(2)}>
          <Text style={styles.btnTextFinal}>Próximo</Text>
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
    minWidth: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 35
  },
  titleInput: {
    marginTop: 30,
    fontSize: 25,
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
    minWidth: '30%',
    borderRadius: 20,
    borderColor: '#999999',
  },
  pickerCity: {
    borderWidth: 1,
    backgroundColor: '#fff',
    minWidth: '50%',
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