import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Footer() {
  return (
    <View>
      <View style={styles.footer}>
        <View style={styles.footerApp}>
          <Image
            source={require('../../imgs/pigzLogotipo.png')}
            style={styles.pigzLogo}
          />
          <Text style={styles.textLogo}>Tudo que você precisa.</Text>
          <Text style={styles.lojas}>Baixe o APP</Text>
          <View style={styles.areaLoja}>
            <Image
              source={require('../../imgs/apple.png')}
              style={styles.imgsStore}
            />
            <Image
              source={require('../../imgs/play.png')}
              style={styles.imgsStore}
            />
          </View>
        </View>
        <View style={styles.sobrePigz}>
          <Text style={styles.titleSobre}>Pigz</Text>
          <Text style={styles.subtitleSobre}>Sobre o Pigz</Text>
          <Text style={styles.subtitleSobre}>Portal do Parceiro</Text>
          <Text style={styles.subtitleSobre}>Quero ser um Pigz Partner</Text>
        </View>
        <View style={styles.sobrePigz}>
          <View style={styles.fale}>
            <FontAwesome
              name='headphones'
              size={30}
              color={'#676767'}
            />
            <Text style={styles.titleSobre}>Fale Conosco</Text>
          </View>
          <Text style={styles.subtitleSobre}>falecom@pigz.com.br</Text>
          <Text style={styles.subtitleSobre}>(95) 3224-2603</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.titleSobre}>Pigz nas redes</Text>
          <View style={styles.redes}>
            <View style={styles.icons}>
              <FontAwesome
                name='linkedin'
                size={20}
                color={'#fff'}
              />
            </View>
            <View style={styles.icons}>
              <FontAwesome
                name='instagram'
                size={20}
                color={'#fff'}
              />
            </View>
            <View style={styles.icons}>
              <FontAwesome
                name='facebook'
                size={20}
                color={'#fff'}
              />
            </View>
            <View style={styles.icons}>
              <FontAwesome
                name='youtube-play'
                size={20}
                color={'#fff'}
              />
            </View>
          </View>
        </View>
        <View style={styles.areaLinha}>
          <View style={styles.linha}>
          </View>
        </View>
        <View style={styles.termos}>
          <Text style={styles.textTermos}>Nossos termos</Text>
          <Text style={styles.textTermos}>Privacidade</Text>
          <Text style={styles.textTermos}>Ajuda</Text>
        </View>
        <View style={styles.final}>
          <Text style={styles.textFinal}>© Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</Text>
          <Image
            source={require('../../imgs/orange.png')}
            style={styles.imgFinal}
          />
        </View>
      </View >
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 1000,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FAFAFA',
    paddingLeft: 20,
  },
  footerApp: {
    marginVertical: 50,
  },
  pigzLogo: {
    width: 100,
    height: 49
  },
  textLogo: {
    color: '#676767',
    fontSize: 11,
    marginTop: 10
  },
  lojas: {
    color: '#676767',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 25
  },
  areaLoja: {
    flexDirection: 'row',
    width: '40%'
  },
  imgsStore: {
    marginTop: 15,
    borderRadius: 10,
    marginRight: 10,
    width: 129,
    height: 40
  },
  sobrePigz: {
    marginBottom: 50
  },
  titleSobre: {
    fontSize: 16,
    color: '#676767',
    fontWeight: 'bold',
    marginBottom: 15
  },
  subtitleSobre: {
    color: '#666666',
    fontSize: 14,
    marginBottom: 15
  },
  fale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  redes: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icons: {
    marginRight: 14,
    backgroundColor: '#676767',
    borderRadius: 25,
    width: '14%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaLinha: {
    width: '94%',
    marginBottom: 30
  },
  linha: {
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  termos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTermos: {
    fontSize: 12,
    color: '#666666',
    marginRight: 30,
    paddingBottom: 20
  },
  final: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50
  },
  textFinal: {
    fontSize: 9,
    color: '#676767',
    width: '60%'
  },
  imgFinal: {
    width: '30%',
    height: 33,
    marginHorizontal: 10
  },
})