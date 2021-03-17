import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      (error) => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );
  }

  render() {
    return (
      <Fragment>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}>
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
          />
        </MapView>
        <View style={styles.MainTxtContainer}>
          <View style={styles.currentLocView}>
            <Text>Current Location: </Text>
            <Text>
              {this.state.latitude} , {this.state.longitude}
            </Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
  MainTxtContainer: {
    paddingTop: 20,
    flex: 1,
  },
  currentLocView: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
});

export default MapScreen;
