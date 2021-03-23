import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import { profileActive } from '../../asset/index';
import SignIn from './SignIn';
class TopBar extends Component {
  state = {
    isModalVisible: false,
    signIn: false,
    join: false,
  };

  setModalState = async (visible) => {
    this.setState({ isModalVisible: visible, signIn: true });
  };

  setSignState = async () => {
    this.setState({ ...this.state, signIn: true, join: false });
  };

  setJoinState = async () => {
    this.setState({ ...this.state, signIn: false, join: true });
  };
  render() {
    const { isModalVisible, signIn, join } = this.state;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.leftcontainer}>
            <Text style={styles.headerTxt}>Welcome!</Text>
            <TouchableOpacity
              onPress={() => this.setModalState(true)}
              style={styles.btnView}>
              <View style={styles.btn}>
                <Text style={styles.btnTxt}>Sign In</Text>
              </View>
              <View style={styles.border} />
              <View
                // onPress={() => this.customModal('SignUp')}
                style={styles.btn}>
                <Text style={styles.btnTxt}>Join</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rightcontainer}>
            <Image source={profileActive} style={styles.img} />
          </View>
        </View>

        <View style={styles.modalView}>
          <Modal animationType="fade" visible={isModalVisible}>
            <SafeAreaView>
              <TouchableOpacity
                style={styles.crossView}
                onPress={() => this.setModalState(!isModalVisible)}>
                <Text style={styles.crossViewTxt}>X</Text>
              </TouchableOpacity>
              <View style={styles.ModalBtnView}>
                <TouchableOpacity
                  onPress={() => this.setSignState()}
                  style={[
                    styles.ModalBtn,
                    signIn ? styles.activeModalBtn : null,
                  ]}>
                  <Text style={styles.ModalBtnTxt}>SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setJoinState()}
                  style={[
                    styles.ModalBtn,
                    join ? styles.activeModalBtn : null,
                  ]}>
                  <Text style={styles.ModalBtnTxt}>Join</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
            {signIn ? <SignIn /> : null}
          </Modal>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 15,
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
  modalView: {
    flex: 1,
  },
  crossView: {
    position: 'absolute',
    right: 10,
    top: 60,
    width: '5%',
  },
  crossViewTxt: {
    fontSize: 16,
  },
  ModalBtnView: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ModalBtn: {
    paddingBottom: 10,
  },
  activeModalBtn: {
    borderBottomColor: 'yellow',
    borderBottomWidth: 4,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  ModalBtnTxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
export default TopBar;
