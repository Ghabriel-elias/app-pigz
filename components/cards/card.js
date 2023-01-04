import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Cards(props) {
  return (
    <View style={styles.cards}>
      <Image
        source={props.data.img}
        style={styles.imgsCards}
      />
      <Text style={styles.titleCard}>{props.data.title}</Text>
      <Text style={styles.subTitle}>{props.data.subTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 20
  },
  imgsCards: {
    marginBottom: 17,
  },
  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333'
  },
  subTitle: {
    fontSize: 16,
    color: '#333333'
  }
})