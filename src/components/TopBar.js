import React from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image,StyleSheet } from 'react-native'
import { UpDownArrow, Filter } from '../asset/index';

const TopBar = () => {

    const FilterCate = [ 'Polo Shirts', 'Dress Shirts', 'Shorts','Suits','Pants', 'T-Shirts', 'Men Shoes']

    return (
        <>
        <View style={styles.topBarContainer}>
            <View style={styles.marginHor}>
                <View style={styles.topBar}>
                    <View>
                        <Text style={styles.ItemQty}>195 Items</Text>
                    </View>
                    <View style={styles.iconsBar}>
                        <TouchableOpacity style={styles.TouchableOpacity}>
                            <Image style={styles.image} source={UpDownArrow} />
                            <Text style={styles.imageText}>Sort</Text>
                        </TouchableOpacity>
                            <View style={styles.line}/>
                        <TouchableOpacity style={styles.TouchableOpacity}>
                            <Image style={styles.image} source={Filter} />
                            <Text style={styles.imageText}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>        
            </View>
        </View>
            
        <View style={styles.marginHor}>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                {
                    FilterCate.map((cate,index) => (
                        <TouchableOpacity key={index} style={styles.filterItem}>
                            <Text style={styles.filterItemText} >
                                {cate.toString()}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    topBarContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10
    },
    marginHor: {
        marginHorizontal: 15
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
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
        width: 18,
        height: 18
    },
    imageText: {
        textTransform: 'uppercase',
        fontSize: 15,
        paddingHorizontal: 10,
        color: '#444'
    },
    filterItem: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#eaeaea',
        marginRight: 10,
        marginVertical: 5,
        borderRadius: 20
    },
    filterItemText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#444'
    },
    line: {
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        marginHorizontal: 10
    }
})

export default TopBar;