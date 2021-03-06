import React from 'react';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

class TabComp extends React.Component{
  render() {
    return(
      <Tabs.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 20 },
          tabStyle: { marginBottom: 10 },
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }} 
        initialRouteName={'Login'}>
        <Tabs.Screen
          options={{headerTitle: 'Login'}} 
          name={"Login"} 
          component={LoginScreen} />
        <Tabs.Screen
          name={"Home"} 
          component={HomeScreen} />
      </Tabs.Navigator>
    )
  }
}

export default TabComp;