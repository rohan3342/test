import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';

class Home extends React.Component {
    constructor(props) {
        super(props);
    
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText} >Men Clothings</Text>
                </View>
                <TopBar/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 22,
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingVertical: 5
    }
})
export default Home;