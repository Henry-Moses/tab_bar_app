import React, { Component } from 'react';

import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { firebase } from '../../Firebase/firebase';


class FetchListScreen extends Component {

    constructor() {
        super();
        this.docs = firebase.firestore().collection('tourDates');
        this.state = {
          isLoading: true,
          students: []
        };
      }
    
      componentDidMount() {
        this.unsubscribe = this.docs.onSnapshot(this.getStudentsData);
      }
    
      componentWillUnmount(){
        this.unsubscribe();
      }
    
      getTourData = (querySnapshot) => {
        const tourDates = [];
        querySnapshot.forEach((res) => {
          const { name, designation } = res.data();
          tourDates.push({
            key: res.id,
            Date,
            location
          });
        });
        this.setState({
          tourDates,
          isLoading: false
       });
      }
    
    
    
      render() {
        if(this.state.isLoading){
          return(
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="red"/>
            </View>
          )
        }    
        return (
          <ScrollView style={styles.wrapper}>
              {
                this.state.tourDates.map((res, i) => {
                  return (
                    <ListItem 
                       key={i}           
                       bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title>{res.name}</ListItem.Title>
                        <ListItem.Subtitle>{res.designation}</ListItem.Subtitle>
                      </ListItem.Content>
                      <ListItem.Chevron 
                         color="black" 
                      />
                    </ListItem>
                  );
                })
              }
          </ScrollView>
        );
      }
    }
    
    const styles = StyleSheet.create({
      wrapper: {
       flex: 1,
       paddingBottom: 22
      },
      loader: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',    
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }
    })

export default FetchListScreen;