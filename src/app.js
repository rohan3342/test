import React, { Component } from 'react';
import { View } from 'react-native';
import { Api } from 'renative';
import Home from './components/HomeComp';

class App extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Home />
            </View>
        );
    }
}

export default App;
