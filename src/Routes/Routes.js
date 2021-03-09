import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Category, MyCart, Account, Wishlist } from '../screens/index';
import { home, person, list, cart,Heart, HeartR, homeG, personG, cartG, listG } from '../asset/index';

const Tabs = createBottomTabNavigator();

const Routes = ({ }) => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                tabBarOptions={{
                    style: {height: 100},
                    labelStyle: { fontSize: 14 },
                    tabStyle: { marginBottom: 10 },
                    activeTintColor: '#000',
                    inactiveTintColor: 'gray',
                  }} 
                  initialRouteName={Home}>

                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Image style={styles.icon} source={homeG} />
                                :
                                <Image style={styles.icon} source={home} />
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
                                <Image style={styles.icon} source={listG} />
                                :
                                <Image style={styles.icon} source={list} />
                            )
                    }}
                    name = "Category"
                    component = {Category}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Image style={styles.icon} source={listG} />
                                :
                                <Image style={styles.icon} source={cart} />
                            )
                    }}
                    name = "MyCart"
                    component = {MyCart}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Image style={styles.icon} source={HeartR} />
                                :
                                <Image style={styles.icon} source={Heart} />
                            )
                    }}
                    name = "Wishlist"
                    component = {Wishlist}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Image style={styles.icon} source={personG} />
                                :
                                <Image style={styles.icon} source={person} />
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
    }
})

export default Routes;