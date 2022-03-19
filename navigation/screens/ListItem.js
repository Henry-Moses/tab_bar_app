import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';
import MusicPlayer from './MusicPlayer';
import TourScreen from './TourScreen';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  title: {},
});

export default  ({
  item: {
    imageUri,
    preview,
  }
}) => {
  const navigation = useNavigation()
return (
  <View style={styles.container}>
    <Image source={{ url: imageUri }} style={styles.image}/>
    <Text onPress={() => navigation.navigate('MusicPlayer')} style={styles.title}>{preview} </Text>
  </View>
)};
