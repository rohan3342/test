import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from '@react-native-community/slider';

const SliderComp = () => {
    const [value, setValue] = useState(1);
    return (
    <View style={styles.container}>
        <Slider
            style = { styles.slider }    
            value = { value }
            onValueChange = { setValue }
            minimumValue = {0}
            maximumValue = {100}
            minimumTrackTintColor="white"
            thumbTintColor = "white"
            maximumTrackTintColor = "#3d3d3d"
            step={1}
            />
            <Text style = {styles.textView}> {value} </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 200,
        backgroundColor: '#9ed3ff',
        padding: 5,
        borderRadius: 20
    },
    slider: {
        width: '80%',
        height: 40
    },
    textView: {
        fontSize: 20,
        color: '#3d3d3d'
    }
})

export default SliderComp;
