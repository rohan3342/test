import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComp from '../components/MainComp';
import SaveContentComp from '../components/SaveContentComp';

const Stack = createStackNavigator();

class Routes extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={MainComp}>
          <Stack.Screen
            options={{ headerTitle: 'Add To Clipboard' }}
            name={'MainComp'}
            component={MainComp}
          />
          <Stack.Screen
            options={{ headerTitle: 'Saved Clipboard Content' }}
            name={'ClipboardContent'}
            component={SaveContentComp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
