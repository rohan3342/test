import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Drag from './src/components/Drag';
import MapScreen from './src/Screens/MapScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapScreen />
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
