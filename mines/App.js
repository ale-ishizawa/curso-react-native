import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import params from './src/params'
import Field from './src/components/Field'
import MineField from './src/components/MineField'
import {
  createMinedBoard
} from './src/functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }
  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => { 
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando O Mines!  </Text>
        <Text style={styles.instructions}> Tamanho da grade: 
        { params.getRowsAmount()} x {params.getColumnsAmount()}  </Text>
      
        <MineField board={this.state.board} />      

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});