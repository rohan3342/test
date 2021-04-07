import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes/Routes';

class App extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.statusColor} />
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusColor: {
    backgroundColor: '#91c788',
  },
});

export default App;
