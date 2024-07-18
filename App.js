import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import Home from './src/Home';
import Login from './src/Login';
import Register from './src/Register';
import Date from './src/Date';
import Story from './src/Story';
import Call from './src/Call';
import Group from './src/Group';
// ./gradlew assembleRelease
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
          <Stack.Screen name="Date" component={Date} options={{headerShown:true}}/>
          <Stack.Screen name="Story" component={Story} options={{headerShown:true}}/>
          <Stack.Screen name="Call" component={Call} options={{headerShown:true}}/>
          <Stack.Screen name="Group" component={Group} options={{headerShown:true}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App