import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [headTitle, setHeadTitle] = useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.screenText}>Login Screen</Text>
      
      <TextInput 
        placeholder="username" 
        style={styles.inputText}
        onChangeText={(userName) => setHeadTitle({userName})}
      />

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home', headTitle)}>
          <Text style={styles.loginBtnTxt} >Login</Text>
      </TouchableOpacity>
    </View>
  )   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#ddd'
  },
  screenText: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center'  
  },
  inputText: {
    marginVertical: 20,
    alignSelf: 'center',
    height: 50,
    fontSize:16,
    width: '40%',
    textAlign: 'center',
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    margin: 10

  },
  loginBtn: {
    alignSelf:'center',
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '40%'
  },
  loginBtnTxt: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default LoginScreen;