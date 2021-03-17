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
      markers: [
        {
          title: 'Haryana',
          coordinates: {
            latitude: 29.0588,
            longitude: 76.0856,
          },
        },
        {
          title: 'Lucknow',
          coordinates: {
            latitude: 26.8467,
            longitude: 80.9462,
          },
        },
        {
          title: 'Jaipur',
          coordinates: {
            latitude: 26.9124,
            longitude: 75.7873,
          },
        },
        {
          title: 'Kasol',
          coordinates: {
            latitude: 32.01,
            longitude: 77.315,
          },
        },
        {
          title: 'Hyderabad',
          coordinates: {
            latitude: 17.385,
            longitude: 78.4867,
          },
        },
      ],
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

  handleRegionChange = (mapData) => {
    this.setState({
      latitude: mapData.latitude,
      longitude: mapData.longitude,
      mapData,
    });
  };

  render() {
    return (
      <Fragment>
        <MapView
          style={styles.mapView}
          region={this.state.mapData}
          onRegionChangeComplete={this.handleRegionChange}
          showsUserLocation={true}>
          <Marker
            pinColor={'green'}
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
            title="Current Location"
            onDragEnd={(e) => {
              console.log('dragEnd', e.nativeEvent.coordinate);
            }}
          />
          {this.state.markers.map((marker, index) => (
            <MapView.Marker
              pinColor={'red'}
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
            />
          ))}
        </MapView>
        <View style={styles.MainTxtContainer}>
          <View style={styles.currentLocView}>
            <Text>Current Location: </Text>
            <Text>
              {this.state.latitude} , {this.state.longitude}
            </Text>
          </View>
          <View>
            <Text>Multiple Markers List</Text>
            {this.state.markers.map((data, index) => {
              return (
                <View key={index} style={styles.currentLocView}>
                  <Text>{data.title}</Text>
                  <Text>
                    {data.coordinates.latitude} , {data.coordinates.longitude}
                  </Text>
                </View>
              );
            })}
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
