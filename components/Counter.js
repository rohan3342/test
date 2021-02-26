import React, { Component } from 'react';
import {View, Text} from 'react-native';

class Counter extends Component {
    
    constructor(props){
        super(props);
        console.log('Child Log : Child Constructor Initiated!');
    }

    componentDidMount(){
        console.log('Child Log : Child Component Mounted!');
    }

    getSnapshotBeforeUpdate(prevProps){
        console.log('Child Log : Child Props Before Update :',prevProps.counter );
        return null;
    }

    componentDidUpdate(prevProps){
        if(this.props.counter !== prevProps.counter){
            console.log('Child Log : Child Props Updated!');
        }
    }
    
    render(){
        console.log('Child Log : Child Render Method Running!');
        console.log('Child Log : Counter Value: ',this.props.counter);
        return(
            <View>
                <Text style = {{fontSize: 20}}>
                    Counter: {this.props.counter}
                </Text>
            </View>
        );
    }
}

export default Counter;