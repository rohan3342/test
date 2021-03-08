import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

class WebViewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <WebView 
          onLoadStart={() => {
            this.setState({isLoading: true});
          }}
          onLoadEnd = {() => {
            this.setState({isLoading: false});
          }}
          source={{uri: 'https://reactnative.dev'}}
        />
        {this.state.isLoading ? (
          <View style={styles.activity}>
            <ActivityIndicator 
              size={'large'}
              color={'orange'}
              animating={true}
            />
          </View>
        ): null}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
  activity: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});

export default WebViewComp;