import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';
import { facebook, apple, google } from '../../asset/index';

class SignIn extends Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Email Address"
          />
          <View style={styles.passwordWrapper}>
            <TextInput style={styles.passtextInput} placeholder="Password" />
            <Text style={styles.passTxt}>Show</Text>
          </View>

          <Text>Forgot Password?</Text>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInBtnTxt}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.orView}>
            <Text style={styles.orViewTxt}>or</Text>
          </View>

          <TouchableOpacity style={[styles.AutoLoginBtn, styles.googleBtn]}>
            <Image source={google} style={styles.AutoLoginBtnImg} />
            <Text style={styles.googleText}>Join With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.AutoLoginBtn, styles.faceBookBtn]}>
            <View style={styles.faceBookBtnWrapper}>
              <Image source={facebook} style={styles.AutoLoginBtnImg} />
            </View>
            <Text style={styles.AutoLoginBtnTxt}>Join With Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.AutoLoginBtn, styles.appleBtn]}>
            <Image source={apple} style={styles.AutoLoginBtnImg} />
            <Text style={styles.AutoLoginBtnTxt}>Join With Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.join}>
            <Text style={styles.joinText}>Don't have an account? Join</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignSelf: 'center',
    margin: 40,
    width: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    height: 50,
    width: '90%',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  passtextInput: {
    width: '90%',
  },
  passTxt: {
    color: '#222',
  },
  signInBtn: {
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '10%',
    marginTop: 20,
  },
  signInBtnTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  orView: {
    alignItems: 'center',
    alignContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  orViewTxt: {
    color: '#333',
    textTransform: 'uppercase',
  },
  AutoLoginBtn: {
    height: 50,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  AutoLoginBtnImg: {
    width: 30,
    height: 30,
  },
  googleBtn: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  faceBookBtnWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  faceBookBtn: {
    backgroundColor: '#3b5998',
  },
  appleBtn: {
    backgroundColor: 'black',
  },
  AutoLoginBtnTxt: {
    color: 'white',
    padding: 5,
    marginLeft: 20,
    fontWeight: '500',
  },
  googleText: {
    padding: 5,
    marginLeft: 20,
    fontWeight: '500',
  },
  join: {
    backgroundColor: '#efefef',
    height: '10%',
    alignContent: 'center',
    justifyContent: 'center',
    width: '95%',
    marginTop: 30,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  joinText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default SignIn;
