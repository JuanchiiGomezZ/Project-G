import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import First from '../screens/First'
import Register from '../screens/Register'
import LogIn from '../screens/LogIn'
import Home from '../screens/Home'
import Routines from '../screens/Routine'
import Profile from '../screens/Profile'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()
export const TabNavigation = () => {
  return (
    <Tab.Navigator
    initialRoutName="Home"
    screenOptions={{
      tabBarActiveTintColor:'white',
      tabBarInactiveTintColor:'rgba(159, 159, 159, 1)',
      tabBarShowLabel:false,
      tabBarActiveBackgroundColor:'#48494b',
      tabBarInactiveBackgroundColor:'#2b2b2e',
      headerShown:false
    }}>
      <Tab.Screen name="Routines" component={Routines} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name="stats-chart" size={25} color={color} />)}}/>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color, size}) => (
        <FontAwesome5 name="dumbbell" size={25} color={color} />)}}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name="person-circle" size={30} color={color} />)}}  />
    </Tab.Navigator>
  );
};


const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown:false}}
        /* initialRouteName='First' */>
{/*             <Stack.Screen
            name='First'
            component={First}/>
            <Stack.Screen
            name='Register'
            component={Register}/>
            <Stack.Screen
            name='LogIn'
            component={LogIn}/> */}
            <Stack.Screen
            name='Home'
            component={TabNavigation}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}



export default MainStack; 