import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Rafael exemplo',
        email: 'teste@teste.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'John John',
            comment: 'Stunning'
          },
          {
            nickname: 'Maria Silva',
            comment: 'Legal hein!'
          }
        ]
      },
      {
        id: Math.random(),
        nickname: 'Rafael exemplo',
        email: 'teste@teste.com',
        image: require('../../assets/imgs/bw.jpg'),
        comments: []
      },
      {
        id: Math.random(),
        nickname: 'Rafael exemplo',
        email: 'teste@teste.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: []
      }
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList data={this.state.posts} 
          keyExtractor={item => `${item.id}`} 
          renderItem={({ item }) => 
            <Post key={item.id} {...item}/>} > 
        </FlatList>        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
  }
})

export default Feed