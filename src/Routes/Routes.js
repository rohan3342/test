import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Category, MyCart, Account, Wishlist } from '../screens/index';

const Routes = ({ }) => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 16 },
                    tabStyle: { marginBottom: 10 },
                    activeTintColor: 'green',
                    inactiveTintColor: 'gray',
                  }} 
                  initialRouteName={Home}
            >
                <Tabs.Screen
                    options={{headerTitle: 'Login'}}
                    name="Home"
                    // children={()=> <Home headerTitle="Home"/>}
                    component = {Home}
                />
                <Tabs.Screen
                    name = "Category"
                    component = {Category}
                />
                <Tabs.Screen
                    name = "MyCart"
                    component = {MyCart}
                />
                <Tabs.Screen
                    name = "Wishlist"
                    component = {Wishlist}
                />
                <Tabs.Screen
                    name = "Account"
                    component = {Account}
                />
            </Tabs.Navigator>
        </NavigationContainer>
  );
}


const Tabs = createBottomTabNavigator();


export default Routes;