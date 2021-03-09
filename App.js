import React from 'react';
import { Text,SafeAreaView,StyleSheet } from 'react-native';
import Routes from './src/Routes/Routes'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Routes/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})

export default App;
