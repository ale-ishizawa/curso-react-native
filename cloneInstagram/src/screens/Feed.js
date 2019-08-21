import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import Header from '../components/Header';
import Post from '../components/Post';
import { fetchPosts } from '../store/actions/posts'

//Import para o Redux
import { connect } from 'react-redux'

class Feed extends Component {  
  componentDidMount = () => {
    this.props.onFetchPosts()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList data={this.props.posts} 
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

// export default Feed

const mapStateToProps = ({ posts }) => {
  return {    
    posts: posts.posts //.posts=>mesmo nome que esta no storeConfig e no reducer
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)