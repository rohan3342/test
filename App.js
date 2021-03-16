import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Routes from './src/Routes/Routes';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Routes />
      </SafeAreaView>
    );
  }
}

export default App;
