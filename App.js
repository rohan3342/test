import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import OnBoarding from './src/components/OnBoarding';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <OnBoarding />;
  }
}

export default App;
