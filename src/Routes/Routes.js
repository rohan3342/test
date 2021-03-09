import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Category, MyCart, Account, Wishlist } from '../screens/index';
import { home, person, list, cart,Heart } from '../asset/index';

const Tabs = createBottomTabNavigator();

const Routes = ({ }) => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                tabBarOptions={{
                    style: {height: 100},
                    labelStyle: { fontSize: 14 },
                    tabStyle: { marginBottom: 10 },
                    activeTintColor: 'green',
                    inactiveTintColor: 'gray',
                  }} 
                  initialRouteName={Home}>

                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Image style={[styles.icon ,styles.activeTab]} source={home} />
                                :
                                <Image style={[styles.icon ,styles.inactiveTab]} source={home} />
                            )
                    }}
                    name="Home"
                    // children={()=> <Home headerTitle="Home"/>}
                    component = {Home}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Image style={[styles.icon ,styles.activeTab]} source={list} />
                                :
                                <Image style={[styles.icon ,styles.inactiveTab]} source={list} />
                            )
                    }}
                    name = "Category"
                    component = {Category}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Image style={[styles.icon ,styles.activeTab]} source={cart} />
                                :
                                <Image style={[styles.icon ,styles.inactiveTab]} source={cart} />
                            )
                    }}
                    name = "MyCart"
                    component = {MyCart}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Image style={[styles.icon ,styles.activeTab]} source={Heart} />
                                :
                                <Image style={[styles.icon ,styles.inactiveTab]} source={Heart} />
                            )
                    }}
                    name = "Wishlist"
                    component = {Wishlist}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Image style={[styles.icon ,styles.activeTab]} source={person} />
                                :
                                <Image style={[styles.icon ,styles.inactiveTab]} source={person} />
                            )
                    }}
                    name = "Account"
                    component = {Account}
                />
            </Tabs.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    icon: {
        height: 40,
        width: 40,
    },
    activeTab: {
        backgroundColor: 'lightgreen',
    },
    inactiveTab: {
        backgroundColor: 'pink',
    }
})

export default Routes;