import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';

import ListItem from '../screens/ListItem';
import Separator from './Separator';

export default ({ items, onEndReached, navigation }) => (
  <FlatList
    data={items}
    renderItem={({ item }) => <ListItem item={item} navigation={navigation}/>}
    keyExtractor={item => item.id}
    navigation={navigation}
    ItemSeparatorComponent={() => <Separator />}
    onEndReached={onEndReached}
    ListEmptyComponent={() => <Text>No songs.</Text>}
  />
);