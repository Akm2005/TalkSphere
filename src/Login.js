import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const handlelogin = ()=>{
      if(email&&password){
        console.log(email,password);
        navigation.navigate('Home');
      }else{
        Alert.alert('Warning','Enter Both Email And Password');
      }
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor='#888'
          value={email}
          onChangeText={(text)=>{setEmail(text)}}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          value={password}
          onChangeText={(text)=>{setPassword(text)}}
          placeholderTextColor='#888'
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handlelogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffccff',
  },
  loginContainer: {
    width: width * 0.8,
    maxWidth: 400,
    backgroundColor: '#ffe6ff',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: width > 400 ? 36 : 28,
    color: '#333',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  loginButton: {
    backgroundColor: '#f57df1',
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    color: '#333',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;
