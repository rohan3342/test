import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, Image,Text } from 'react-native';



class Question3 extends Component {
    
    state = {
        displayImage: 'none',
        displayIndicator: 'flex'
    }
    
    render(){
        
        const imageuri = 'https://source.unsplash.com/user/erondu/800x800';    
        
        let actIndicator = () => (
            <ActivityIndicator 
            size="large" color="lightgreen"
            style={{display: this.state.displayIndicator}}
            />
        );

        let imgloader = () => (
            <Image
                style={[styles.image,
                {display: this.state.displayImage}]}
                source={{uri: imageuri}}/>
        );
        
        let timer = () => {
            setTimeout(()=>{
                this.setState({displayImage: 'flex',
                displayIndicator: 'none'})
            },5000)
        }


        return(
            <SafeAreaView style={styles.container}>
                {timer()}
                {imgloader()}
                {actIndicator()}
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

    image: {
        width: 300,
        height: 300
    }
});

export default Question3;