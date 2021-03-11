import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import MainComp from './src/components/MainComp';
import Routes from './src/Routes/Routes';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
