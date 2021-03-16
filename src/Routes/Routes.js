import React, { Component, Fragment } from 'react';
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
    this.getUserData = this.getUserData.bind();
  }
  componentDidMount() {
    this.getUserData();
  }
  getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userSignUpData');
      console.log(userData);
      if (userData !== null) {
        this.setState(JSON.parse(userData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    console.log('===>', this.state.uname);
    const { uname } = this.state;

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!(uname === undefined) ? (
            <Fragment>
              {console.log('Uname Not Null')}
              <Stack.Screen name={'Home'} component={Home} />
              <Stack.Screen name={'SignUp'} component={SignUp} />
            </Fragment>
          ) : (
            <Fragment>
              {console.log('Uname Null')}
              <Stack.Screen name={'SignUp'} component={SignUp} />
              <Stack.Screen name={'Home'} component={Home} />
            </Fragment>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
