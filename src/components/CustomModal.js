import React from 'react';
import { Modal, StyleSheet, View, Image } from 'react-native';
import { loading128 } from '../asset/index';
class CustomModal extends React.Component {
  render() {
    return (
      <View style={styles.centeredView}>
        <Modal animationType="fade" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <Image style={styles.imageResize} source={loading128} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  imageResize: {
    width: 100,
    height: 100,
  },
});

export default CustomModal;
