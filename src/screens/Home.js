import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBar from '../components/HomeComp/TopBar';
import Items from '../components/HomeComp/Items';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Men Clothings</Text>
        </View>
        <TopBar />
        <Items />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 5,
  },
});
export default Home;
