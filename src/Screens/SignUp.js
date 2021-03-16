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
    placeholder: 'Username',
    imgActive: accActive,
    imgInactive: accInactive,
  },
  {
    id: 2,
    placeholder: 'Email',
    imgActive: mailActive,
    imgInactive: mailInactive,
  },
  {
    id: 3,
    placeholder: 'Phone',
    imgActive: phoneActive,
    imgInactive: phoneInactive,
  },
  {
    id: 4,
    placeholder: 'Password',
    imgActive: lockActive,
    imgInactive: lockInactive,
  },
  {
    id: 5,
    placeholder: 'Confirm Password',
    imgActive: lockActive,
    imgInactive: lockInactive,
  },
];

class SignUp extends Component {
  constructor({ props, navigation }) {
    super(props);
    this.navigation = navigation;
    this.state = {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleUserInput = (data, id) => {
    switch (id) {
      case 1:
        this.setState({ ...this.state, username: data });
        break;
      case 2:
        this.setState({ ...this.state, email: data });
        break;
      case 3:
        this.setState({ ...this.state, phone: data });
        break;
      case 4:
        this.setState({ ...this.state, password: data });
        break;
      case 5:
        this.setState({ ...this.state, confirmPassword: data });
        break;
    }
  };

  onCreateButtonPress = async () => {
    Keyboard.dismiss();

    await AsyncStorage.multiSet([
      ['username', this.state.username],
      ['email', this.state.email],
      ['phone', this.state.phone],
      ['password', this.state.password],
      ['confirmPassword', this.state.confirmPassword],
    ]);
    this.navigation.navigate('Home');
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
                  placeholder={data.placeholder}
                  imgActive={data.imgActive}
                  imgInactive={data.imgInactive}
                  getUserData={this.handleUserInput}
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
  },
  LogoView: {
    position: 'absolute',
    left: 20,
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
