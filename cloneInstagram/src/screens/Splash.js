import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Splash extends Component {

  componentDidMount = () => {
    setTimeout(
      () => { this.props.navigation.navigate('App')},
      3000
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <Image source={require('../../assets/imgs/icon.png')}
          style={styles.image} />
        <Text style={styles.header} > CLONE Instagram </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold'
  }
})