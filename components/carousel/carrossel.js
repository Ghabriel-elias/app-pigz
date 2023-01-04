import React from 'react';
import { useWindowDimensions, StyleSheet, Text, View, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


export default function Carrossel(props) {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <View style={styles.carousel}>
      <Text style={styles.titleCoursel}>{props.data.title}</Text>
      <View style={[styles.AreaCarousel, { width: windowWidth }]}>
        <LinearGradient style={styles.linearCarousel} colors={['#FA641E', '#FF881F']}>
          <Text style={styles.textCarousel}>{props.data.text}</Text>
          <Image
            source={props.data.img}
            style={{ height: 180, width: 300 }}
          />
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleCoursel: {
    marginTop: 10,
    marginBottom: 30,
    color: '#333333',
    fontSize: 24,
    fontWeight: 'bold'
  },
  AreaCarousel: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearCarousel: {
    width: '90%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingTop: 35
  },
  textCarousel: {
    textAlign: 'center',
    paddingBottom: 50,
    color: '#fff',
    letterSpacing: 1,
    fontSize: 18,
  }
})