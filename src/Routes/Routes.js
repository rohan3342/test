import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import SignUp from '../Screens/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getUserData();
  }
  getUserData = async () => {
    try {
      const userStatus = await AsyncStorage.getItem('userSignUpData');
      console.log(userStatus);
      if (userStatus !== null) {
        console.log(userStatus);
        this.setState(JSON.parse(userStatus));
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { uname } = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!uname === undefined ? (
            <>
              <Stack.Screen name={'SignUp'} component={SignUp} />
              <Stack.Screen name={'Home'} component={Home} />
            </>
          ) : (
            <>
              <Stack.Screen name={'Home'} component={Home} />
              <Stack.Screen name={'SignUp'} component={SignUp} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
