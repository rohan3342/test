import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ContactComp from './src/components/ContactComp';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent={true} />
        <ContactComp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
