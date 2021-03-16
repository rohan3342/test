import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.getData();
  }
  getData = async () => {
    const data = await AsyncStorage.multiGet(['username', 'email']);
    console.log(data);
  };
  render() {
    return (
      <View>
        <Text> Working </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({});

export default Home;
