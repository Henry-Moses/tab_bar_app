import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
//Screens
import TourScreen from './screens/TourScreen'
import MusicScreen from './screens/MusicScreen'
import SettingsScreen from './screens/SettingScreen'

//Screen names
const tourPage = 'Tour';
const musicPage = 'Music';
const settingsPage = 'Settings';
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
   <NavigationContainer>
       <Tab.Navigator
       initialRouteName={tourPage}
       screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
    let iconName;
    let rn = route.name;

    if (rn === tourPage) {
        iconName = focused ? 'home' : 'home-outline' 
    } else if (rn === musicPage){
        iconName = focused ? 'list' : 'list-outline' 
    } else if (rn === settingsPage){
        iconName = focused ? 'list' : 'settings-outline' 
   }
        return <Ionicons name={iconName} size={size} color={color}/>

},

})}
tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'grey',
    labelStyle: { paddingBottom: 10, fontSize: 10 },
    styles: {padding: 10, height: 70}
}}


>
    <Tab.Screen name={tourPage} component={TourScreen}/>
    <Tab.Screen name={musicPage} component={MusicScreen}/>
    <Tab.Screen name={settingsPage} component={SettingsScreen}/>

       

       </Tab.Navigator>
   </NavigationContainer>
  )
}

