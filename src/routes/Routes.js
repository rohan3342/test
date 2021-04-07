import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddEmpScreen from '../screens/AddEmpScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        keyboardHandlingEnabled
        mode="modal"
        initialRouteName="AddEmpScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddEmpScreen" component={AddEmpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;