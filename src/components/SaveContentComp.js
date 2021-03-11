import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class SaveContentComp extends React.Component {
  constructor({ props, navigation, route }) {
    super(props);
    this.navigation = navigation;
    this.state = { clipText: route.params.clipText };
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.textHeading}>Clipboard Content</Text>
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
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
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
