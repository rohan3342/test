import React from 'react';
import { Text,View, Button } from 'react-native';
import Counter from './components/Counter';

class App extends React.Component{

  constructor(props){
    super(props);
    console.log('Parent Log : Parent Constructor Initiated!');
  }

  state = {counter: 0}
  
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidMount(){
    console.log('Parent Log : Parent Component Mounted!');
  }

  componentDidUpdate(prevState){
    if(this.state.counter !== prevState.counter){
      console.log('Parent Log : Parent State Updated');
    }
  }


  render(){
    console.log('Parent Log : Parent Render Method Running!');
    return (
      <View style={{justifyContent: 'center', alignItems:'center', padding:20}}>
        <Button onPress={this.increment}
        title ="Counter ++">
          </Button>
        <Counter counter = {this.state.counter}/>
      </View>  
    );
  }
};

export default App;
