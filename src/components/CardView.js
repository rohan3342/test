import React, { Component } from 'react';
import {StyleSheet,View,TouchableOpacity,Text,ScrollView,Image} from 'react-native';


const CardView = (props) =>{
console.log(props.f_name,props.l_name,props.email,props.avatar);
    return(
            <View style={styles.container}>
                <View style={styles.avatarView}>
                    <Image style={styles.img} source={{uri: `${props.avatar}`}}/>
                </View>
                <View style={styles.dataView}> 
                    <Text style={styles.nametext}>
                        {`${props.f_name} ${props.l_name}`}
                    </Text>
                    <Text style={styles.emailtext}>
                        {`${props.email}`}
                    </Text>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 10,
        marginHorizontal: "7%",
        width: '86%',
        height: 150,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#a4c3b2',
        borderRadius: 20
    },

    avatarView: {
        paddingHorizontal: 10,
        width: '30%'
    },
    
    img:{
        borderRadius: 100,
        width: 110,
        height: 110
    },
    
    dataView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
    },
    
    nametext: {
        fontSize: 22,
        color: '#f6fff8'
    },
    
    emailtext: {
        fontSize: 18,
        color: '#f6fff8'
    }
});

export default CardView;