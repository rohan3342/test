import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, PermissionsAndroid, Alert, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { MapMarker } from '../asset/index';
class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      currentID: null,
    };
  }

  async componentDidMount() {
    const response =
      Platform.OS === 'ios'
        ? await this.hasLocationPermissionIOS()
        : await this.hasLocationPermissionAndroid();

    if (response) {
      let currentID = Geolocation.watchPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (_) => { },
        {
          accuracy: {
            android: 'high',
            ios: 'best',
          },
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
          forceRequestLocation: true,
          showLocationDialog: true,
          useSignificantChanges: true,
        },
      );
      this.storeID(currentID);
    }
  }

  storeID = (id) => this.setState({ currentID: id });

  componentWillUnmount() {
    Geolocation.clearWatch(this.state.currentID);
  }

  async hasLocationPermissionAndroid() {
    // Need to add IntentLauncher and DeviceInfo 
    if (Platform.OS === 'android' && Platform.Version < 23) return true;

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      Alert.alert('Location permission denied by user.', 'Permission Denied');
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      Alert.alert(
        'Location permission revoked by user.',
        'Never ask again selected',
      );
    }

    return false;
  }

  async hasLocationPermissionIOS() {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };

    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') return true;
    if (status === 'denied') Alert.alert('Location permission denied');
    if (status === 'disabled') {
      Alert.alert('Service Disabled', 'Location service is disabled', [
        { text: 'Go to Settings', style: 'default', onPress: openSetting },
        { text: "Don't Use Location", style: 'cancel', onPress: () => { } },
      ]);
    }
    return false;
  }

  render() {
    const { latitude, longitude } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          {longitude != null && (
            <MapView
              style={styles.mapView}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0920,
                longitudeDelta: 0.420,
              }}>
              <Marker
                coordinate={{ longitude, latitude }}
                image={MapMarker}
              />
            </MapView>
          )}
        </View>
        <View style={styles.coordContainer}>
          <Text style={styles.headerTxt}>Current Location</Text>
          <Text style={styles.txt}>{`${latitude}, \t ${longitude}`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#191919'
  },
  mapContainer: {
    borderRadius: 20,
    backgroundColor: '#ddd',
    height: '75%',
    width: '100%',
    backgroundColor: '#954B4D',
  },
  mapView: {
    backgroundColor: '#954B4D',
    borderRadius: 20,
    position: 'absolute',
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
  },
  coordContainer: {
    width: '80%',
    height: '15%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#954B4D',
    borderRadius: 20,
  },
  headerTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
  txt: {
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
  },
});


export default MapScreen;