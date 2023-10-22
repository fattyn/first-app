import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Post from './Components/Post';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import homescreen from './pages/homescreen';
import Contentscreen from './pages/Contentscreen';
import {NavigationContainer} from "@react-navigation/native"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={homescreen} />
      <Stack.Screen name="Content" component={Contentscreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );


}


