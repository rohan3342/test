import React from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image,StyleSheet } from 'react-native'
import { UpDownArrow,Filter } from '../asset/index';
const TopBar = () => {

    return (
        <View style={styles.topBarContainer}>
            <View style={styles.topBar}>
                <View>
                    <Text style={styles.ItemQty}>195 Items</Text>
                </View>
                <View style={styles.iconsBar}>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Image style={styles.image} source={UpDownArrow} />
                        <Text style={styles.imageText}>Sort</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Image style={styles.image} source={Filter} />
                        <Text style={styles.imageText}>Filter</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>Bottom View</Text>
            </View>
    </View>
        
    )
}

const styles = StyleSheet.create({
    topBarContainer: {
        marginHorizontal: 20
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    iconsBar: {
        flexDirection: 'row'
    },
    ItemQty: {
        fontSize: 16,
        color: '#444',
    },
    TouchableOpacity: {
        flexDirection: 'row',
    },
    image: {
        width: 24,
        height: 24
    },
    imageText: {
        textTransform: 'uppercase',
        fontSize: 16,
        paddingHorizontal: 10,
        color: '#444'
    }
})

export default TopBar;