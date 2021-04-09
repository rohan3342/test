import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import messaging from '@react-native-firebase/messaging';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      message: undefined,
    };
  }

  setupCloudMessaging = async () => {
    const token = await messaging().getToken();
    console.log(token);

    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  componentDidMount() {
    this.setupCloudMessaging();

    messaging().onNotificationOpenedApp((message) => {
      console.log('onNotificationOpenedApp Running');
      this.setState({
        message: message.notification.body,
        title: message.notification.title,
      });
    });

    messaging().getInitialNotification().then((message) => {
      console.log('getInitialNotification Running');
      if (message) {
        this.setState({
          message: message.notification.body,
          title: message.notification.title,
        });
      }
    });

    messaging().onMessage(async (message) => {
      console.log('onMessage Running');
      this.setState({
        message: message.notification.body,
        title: message.notification.title,
      });
    });
  }

  render() {
    const { title, message } = this.state;
    return (
      <View style={styles.container}>
        { title === undefined ?
          (<Text style={styles.headerTxt}>Waiting For Message...</Text>) :
          (<Text style={styles.headerTxt}>Message From FCM</Text>)
        }
        <Text style={styles.headerTxt}>{title}</Text>
        <Text style={styles.txt}>{message}</Text>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
  },
  txt: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;
