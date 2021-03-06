import React from 'react';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class StackComp extends React.Component {
    render() {
        return(
            <Stack.Navigator initialRouteName={'Login'}>
              <Stack.Screen 
                options={{headerTitle: 'Login In'}} 
                name={"Login"} 
                component={LoginScreen} />
              <Stack.Screen
                options={
                  ({ route }) => ({title: route.params.userName})
                 } 
                name={"Home"} 
                component={HomeScreen} />
            </Stack.Navigator>
          )
  }
}

export default StackComp;