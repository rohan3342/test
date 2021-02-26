import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FunctionalComp = (props) => {
    console.log(props.style);
    return (
        <View>
            <TouchableOpacity onPress={()=> props.onPress(props.name)}>
                <Text style={[{color: 'green', fontSize: 20}, props.style ]}>
                    {props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FunctionalComp;