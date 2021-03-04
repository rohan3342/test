import React from 'react';
import { StyleSheet, SafeAreaView, Text,TouchableOpacity,View } from 'react-native';
import FetchData from './src/components/FetchData';
class App extends React.Component{

  state = {
    btnDisplay: 'flex',
    viewDisplay: 'none'
  }

  render(){

    let removeBtn = () => {
      this.setState({
        btnDisplay: 'none',
        viewDisplay: 'flex'
      });
    }

    return (
      <View style={styles.container}>
          <TouchableOpacity style={[styles.btn,{display: this.state.btnDisplay}]} onPress={()=> removeBtn()}>
            <Text style={styles.btnText}>Fetch Data</Text>
          </TouchableOpacity>
          <View style={[styles.mainView,{display: this.state.viewDisplay}]}>
            <FetchData/>
          </View>
      </View>  
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edf6f9',
    flex: 1,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'75%'
  },
  btnText: {
    backgroundColor: '#1a759f',
    padding: 15,
    color: '#fff',
    fontSize: 25,
    borderColor: '#d9ed92',
    borderWidth: 2,
    borderRadius: 10
  },
});

export default App;
