import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
    return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  }
})
export default Home