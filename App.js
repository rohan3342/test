import React from 'react';
import { StyleSheet,Text,View, SafeAreaView } from 'react-native';
class App extends React.Component{
  render(){
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.textOne}> One </Text>
          <Text style={styles.textTwo}> Two </Text>
          <Text style={styles.textThree}> Three </Text>
          <Text style={styles.textFour}> Four </Text>
        </View> 
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection:'column',
    backgroundColor: '#ddd',
  },
  textOne: {
    padding:10, backgroundColor: 'yellow'
  },
  textTwo: {
    padding:10, backgroundColor: 'orange'
  },
  textThree: {
    padding:10, backgroundColor: 'red'
  },
  textFour: {
    padding:10, backgroundColor: 'coral'
  }
});

export default App;
