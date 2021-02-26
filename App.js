import React from 'react';
import { View, Text } from 'react-native';
import FunctionalComp from './components/FunctionalComp';

class App extends React.Component{

  state ={name: ['Rohan', 'Vibhor', 'Ayush']};

  // componentDidMount(){
  //   setTimeout(()=> {
  //     this.setState({
  //       name:['Rohan Singh', 'Vibhor Thakral', 'Aayush Meheta']
  //     });
  //   },5000)
  // }

  render(){
    return (
      <View style={{flex:1 , justifyContent: 'center', alignItems:'center'}}>
        <FunctionalComp style={{color: 'pink'}} onPress={(data) => {alert(data)}} name={this.state.name[0]}/>
        <FunctionalComp style={{color: 'blue'}} onPress={(data) => {alert(data)}} name={this.state.name[1]}/>
        <FunctionalComp style={{color: 'red'}} onPress={(data) => {alert(data)}} name={this.state.name[2]}/>
      </View>
    );
  }

};

export default App;
