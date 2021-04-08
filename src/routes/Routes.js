import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import AudioScreen from '../screens/AudioScreen';
import VideoScreen from '../screens/VideoScreen';
import MapScreen from '../screens/MapScreen';


const Tabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          style: { height: '10%' },
          labelStyle: { fontSize: 14 },
          tabStyle: { paddingVertical: 5, backgroundColor: '#191919' },
          activeTintColor: '#954B4D',
          inactiveTintColor: 'gray',
        }}
        initialRouteName={AudioScreen}>
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontistoIcon size={30} name="applemusic" color="#954B4D" />
              ) : (
                <FontistoIcon size={30} name="applemusic" color="grey" />
              ),
          }}
          name="Music"
          component={AudioScreen}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons size={35} name="ios-logo-youtube" color="#954B4D" />
              ) : (
                <Ionicons size={35} name="ios-logo-youtube" color="grey" />
              ),
          }}
          name="Video"
          component={VideoScreen}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons size={30} name="map-outline" color="#954B4D" />
              ) : (
                <Ionicons size={30} name="map-outline" color="grey" />
              ),
          }}
          name="Map"
          component={MapScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Routes;