import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  iosClientId:
    '976369966635-bs9ahhdl0lm4l3nfe08u5081skr6354a.apps.googleusercontent.com',
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      isUserLoggedIn: false,
    };
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo, isUserLoggedIn: true });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('signIn: SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('signIn: IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('signIn: PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.log('signIn :', error);
      }
    }
  };

  /* getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('isSignedIn: SIGN_IN_SILENTLY');
      this.setState({ userInfo, isUserLoggedIn: true });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('getCurrentUserInfo: USER_HAS_NOT_SIGNED_IN_YET');
      } else {
        console.log('getCurrentUserInfo: ', error);
      }
    }
  }; */

  /* isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log('isSignedIn(): IS_SIGNED_IN');
    this.setState({ isLoginScreenPresented: !isSignedIn });
  }; */

  /* getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    console.log('getCurrentUser(): GET_CURRENT_USER');
    this.setState({ currentUser });
  }; */

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('signOut(): REVOKE_ACCESS \nsignOut: SIGN_OUT');
      this.setState({ userInfo: null, isUserLoggedIn: false });
    } catch (error) {
      console.log('signOut(): ', error);
    }
  };

  /*revokeAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
      console.log('deleted');
      console.log('revokeAccess(): REVOKE_ACCESS');

    } catch (error) {
      console.log('revokeAccess(): ', error);
    }
  }; */

  render() {
    const { isUserLoggedIn, userInfo } = this.state;
    console.log(isUserLoggedIn, userInfo);
    return (
      <SafeAreaView style={styles.containerWrapper}>
        <View
          style={[styles.container, isUserLoggedIn && styles.logedInContainer]}>
          {isUserLoggedIn ? (
            <ProfileCardComp signOut={this.signOut} userData={userInfo.user} />
          ) : (
            <>
              <Text style={styles.headerTxt}>Google Login Integration</Text>
              <GoogleSigninButton
                style={styles.GoogleSigninBtn}
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Light}
                onPress={this.signIn}
              />
            </>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const ProfileCardComp = ({ userData, signOut }) => {
  const { name, email, photo } = userData;
  return (
    <View style={styles.profileCardView}>
      <View style={styles.profileImageView}>
        <Image style={styles.profileImage} source={{ uri: photo }} />
      </View>
      <View style={styles.profileDataView}>
        <Text style={styles.profileTxt}>{name}</Text>
        <Text style={styles.profileTxt}>{email}</Text>
      </View>
      <TouchableOpacity onPress={signOut} style={styles.logoutView}>
        <Text style={[styles.profileTxt, styles.logoutTxt]}>Logout</Text>
        <Icon size={30} name="log-out-outline" color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#f4f9f4',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: '500',
    color: '#5c8d89',
  },
  GoogleSigninBtn: {
    marginTop: 50,
    ...Platform.select({
      ios: {
        width: 110,
      },
      android: {
        width: 150,
      },
    }),
  },
  profileCardView: {
    width: '95%',
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#a7d7c5',
    borderRadius: 20,
  },
  profileImageView: {
    width: '35%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 30,
  },
  profileDataView: {
    width: '60%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  profileTxt: {
    color: '#272343',
    fontSize: 20,
    fontWeight: '600',
  },
  logoutView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 30,
    right: 30,
    backgroundColor: '#5c8d89',
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    width: 120,
  },
  logoutTxt: {
    color: 'white',
    fontWeight: '500',
  },
});

export default App;
