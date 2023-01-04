import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";

import api1 from '../../api/apiInput1/api';

import api from '../../api/apiInput2/api';

import * as Animatable from 'react-native-animatable'

import Header from '../header/header';
import Cards from '../cards/card';
import Carrossel from '../carousel/carrossel';
import Compra from '../compra/compra';
import Telefone from '../telefone/telefone';
import Footer from '../footer/footer';

import Inputs1 from '../inputs/input1';
import Inputs2 from '../inputs/input2';
import Inputs3 from '../inputs/input3';


let paises = []
let estados = []

export default function Home() {

  const [loading, setLoading] = useState(0)
  const [render, SetRender] = useState(0)

  useEffect(() => {
    async function loadApis() {
      const responseApi1 = await api1.get('data2.json')
      Object.keys(responseApi1.data).map((value, key) => {
        paises.push({ key: key, value: value, label: value })
      })
      const response = await api.get('/50eff700db88f10f5d619b85f8684145b91e1888/dddsBrasileiros.json')
      Object.keys(response.data.dddsPorEstado).map((value, key) => {
        estados.push({ key: key, value: value, label: value })
      })
      setLoading(1)
    }
    loadApis()
  }, [])

  const cards = [
    { key: 1, title: 'Marketplace', subTitle: 'Pra sua loja vender mais', img: require('../../imgs/marketdPlace.png') },
    { key: 2, title: 'É fácil e rápido', subTitle: 'Fazer um pedido no Pigz', img: require('../../imgs/smartPhone.png') },
    { key: 3, title: 'Pigz Gestão', subTitle: 'Você no controle, sempre', img: require('../../imgs/gestão.png') },
    { key: 4, title: 'Pigz Gestão', subTitle: 'Personalizáveis', img: require('../../imgs/impressora.png') },
  ]

  const compra = [
    { key: 1, title: 'Pigz', subtitle: 'Tudo o que você precisa', bonus1: 'Pigz Marketplace', bonus2: 'Página exclusiva', bonus3: 'Pigz Gestão Desktop e Mobile', bonus4: 'Gestão de entregadores', bonus5: 'Vias de impressão personalizáveis', preco: 'R$199/mês', textBtn: 'Vender no Pigz agora' },
    { key: 2, title: 'Pagamento On-line', subtitle: 'Segurança e agilidade', bonus1: 'Aceite Pix e Cartão de Crédito', bonus2: 'Antecipação Pix automática', bonus3: 'Não dependa da maquininha de cartão', bonus4: 'Segurança para receber pedidos', bonus5: 'Agilidade para entregar', preco: '2,99% por transação', textBtn: 'Saiba mais' }
  ]

  const slider = [
    { key: 1, title: 'Pigz Marketplace', text: 'Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.', img: require('../../imgs/phones.png') },
    { key: 2, title: 'Pigz Gestão', text: 'Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.', img: require('../../imgs/note.png') },
    { key: 3, title: 'Gestão de entregadores', text: 'A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.', img: require('../../imgs/entregador.png') },
    { key: 4, title: 'Pagamento on-line', text: 'Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.', img: require('../../imgs/mobile.png') }
  ]

  if (loading == 0) {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Animatable.Image
          source={require('../../imgs/loadingLogo.png')}
          animation='pulse'
          iterationCount={'infinite'}
        >
        </Animatable.Image>
      </View>
    )
  } else if (loading == 1) {
    return (
      <SafeAreaView style={styles.container} >
        <Animatable.View
          animation='fadeIn'
          duration={1800}>
          <Header />
        </Animatable.View>
        <Animatable.View
          animation='fadeInUp'
        >
          <FlatList
            ListEmptyComponent={
              <View>
                <View>
                  <LinearGradient style={styles.Viewinputs} colors={['#FA641E', '#FF881F']}>
                    <View style={styles.areahamburguer}>
                      <Text style={styles.textHamburguer}>Pigz: tudo que você precisa pra vender ainda mais!</Text>
                      <Image
                        source={require('../../imgs/burguer_2.png')}
                        style={styles.imgHamgurguer}
                      />
                    </View>
                    <View style={styles.areaSubtitle}>
                      <Text style={styles.subtitleHamburguer}>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</Text>
                    </View>
                    {render == 0 && (
                      <Inputs1 set={SetRender} paises={paises} />
                    )}
                    {render == 1 && (
                      <Inputs2 set={SetRender} estados={estados} />
                    )}
                    {render == 2 && (
                      <Inputs3 set={SetRender} />
                    )}
                    <LinearGradient style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
                      locations={[.7, .5]}
                      colors={['#FF881F', '#fff']} >
                      <Image
                        source={require('../../imgs/pigzHeff.png')}
                        style={styles.imgHeff}
                      />
                    </LinearGradient>
                  </LinearGradient>
                </View>
                <View style={styles.areaCard}>
                  <Text style={styles.title}>Você tem um novo Pigzdido!</Text>
                  <FlatList
                    data={cards}
                    renderItem={({ item }) => <Cards data={item} />}
                    style={{ marginVertical: 40 }}
                  />
                </View>

                <View style={styles.areaSlide}>
                  <Text style={styles.title}>Tudo que você precisa por apenas R$199/mês</Text>
                  <Text style={styles.subTitle}>Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.</Text>
                  <FlatList
                    data={slider}
                    renderItem={({ item }) => <Carrossel data={item} />}
                    pagingEnabled
                    horizontal={true}
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            }
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <View>
                <View style={styles.areaCard}>
                  <Text style={styles.titleAreaCompra}>E mais: suporte que realmente funciona!</Text>
                  <Text style={styles.subTitleAreaCompra}>Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.</Text>
                  <FlatList
                    data={compra}
                    renderItem={({ item }) => <Compra data={item} />}
                  />
                </View>
                <Telefone />
                <Footer />
              </View>
            }
          />
        </Animatable.View>
      </SafeAreaView>
    );
  }
}

export { paises, estados }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    width: '60%',
    color: '#333333'
  },
  Viewinputs: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  areahamburguer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textHamburguer: {
    width: 310,
    fontSize: 34,
    color: '#fff',
    marginLeft: 45,
    fontWeight: 'bold',
    zIndex: 2
  },
  imgHamgurguer: {
    width: 215,
  },
  areaSubtitle: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitleHamburguer: {
    width: 360,
    fontSize: 16,
    color: '#fff'
  },
  imgHeff: {
    marginTop: 50,
  },
  areaCard: {
    backgroundColor: '#fff',
    marginTop: 30,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaSlide: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
    color: '#333333'
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    width: '70%',
    color: '#333333',
    marginVertical: 25
  },
  areaCompra: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    width: '100%'
  },
  titleAreaCompra: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '75%',
    color: '#333333',
    marginTop: 50,
    marginBottom: 20
  },
  subTitleAreaCompra: {
    fontSize: 16,
    textAlign: 'center',
    width: '68%',
    color: '#333333',
    marginBottom: 40
  }
});