import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  console.log(route.params);
  return(
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Home Screen</Text>
      <Text style={styles.usernameTxt}> Hello {route.params.userName}!</Text>

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.loginBtnTxt} > Logout</Text>
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
  headerTxt: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center'  
  },
  usernameTxt: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10
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
  },

});

export default HomeScreen;