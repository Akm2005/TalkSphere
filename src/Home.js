import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
    return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Date')}>
        <Text>Date</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gray',
    // minHeight:800
  },
  button:{
    width:300,
    backgroundColor:'#f57df1',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    height:50,
  }
})
export default Home