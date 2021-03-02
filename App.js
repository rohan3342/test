import React from 'react';
import { StyleSheet,Text,View, SafeAreaView } from 'react-native';
class App extends React.Component{
  render(){
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.containerrow}>
          <Text style={styles.textOne}> One </Text>
          <Text style={styles.textTwo}> Two </Text>
          <Text style={styles.textThree}> Three </Text>
        </View> 
        
        <View style={styles.containercolumn}>
          <Text style={styles.textOne}> One </Text>
          <Text style={styles.textTwo}> Two </Text>
          <Text style={styles.textThree}> Three </Text>
        </View>

      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#ddd',
  },
  containerrow: {
    flex:1,
    flexDirection:'row',
  },
  containercolumn: {
    flex:1,
    flexDirection:'column',
  },
  textOne: {
    flex:1,
    padding:10, 
    backgroundColor: '#edeef7'
  },
  
  textTwo: { 
    flex:1,
    padding:10, 
    backgroundColor: '#ffefa1'
  },
  
  textThree: {
    flex:1, 
    padding:10, 
    backgroundColor: '#6ddccf'
  },
});

export default App;
