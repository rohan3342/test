import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  accActive,
  accInactive,
  lockActive,
  lockInactive,
  logo,
  mailActive,
  mailInactive,
  phoneActive,
  phoneInactive,
} from '../asset/index';
import CustomTextInput from '../components/CustomTextInput';

const CustomTextInputJSON = [
  {
    id: 1,
    name: 'uname',
    placeholder: 'Username',
    imgActive: accActive,
    imgInactive: accInactive,
    keyboardType: 'default',
  },
  {
    id: 2,
    name: 'email',
    placeholder: 'Email',
    imgActive: mailActive,
    imgInactive: mailInactive,
    keyboardType: 'email-address',
  },
  {
    id: 3,
    name: 'phone',
    placeholder: 'Phone',
    imgActive: phoneActive,
    imgInactive: phoneInactive,
    keyboardType: 'number-pad',
  },
  {
    id: 4,
    name: 'password',
    placeholder: 'Password',
    imgActive: lockActive,
    imgInactive: lockInactive,
    keyboardType: 'default',
  },
  {
    id: 5,
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    imgActive: lockActive,
    imgInactive: lockInactive,
    keyboardType: 'default',
  },
];

class SignUp extends Component {
  constructor({ props, navigation }) {
    super(props);
    this.navigation = navigation;
    this.state = {};
  }

  handleUserInput = (data, name) => {
    this.setState({ [name]: data });
  };

  handleFocusedTextInput = (name) => {
    this.setState({ focusedTextInput: name });
  };

  onCreateButtonPress = async () => {
    Keyboard.dismiss();
    try {
      const userData = this.state;
      await AsyncStorage.setItem('userSignUpData', JSON.stringify(userData));
      this.navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.MainWrapper}>
        <View style={styles.BGAnimation} />
        <View style={styles.FormView}>
          <View style={styles.LogoView}>
            <Image source={logo} style={styles.Logo} />
          </View>
          <Text style={styles.HeaderTxt}>Let's Get Started!</Text>
          <Text style={styles.HeaderSubTxt}>
            Create an account to Q Allure to get all feature.
          </Text>
          <View style={styles.CustomTextInputWrapper}>
            {CustomTextInputJSON.map((data) => {
              return (
                <CustomTextInput
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  imgActive={data.imgActive}
                  imgInactive={data.imgInactive}
                  placeholder={data.placeholder}
                  keyboardType={data.keyboardType}
                  getUserData={this.handleUserInput}
                  focusedTextInput={this.handleFocusedTextInput}
                  CurrentfocusedTextInput={this.state.focusedTextInput}
                />
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.onCreateButtonPress()}>
            <Text style={styles.btnTxt}>Create</Text>
          </TouchableOpacity>
          <Text style={styles.endTxt}>
            <Text>Already have an account?</Text>
            <Text style={styles.colorTxt}> Login here</Text>
          </Text>
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
  LogoView: {
    position: 'absolute',
    left: 25,
    top: 20,
  },
  Logo: {
    width: 80,
    height: 80,
  },
  FormView: {
    height: '95%',
    width: '90%',
    margin: '5%',
    borderRadius: 20,
    backgroundColor: '#fafafa',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  HeaderTxt: {
    textAlign: 'center',
    marginTop: 120,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  HeaderSubTxt: {
    textAlign: 'center',
    fontSize: 14,
    color: 'grey',
  },
  CustomTextInputWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#0A52CE',
    borderRadius: 50,
    width: 150,
    paddingHorizontal: 30,
    paddingVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#0A52CE',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  btnTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  endTxt: {
    color: '#ccc',
    marginTop: 40,
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 16,
  },
  colorTxt: {
    color: '#2968CD',
    fontWeight: '500',
  },
});

export default SignUp;
