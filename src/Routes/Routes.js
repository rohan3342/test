import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';

const Stack = createStackNavigator();

class Routes extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen
            options={{ headerTitle: 'Login' }}
            name={'ClipboardContent'}
            component={Login}
          />
          <Stack.Screen
            options={{ headerTitle: 'Home' }}
            name={'Home'}
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
