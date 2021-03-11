import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  BackHandler,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

class MainComp extends Component {
  constructor({ props, navigation }) {
    super(props);
    this.navigation = navigation;
    this.state = {
      inputText: '',
    };
  }

  backAction = () => {
    Alert.alert('Confirm Exit', 'Are you sure you want to exit the app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => BackHandler.exitApp(),
        style: 'destructive',
      },
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  writeToClipboard = async () => {
    Clipboard.setString(this.state.inputText);
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Text style={styles.textHeading}>Add Content To Clipboard</Text>
            <TextInput
              placeholder={'Enter Text'}
              onChangeText={(value) => this.setState({ inputText: value })}
              style={styles.txtInput}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={this.writeToClipboard}>
              <Text style={styles.btnTxt}>Save Content</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() =>
              this.navigation.navigate('ClipboardContent', {
                clipText: this.state.inputText,
              })
            }>
            <Text style={styles.btnTxt}>Next</Text>
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
    alignItems: 'center',
  },
  textHeading: {
    fontSize: 24,
  },
  btn: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  txtInput: {
    marginVertical: 5,
    width: 200,
    height: 60,
    fontSize: 20,
  },
  btnView: {
    flex: 1,
    paddingLeft: '75%',
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

export default MainComp;
