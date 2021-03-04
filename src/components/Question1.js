import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, StatusBar,Text, View, TextInput, TouchableOpacity,
    Alert, ScrollView} from 'react-native';


class Question1 extends Component {

    constructor(props){
        super(props);
        
        this.state = { otp: '' }

        this.inputReference = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ]
    }

    moveToNextInput(index,input){
        console.log('==========',input);
        let inputText = this.state.otp;
        inputText += input;

        this.setState({otp: inputText})
        
        console.log(`Index: ${index} Lenght: ${this.inputReference.length}
                    Input: ${input} Total: ${inputText}`);
        
        if(index < this.inputReference.length - 1) {
            this.inputReference[index+1].focus();
        }
        
    }


    render(){
        return(
            <>
            <StatusBar  backgroundColor = "#68BF71" />
            <View style={styles.topView}>
                    <Text style={styles.topViewText}>
                        Log into Saavn
                    </Text>
            </View>

            <SafeAreaView style={styles.container}>
                <ScrollView keyboardDismissMode="handled">
                    <View style={styles.mainContainer}>
                        <Text style={styles.codeText}>Enter Your Code</Text>
                        <View style={styles.inputGrid}>

                            {this.inputReference.map((key,index)=> (
                                <TextInput style={styles.numberInput} 
                                    keyboardType="numeric"
                                    maxLength={1}
                                    onChangeText={(input)=> this.moveToNextInput(index,input)}
                                    ref={reference => this.inputReference[index] =  reference}
                                />
                            ))}

                        </View>
                        <TouchableOpacity style={styles.btn}
                            activeOpacity={0.6}
                            onPress={()=> Alert.alert('OTP : ', this.state.otp)}
                            >
                            <Text style={styles.btnText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    mainContainer:{
        flex:1,
        marginTop: 80,
        marginHorizontal: 40,

    },
    topView: {
        backgroundColor: '#68BF71',
        paddingTop: 10,
        paddingBottom: 20
    },
    topViewText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },

    codeText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 60
    },
    inputGrid: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 60
    },
    numberInput: {
        borderWidth:1,
        borderColor: '#cccccc',
        width:50,
        height:50,
        borderRadius: 5,
        textAlign: 'center'
    },
    btn: {
        borderWidth: 1,
        borderColor: '#68BF71',
        paddingVertical: 16,
        paddingHorizontal: 40,
        width: 300,
        alignSelf: 'center'
    },
    btnText: {
        color: '#68BF71',
        textAlign: 'center',
        fontSize: 20
    }
});

export default Question1;