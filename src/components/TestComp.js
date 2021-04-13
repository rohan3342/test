import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Api } from 'renative';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.btnReference = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ]

  }

  moveToNextInput(index) {
    console.log('==========', this.btnReference[index]);
    console.log(`Index: ${index} Lenght: ${this.btnReference.length}`);
    if (index < this.btnReference.length - 1) {
      this.btnReference[index + 1].focus();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button,]}
          ref={reference => this.btnReference[0] = reference}
          activeOpacity={1.0}
          onFocus={() => this.moveToNextInput(0)}
        >
          <Text style={styles.btnTxt}>Button 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          ref={reference => this.btnReference[1] = reference}
          activeOpacity={1.0}
          onFocus={() => this.moveToNextInput(1)}
        >
          <Text style={styles.btnTxt}>Button 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          ref={reference => this.btnReference[2] = reference}
          activeOpacity={1.0}
          onFocus={() => this.moveToNextInput(2)}
        >
          <Text style={styles.btnTxt}>Button 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          ref={reference => this.btnReference[3] = reference}
          activeOpacity={1.0}
          onFocus={() => this.moveToNextInput(3)}
        >
          <Text style={styles.btnTxt}>Button 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 5,
  },
  btnActiveFocus: {
    borderColor: '#FFF',
  },
  btnInactiveFocus: {
    borderColor: 'transparent',
  },
  btnTxt: {
    color: '#FFF',
    fontSize: 20,
  }
})


export default Home;
