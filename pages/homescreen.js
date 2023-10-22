
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Post from '../Components/Post';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Homescreen = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {

    fetch('https://workshop.elyasasmad.com/posts')
      .then((response) => response.json())
      .then((data) => {

        setPosts(data)
      })

  }, [])
 
    return (
      <View style={styles.container}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (<Post
            likes={item.data.likes}
            comments={item.data.comments}
            reposts={item.data.reposts}
            name={item.name}
            username={item.username}
            photoURL={item.photoURL}
          >
            {item.content}
          </Post>)}
          keyExtractor={(item) => item.id}
        />
  
        {/* <Text> WELCOME TO MY PROFILE! </Text>
        { <Post likes={45} comments={50} reposts={100}>
  
        </Post> }
        <StatusBar style="auto" /> */}
      </View>
    );
     
  
}

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',//x axis
    justifyContent: 'center',
    paddingTop:48
  },
});

