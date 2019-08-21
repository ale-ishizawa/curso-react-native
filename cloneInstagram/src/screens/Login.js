import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

//Imports para Login com Redux
import { connect } from 'react-redux'
import { login } from '../store/actions/user'

class Login extends Component {
  state = {
    name: 'Temporario',
    email: '',
    password: ''
  }

  componentDidUpdate = prevProps => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.props.navigation.navigate('Profile')
    }
  }

  login = () => {
    this.props.onLogin({ ...this.state })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Email' style={styles.input}
          autoFocus={true} keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })} />
        <TextInput placeholder='Senha' style={styles.input}
          value={this.state.password} secureTextEntry={true}
          onChangeText={password => this.setState({ password })} />
        <TouchableOpacity style={styles.buttom} onPress={this.login} >
          <Text style={styles.buttomText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttom} onPress={() => {
          this.props.navigation.navigate('Register')
        }} >
          <Text style={styles.buttomText}>Criar nova conta</Text>
        </TouchableOpacity>
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
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttomText: {
    fontSize: 20,
    color: '#FFF'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
  }
})

//Mapear as actions
const mapDispatchToProps = dispatch => {
  return {
    //dispatch => responsável por propagar as actions para os reducers
    onLogin: user => dispatch(login(user))
  }
}

const mapStateToProps = ({user}) => {
  return {
    isLoading: user.isLoading
  }
}

//Conecta o componente com o Redux
export default connect(mapStateToProps, mapDispatchToProps)(Login)