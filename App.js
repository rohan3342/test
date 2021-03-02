import React from 'react';
import { StyleSheet,Text,View, SafeAreaView, Button } from 'react-native';
class App extends React.Component{
  render(){
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.header}>
            <Text style= {styles.headerTextSize2x} >Hello</Text>
            <Text style= {styles.headerText}>Sign in to your account</Text>
        </View>

        <View style={styles.mainContainer}>
            <Text style={styles.email}>Email</Text>
            <Text style={styles.password}>Password</Text>
            <Text style={styles.forgot}>Forgot Your Password?</Text>
        </View>

        <View style={styles.footer}>
            <Text style={styles.button}> SIGN IN</Text>
            <Text style={styles.create}>Don't have account? Create.</Text>
        </View> */}
        <View style={{backgroundColor: 'grey', height: 200,
          width:'80%', marginTop: 100, marginHorizontal: 20, alignSelf: 'center', 
          borderRadius: 10 }}>

          <View style={{backgroundColor: 'red', height: 100,
            width:100, borderRadius: 50, position: 'absolute', top: -50, left: 0 }}>
            </View>
          <View style={{backgroundColor: 'yellow', height: 100,
            width:100, borderRadius: 50, position: 'absolute', top: 5, left: 50 }}>
            </View>
          <View style={{backgroundColor: 'pink', height: 100,
            width:100, borderRadius: 50, position: 'absolute', top: 5, left: 100 }}>
            </View>

        </View>

      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#FFFFFF',
  },

  header: {
    flex:2,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#3365FB',
  },

  headerText: {
    color: '#CFF2FE'
  },

  headerTextSize2x:{
    color: '#CFF2FE',
    fontSize:30
  },

  mainContainer: {
    flex: 3,
    justifyContent:'flex-start',
    alignItems: 'center'
  },
  email: {
    fontSize:18,
    color:'#C1C2C7',
    marginTop:20,
    alignSelf: 'stretch',
    marginHorizontal: 10,
    paddingVertical:8,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius:5,
    borderColor: '#C1C2C7'
  },
  password: {
    fontSize:18,
    color: '#C1C2C7',
    marginTop:20,
    alignSelf: 'stretch',
    marginHorizontal: 10,
    paddingVertical:8,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius:5,
    borderColor: '#C1C2C7'
  },
  forgot: {
    color: '#C1C2C7',
    marginTop:10,
    paddingRight: 20,
    alignSelf:'stretch',
    textAlign:'right'
  },

  footer: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'center'
  },

  button: {
    flex:1,
    color: '#CFF2FE',
    alignSelf:'stretch',
    textAlignVertical:'center',
    textAlign:'center',
    fontSize: 20,
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius:5,
    borderColor: '#3365FB',
    backgroundColor: '#3365FB'
  },
  create: {
    flex:1,
    marginTop:10,
    paddingRight: 20,
    alignSelf:'stretch',
    textAlign:'center',
    color: '#C1C2C7'
  }
});

export default App;
