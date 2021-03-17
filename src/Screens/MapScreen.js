import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import { liveIcon } from '../asset/index';

class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: {
        latitude: 28.685744,
        longitude: 77.348578,
      },
      initialRegion: {
        latitude: 28.685744,
        longitude: 77.348578,
        longitudeDelta: 0.0241,
        latitudeDelta: 0.0341,
      },
      markerData: [
        {
          title: 'Dr Ram Manohar Lohia Park',
          coordinates: {
            latitude: 28.68395662717588,
            longitude: 77.349785602436,
          },
        },
        {
          title: 'City Forest',
          coordinates: {
            latitude: 28.69871479678513,
            longitude: 77.39171429547049,
          },
        },
        {
          title: 'Akshardham',
          coordinates: {
            latitude: 28.616355109191407,
            longitude: 77.27835310401775,
          },
        },
        {
          title: "Humayun's Tomb",
          coordinates: {
            latitude: 28.59676328282818,
            longitude: 77.24848402465896,
          },
        },
        {
          title: 'Qutub Minar',
          coordinates: {
            latitude: 28.530197831169442,
            longitude: 77.18590054102698,
          },
        },
        {
          title: 'India Gate',
          coordinates: {
            latitude: 28.613353992795616,
            longitude: 77.2289257985635,
          },
        },
        {
          title: 'D.A.V School',
          coordinates: {
            latitude: 28.685245994166635,
            longitude: 77.35089248977961,
          },
        },
        {
          title: 'Gurudwara',
          coordinates: {
            latitude: 28.530197831169442,
            longitude: 77.18590054102698,
          },
        },
      ],
    };
  }

  setLocation(event) {
    const currentLocation = event.nativeEvent.coordinate;
    this.setState({ currentLocation: { ...currentLocation } });
  }

  // zoomIn = async () => { };
  // zoomOut = async () => { };

  render() {
    const { latitude, longitude } = this.state.currentLocation;
    return (
      <Fragment>
        <MapView
          style={styles.mapView}
          showsUserLocation={true}
          initialRegion={this.state.initialRegion}>
          {this.state.markerData.map((marker, index) => (
            <Marker
              pinColor={'red'}
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
            />
          ))}
          <Marker
            image={liveIcon}
            draggable
            coordinate={this.state.currentLocation}
            onDragEnd={(event) => this.setLocation(event)}
          />
        </MapView>
        <View style={styles.MainTxtContainer}>
          {/* <View style={styles.zoomBtnWrapper}>
            <TouchableOpacity
              style={styles.zoomBtn}
              onPress={() => this.zoomIn()}>
              <Text style={styles.zoomBtnTxt}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.zoomBtn}
              onPress={() => this.zoomOut()}>
              <Text style={styles.zoomBtnTxt}>-</Text>
            </TouchableOpacity>
          </View> */}
          <Text style={styles.LocTxt}>Current Location: </Text>
          <View style={styles.currentLocView}>
            <Text style={styles.LocTxt}>Latitude: {latitude.toFixed(6)}</Text>
            <Text style={styles.LocTxt}>Longitude: {longitude.toFixed(6)}</Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    flex: 8,
  },
  MainTxtContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  LocTxt: {
    fontSize: 18,
    color: '#333',
  },
  zoomBtnWrapper: {
    height: 70,
    position: 'absolute',
    justifyContent: 'space-between',
    top: -80,
    right: 0,
  },
  zoomBtn: {
    backgroundColor: 'white',
    borderRadius: 5,
    opacity: 1,
    width: 30,
    height: 30,
  },
  zoomBtnTxt: {
    color: '#555',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MapScreen;
