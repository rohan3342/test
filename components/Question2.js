import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';


class Question2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            textInputColor: '',
            containerColor: 'rgb(255,255,255)',
            resultText: ''
        }
    }

    convertHexToRGB = () => {
        let hexColor = this.state.textInputColor;
        let r = 0, g = 0, b = 0;
        
        if (hexColor.length == 4) {
            r = "0x" + hexColor[1] + hexColor[1];
            g = "0x" + hexColor[2] + hexColor[2];
            b = "0x" + hexColor[3] + hexColor[3];
        } 
        
        else if (hexColor.length == 7) {
            r = "0x" + hexColor[1] + hexColor[2];
            g = "0x" + hexColor[3] + hexColor[4];
            b = "0x" + hexColor[5] + hexColor[6];
        }

        let result = `rgb(${parseInt(r)},${parseInt(g)},${parseInt(b)})`
        
        if(hexColor.length == 4 || hexColor.length == 7){
            this.setState({ containerColor: result, resultText: result});
        } else {
            console.warn('Incorrect Input!');
        }
    }
    
    render(){
        let rgbColor = 'RBG';
        return(
            <SafeAreaView style={[styles.container,
                {backgroundColor: this.state.containerColor}
            ]}>
                <View style = {styles.staticContianer}>
                    <TextInput flat
                        style={styles.textInput}
                        placeholder='Enter Hex Code'
                        onChangeText={(input)=> this.setState({ textInputColor: input})}
                        />

                    <TouchableOpacity
                        style={styles.submitBtn}
                        onPress={this.convertHexToRGB}
                        >
                            <Text style={styles.submitbtnText}> Submit </Text>
                        </TouchableOpacity>

                    {this.state.resultText === '' ? null : 
                        <Text style={styles.resultText}> RGB Code: {this.state.resultText} </Text>
                        }
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    staticContianer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderColor: '#c8c6a7',
        borderWidth:1,
        borderRadius: 5,
        backgroundColor: '#92967d',
        width: '80%'
    },
    
    textInput: {
        fontSize: 20,
        color: '#f9f3f3',
        width: '80%',
        borderBottomColor: '#f9f3f3',
        borderRadius: 5,
        borderBottomWidth: 1,
        marginVertical: 15,
        textAlign: 'center'
    },
    submitBtn: {
        alignItems: 'center',
        width:'50%',
        padding: 8,
        backgroundColor: '#435560',
        borderRadius:10,
        borderWidth:2,
        borderColor: '#6e7c7c'
    },
    resultText: {
        width: '100%',
        textAlign: 'center',
        margin: 10,
        color: '#f9f3f3',
        fontSize: 18
    },
    submitbtnText: {
        fontSize: 20,
        color: '#f9f3f3'
    }
});

export default Question2;