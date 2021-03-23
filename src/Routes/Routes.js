import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Category, MyCart, Account, Wishlist } from '../screens/index';
import {
  home,
  person,
  list,
  cart,
  Heart,
  HeartR,
  homeY,
  personY,
  cartY,
  listY,
} from '../asset/index';

const Tabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          style: { height: '10%' },
          labelStyle: { fontSize: 14 },
          tabStyle: { marginBottom: 10 },
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
        }}
        initialRouteName={Home}>
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image style={styles.icon} source={homeY} />
              ) : (
                <Image style={styles.icon} source={home} />
              ),
          }}
          name="Home"
          component={Home}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image style={styles.icon} source={listY} />
              ) : (
                <Image style={styles.icon} source={list} />
              ),
          }}
          name="Category"
          component={Category}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image style={styles.icon} source={cartY} />
              ) : (
                <Image style={styles.icon} source={cart} />
              ),
          }}
          name="MyCart"
          component={MyCart}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image style={styles.icon} source={HeartR} />
              ) : (
                <Image style={styles.icon} source={Heart} />
              ),
          }}
          name="Wishlist"
          component={Wishlist}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image style={styles.icon} source={personY} />
              ) : (
                <Image style={styles.icon} source={person} />
              ),
          }}
          name="Account"
          component={Account}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
});

export default Routes;
