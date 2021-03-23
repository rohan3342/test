import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../components/AccountComp/TopBar';
class Account extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar />
        <View style={styles.borderView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  borderView: {
    height: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
});
export default Account;
