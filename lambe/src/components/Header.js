import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Platform } from 'react-native'
import icon from '../../assets/imgs/icon.png'

class Header extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.rowContainer} >
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}> Lambe Lambe</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop: Platform.OS === 'ios' ? 20 : 0,
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#BBB',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  rowContainer: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  image: {
      height: 30,
      width: 30,
      resizeMode: 'contain'
  },
  title: {
      color: '#000',
      fontFamily: 'shelter',
      height: 30,
      fontSize: 28
  },
  userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  user: {
      fontSize: 10,
      color: '#888',
  },
  avatar: {
      width: 30,
      height: 30,
      marginLeft: 10,
  }
})

const mapStateToProps = ({ user }) => {
  return {
      email: user.email,
      name: user.name,
  }
}

export default Header