import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  PanResponder,
  Animated,
  Platform,
  View,
  Text,
} from 'react-native';

class Drag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
    };

    this.panHandling();
  }

  panHandling() {
    // Add a listener for the delta value change
    this._val = { x: 0, y: 0 };
    this.state.pan.addListener((value) => (this._val = value));
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.pan.setOffset({
          x: this._val.x,
          y: this._val.y,
        });
        this.state.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: this.state.pan.x, dy: this.state.pan.y }],
        { useNativeDriver: false },
      ),
      // adjusting delta value
    });
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
    };
    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[panStyle, styles.circle]}
        />
        <View style={styles.header}>
          <Text style={styles.headertxt}>Drag Object</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'lightblue',
    position: 'absolute',
    top: 50,
    width: 60,
    height: 60,
    borderRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
    zIndex: 1,
  },
  header: {
    backgroundColor: '#fafafa',
    width: 250,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  headertxt: {
    color: 'lightblue',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default Drag;
