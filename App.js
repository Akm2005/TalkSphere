import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import Home from './src/Home';
import Login from './src/Login';
import Register from './src/Register';
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{headerShown:true}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:true}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:true}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App