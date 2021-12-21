import React from 'react'
import { createStackNavigator} from 'react-navigation';
import Login from './Login';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
               <Stack.Screen name="Login" component={Login}/> 
               <Stack.Screen name="Home" component={Home}/> 
            </Stack.Navigator>
      </NavigationContainer>
    )
}



