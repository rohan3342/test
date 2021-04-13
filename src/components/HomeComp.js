import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Api } from 'renative';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButton1Focused: false,
      isButton2Focused: false
    };
    this.actionRef = {}
  }

  componentDidMount() {
    (Api.platform === 'webos' || Api.platform === 'tizen') && this.actionRef['button1'] && this.actionRef['button1'].focus() //It'll work on Tizen/WebOS.
  }

  _onKeyDown = (event) => {
    const keyCode = event.keyCode
    const {
      isButton1Focused,
      isButton2Focused,
    } = this.state
    switch (keyCode) {
      case 40: //DOWN
        {
          if (isButton1Focused) {
            this.actionRef['button2'] && this.actionRef['button2'].focus()
          }
          else if (isButton2Focused) {
            this.actionRef['button1'] && this.actionRef['button1'].focus()
          }
          return
        }
      case 38: //Up
        {
          if (isButton2Focused) {
            this.actionRef['button1'] && this.actionRef['button1'].focus()
          }
          return
        }
    }
  }

  render() {
    const {
      isButton1Focused,
      isButton2Focused
    } = this.state
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <View style={[{
          width: 200,
          height: 100,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2
        }, isButton1Focused ? {
          borderColor: '#FF0',
        } : {
          borderColor: 'transparent'
        }]}
          ref={(ref) => {
            this.actionRef['button1'] = ref;
          }}
          activeOpacity={1.0}
          onKeyDown={(e) => {
            this._onKeyDown(e)
          }}
          onFocus={() => {
            this.setState({
              isButton1Focused: true
            })
          }}
          onBlur={() => {
            this.setState({
              isButton1Focused: false
            })
          }}
        // onPress={() => {
        //     console.log("Button 1 clicked")
        // }}
        >
          <Text style={{
            color: '#FFF'
          }}>Button 1</Text>
        </View>
        <View style={[{
          marginTop: 20,
          width: 200,
          height: 100,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2
        }, isButton2Focused ? {
          borderColor: '#FF0',
        } : {
          borderColor: 'transparent'
        }]}
          ref={(ref) => {
            this.actionRef['button2'] = ref;
          }}
          activeOpacity={1.0}
          onKeyDown={(e) => {
            this._onKeyDown(e)
          }}
          onFocus={() => {
            this.setState({
              isButton2Focused: true
            })
          }}
          onBlur={() => {
            this.setState({
              isButton2Focused: false
            })
          }}
        // onPress={() => {
        //     console.log("Button 2 clicked")
        // }}
        >
          <Text style={{
            color: '#FFF'
          }}>Button 2</Text>
        </View>

      </View>
    );
  }
}

export default Home;
