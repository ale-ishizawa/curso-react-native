import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { 
  createBottomTabNavigator, //Navegação baseada em Abas
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import Feed from './screens/Feed';
import Icon from 'react-native-vector-icons/FontAwesome'
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import Splash from './screens/Splash';

const authRouter = createStackNavigator({
  Login: { screen: Login, navigationOptions: {title: 'Login'} },
  Register: { screen: Register, navigationOptions: {title: 'Registrar'} }  
}, {
  initialRouteName: 'Login'
})

const loginOrProfileRouter = createSwitchNavigator({
  Profile: Profile,
  Auth: authRouter
}, {
  initialRouteName: 'Auth'
})

const MenuRoutes = {
  Feed: {
    name: 'Feed',
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({ tintColor }) =>
        <Icon name='home' size={30} color={tintColor} />
    }
  },
  Add: {
    name: 'AddPhoto',
    screen: AddPhoto,
    navigationOptions: {
      title: 'Add Picture',
      tabBarIcon: ({ tintColor }) =>
        <Icon name='camera' size={30} color={tintColor} />
    }
  },
  Profile: {
    name: 'Profile',
    screen: loginOrProfileRouter,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({ tintColor }) =>
        <Icon name='user' size={30} color={tintColor} />
    }
  }
}

const MenuConfig = {
  initialRouteName: 'Feed',
  tabBarOptions: {
    showLabel: false,
  }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

// export default createAppContainer(MenuNavigator)

const SplashRouter = createSwitchNavigator({
  Splash: Splash,
  App: MenuNavigator,
}, {
  initialRouteName: 'Splash'
})

export default createAppContainer(SplashRouter)