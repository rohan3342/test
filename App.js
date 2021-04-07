import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="home" size={100} color="green" />
        <Text style={styles.Icontxt}> Hello </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icontxt: {
    fontSize: 40,
    fontWeight: '600',
    color: 'green',
  },
});

export default App;
