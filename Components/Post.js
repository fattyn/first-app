import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Post = (props) => {
  return (
    <View style={styles.container}>

      <View>
        <Image

          style={styles.image}
          source={props.photoURL}
          contentFit="cover"
          transition={1000}
        />
      </View>


      <View style={{ flex: 1}}>
        <View style={styles.topheader}>
          <Text style={[styles.headerText, styles.bold]}>{props.name}</Text>
          <Text style={[styles.headerText, styles.gray]}>{props.username}</Text>
          <Text style={[styles.headerText, styles.gray]}>{props.createdAt}</Text>
        </View>
        <Text style={{ fontSize: 16}}>
        {props.children}
        </Text>
        <View style = {styles.postAction}>
        <TouchableOpacity style = {styles.button}>
          
          <FontAwesome name="comment-o" size={15} color="black" />
          <Text>
          {props.comments}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="retweet" size={18} color="black" />
          <Text>
          {props.reposts}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="hearto" size={15} color="black" />
          <Text>
          {props.likes}
          </Text>
        </TouchableOpacity>

      </View>

     
      </View>

    </View>
  );
}
// win + V

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15, //use for 
    marginRight: 8, //use for out of box

    backgroundColor: 'pink',
    height: 'auto',
    width: 350,
    borderRadius: 23,
    borderColor: 'white',
    borderWidth: 2,
    //justifycontent: for x axis left to right
    //alignItem for y axis


  },

  image: {

    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 8,
  },

  topheader: {
    flexDirection: "row",
    // flex: 0,
  },

  headerText: {
    marginRight: 4,
  },

  bold: {
    fontWeight: 'bold',
  },

  gray: {
    color: 'gray',
  },
  postAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },

  button: {
    flexDirection: 'row',
    alignItem: 'center',
  }
  


})
export default Post;
