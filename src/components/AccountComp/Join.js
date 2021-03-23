import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { facebook, apple, google, usaFlag } from '../../asset/index';

class Join extends Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder="First Name" />
          <TextInput style={styles.textInput} placeholder="Last Name" />
          <TextInput style={styles.textInput} placeholder="Your Email" />

          <View style={styles.passwordWrapper}>
            <TextInput style={styles.passtextInput} placeholder="Password" />
            <Text style={styles.passTxt}>Show</Text>
          </View>
          <View style={styles.countryCodeView}>
            <Image style={styles.countryCodeImg} source={usaFlag} />
            <TextInput placeholder="+1  |  123 123 1234" />
          </View>

          <View style={styles.genderView}>
            <View style={styles.genderTypeView}>
              <CheckBox
                onCheckColor={'black'}
                tintColor={'rgb(255,223,96)'}
                onFillColor={'rgb(255,223,96)'}
                onTintColor={'rgb(255,223,96)'}
                style={styles.checkBox}
              />
              <Text style={styles.genderTxt}>Male</Text>
            </View>
            <View style={styles.genderTypeView}>
              <CheckBox
                onCheckColor={'black'}
                tintColor={'rgb(255,223,96)'}
                onFillColor={'rgb(255,223,96)'}
                onTintColor={'rgb(255,223,96)'}
                style={styles.checkBox}
              />
              <Text style={styles.genderTxt}>Female</Text>
            </View>
          </View>

          <View style={styles.acceptPolicyView}>
            <CheckBox
              onCheckColor={'black'}
              tintColor={'rgb(255,223,96)'}
              onFillColor={'rgb(255,223,96)'}
              onTintColor={'rgb(255,223,96)'}
              boxType={'square'}
              style={styles.checkBox}
            />
            <Text style={styles.acceptPolicyTxt}>
              Be the first to know about arrivals,sales & promos by submitting
              your email You can optout anytime
            </Text>
          </View>

          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.btnTxt}>Join Now</Text>
          </TouchableOpacity>

          <View style={styles.orView}>
            <Text style={styles.orViewTxt}>or</Text>
          </View>

          <View style={styles.autoLoginBtnWrapper}>
            <TouchableOpacity style={[styles.autoLoginBtn, styles.googleBtn]}>
              <Image source={google} style={styles.autoLoginBtnImg} />
              <Text style={styles.googleText}>Join With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.autoLoginBtn, styles.faceBookBtn]}>
              <View style={styles.faceBookBtnWrapper}>
                <Image source={facebook} style={styles.autoLoginBtnImg} />
              </View>
              <Text style={styles.autoLoginBtnTxt}>Join With Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.autoLoginBtn, styles.appleBtn]}>
              <Image source={apple} style={styles.autoLoginBtnImg} />
              <Text style={styles.autoLoginBtnTxt}>Join With Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: '50%',
    marginTop: 40,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#D3D3D3',
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
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  passtextInput: {
    width: '90%',
  },
  passTxt: {
    color: '#222',
  },
  btnView: {
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    width: '95%',
    height: '7%',
    marginTop: 20,
  },
  btnTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  countryCodeView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    width: '90%',
    marginVertical: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  countryCodeImg: {
    marginRight: 10,
    width: 25,
    height: 25,
  },
  genderView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  genderTypeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 100,
  },
  genderTxt: {
    fontSize: 16,
  },
  checkBox: {
    width: 20,
    height: 20,
  },
  acceptPolicyView: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  acceptPolicyTxt: {
    fontSize: 14,
    marginLeft: 8,
  },
  orView: {
    alignItems: 'center',
    alignContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginVertical: 20,
  },
  orViewTxt: {
    color: '#333',
    textTransform: 'uppercase',
  },
  autoLoginBtnWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  autoLoginBtn: {
    height: 50,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  autoLoginBtnImg: {
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
  autoLoginBtnTxt: {
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
});

export default Join;
