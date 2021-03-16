import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../asset/index';

class Home extends Component {
  constructor({ props, navigation }) {
    super(props);
    this.navigation = navigation;
    this.state = {};
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    try {
      const userStatus = await AsyncStorage.getItem('userSignUpData');
      if (userStatus !== null) {
        console.log('Data Saved In Home', userStatus);
        this.setState(JSON.parse(userStatus));
      }
    } catch (error) {
      console.error(error);
    }
  };

  logout = async () => {
    try {
      await AsyncStorage.clear();
      this.navigation.reset({
        index: 0,
        routes: [{ name: 'SignUp' }],
      });
    } catch (error) {
      console.error(error);
    }
  };

  wantToLogout() {
    Alert.alert('Log Out', 'Are you sure you want to clear your data ?', [
      {
        text: 'No',
        style: 'cancel',
        onPress: () => null,
      },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => this.logout(),
      },
    ]);
  }

  render() {
    const { uname, email, phone } = this.state;
    return (
      <View style={styles.MainWrapper}>
        <View style={styles.BGAnimation} />
        <View style={styles.logoutBtnWrapper}>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => this.wantToLogout()}>
            <Text style={styles.logoutBtnTxt}>Logout</Text>
            <Image style={styles.logoutBtnImg} source={logout} />
          </TouchableOpacity>
        </View>
        <View style={styles.userInfoView}>
          <View style={styles.userInfoTxtWrapper}>
            <Text style={styles.userInfoTxt}>Name:</Text>
            <View style={styles.userInfoSubTxtWrapper}>
              <Text style={styles.userInfoSubTxt}>{uname}</Text>
            </View>
          </View>
          <View style={styles.userInfoTxtWrapper}>
            <Text style={styles.userInfoTxt}>Email:</Text>
            <View style={styles.userInfoSubTxtWrapper}>
              <Text style={styles.userInfoSubTxt}>{email}</Text>
            </View>
          </View>
          <View style={styles.userInfoTxtWrapper}>
            <Text style={styles.userInfoTxt}>Phone:</Text>
            <View style={styles.userInfoSubTxtWrapper}>
              <Text style={styles.userInfoSubTxt}>{phone}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainWrapper: {
    flex: 1,
    backgroundColor: '#eee',
  },
  BGAnimation: {
    backgroundColor: '#0A52CE',
    position: 'absolute',
    height: 400,
    width: 400,
    borderRadius: 200,
    right: -300,
    bottom: -120,
    opacity: 0.7,
  },
  logoutBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    paddingHorizontal: 20,
  },
  logoutBtn: {
    width: 130,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#2968CD',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  logoutBtnTxt: {
    fontSize: 20,
    color: '#2968CD',
  },
  logoutBtnImg: {
    width: 30,
    height: 30,
  },
  userInfoView: {
    height: 200,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    borderRadius: 20,
    backgroundColor: '#fafafa',
    ...Platform.select({
      ios: {
        shadowColor: '#2968CD',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  userInfoTxtWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoTxt: {
    fontSize: 20,
    fontWeight: '300',
    color: '#2968CD',
  },
  userInfoSubTxtWrapper: {
    paddingLeft: 20,
  },
  userInfoSubTxt: {
    fontSize: 20,
    color: '#555',
  },
});

export default Home;
