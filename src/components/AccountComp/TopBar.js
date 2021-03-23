import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { profileActive } from '../../asset/index';
class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <Text style={styles.headerTxt}>Welcome!</Text>

          <View style={styles.btnView}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.border} />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Join</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.rightcontainer}>
          <Image source={profileActive} style={styles.img} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,223,96,0.15)',
    paddingVertical: 10,
    borderRadius: 10,
  },
  border: {
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  btnTxt: {
    textTransform: 'uppercase',
    fontSize: 12,
  },
  rightcontainer: {
    backgroundColor: 'rgba(255,223,96,0.15)',
    padding: 15,
    borderRadius: 50,
    alignSelf: 'center',
    borderColor: 'rgb(255,223,96)',
    borderWidth: 1,
  },
  img: {
    height: 35,
    width: 35,
  },
  btn: {
    marginHorizontal: 10,
  },
});
export default TopBar;
