import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Drag from './src/components/Drag';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Drag />
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
