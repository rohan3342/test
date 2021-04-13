import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Api, getScaledValue } from "renative";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButton1Focused: false,
      isButton2Focused: false,
      isButton3Focused: false,
      isButton4Focused: false,
    };
    this.actionRef = {};
  }

  componentDidMount() {
    (Api.platform === "webos" || Api.platform === "tizen") &&
      this.actionRef["button1"] &&
      this.actionRef["button1"].focus();
  }

  render() {
    const {
      isButton1Focused,
      isButton2Focused,
      isButton3Focused,
      isButton4Focused,
    } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.btnStyle,
            isButton1Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton1Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton1Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.btnTxt,
              isButton1Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}
          >
            Button 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnStyle,
            isButton2Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton2Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton2Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.btnTxt,
              isButton2Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}
          >
            Button 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnStyle,
            isButton3Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton3Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton3Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.btnTxt,
              isButton3Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}
          >
            Button 3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnStyle,
            isButton4Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton4Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton4Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.btnTxt,
              isButton4Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}
          >
            Button 4
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "#edffec",
  },
  btnStyle: {
    width: 200,
    height: 100,
    backgroundColor: "#b4aee8",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginLeft: 20,
    borderRadius: 20,
  },
  activeBtn: {
    borderColor: "#fff",
    width: 260,
    height: 140,
  },
  inactiveBtn: {
    borderColor: "transparent",
  },
  btnTxt: {
    color: "#fff",
  },
  activeBtnTxt: {
    fontSize: getScaledValue(20),
  },
  inactiveBtnTxt: {
    fontSize: 25,
  },
});

export default Home;