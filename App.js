import React from 'react';
import { Text,View } from 'react-native';
import Counter from './components/Counter';

class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
          <Text> Hello! </Text>
      </View>  
    );
  }
};

export default App;
