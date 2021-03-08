import React, { useState } from "react"
import { Switch, View, StyleSheet } from 'react-native'
import SliderComp from './SliderComp';

const SwitchComp = () => {
    const [isEnable, setIsEnable] = useState(false);
    const isOn = () => {
        setIsEnable(prevState => !prevState)
    }
    return (
        <View
            style={[styles.container,
                isEnable ?
                { backgroundColor: 'white' } : { backgroundColor: '#ccc' }]}>
            <Switch
                style={styles.switch}
                trackColor={{ false: "grey", true: "#9ed3ff" }}
                thumbColor={ isEnable ? "#fff" : "#ccc" }
                onValueChange={isOn}
                value = { isEnable }
            />
            {
                isEnable ?
                    <SliderComp />
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    switch: {
        transform: [{scale: 1.5}]
    }
})

export default SwitchComp;