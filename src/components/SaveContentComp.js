import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

class SaveContentComp extends React.Component {
  constructor({ props, navigation }) {
    super(props);
    this.navigation = navigation;
    this.state = { clipText: '' };
  }

  getClipBoardData = async () => {
    let data = await Clipboard.getString('');
    this.setState({ clipText: data });
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.getClipBoardData()}>
            <Text style={styles.textHeading}>Clipboard Content</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.state.clipText}</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => this.navigation.goBack()}>
            <Text style={styles.btnTxt}>Back</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeading: {
    fontSize: 24,
  },
  btn: {
    width: '80%',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    width: '80%',
    height: 60,
    marginVertical: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  btnView: {
    flex: 1,
    marginHorizontal: '5%',
    marginBottom: 20,
  },
  nextBtn: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  btnTxt: {
    fontSize: 20,
  },
});

export default SaveContentComp;
