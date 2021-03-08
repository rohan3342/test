import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, RefreshControl } from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'One'
    },
    {
        id: '2',
        title: 'Two'
    },
    {
        id: '3',
        title: 'Three'
    },
    {
        id: '4',
        title: 'Four'
    },
    {
        id: '5',
        title: 'Five'
    },
    {
        id: '6',
        title: 'Six'
    },
    {
        id: '7',
        title: 'Seven'
    },
    {
        id: '8',
        title: 'Eight'
    },
    {
        id: '9',
        title: 'Nine'
    },
    {
        id: '10',
        title: 'Ten'
    },
    {
        id: '11',
        title: 'Eleven'
    },
    {
        id: '12',
        title: 'Twolev'
    }
]

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text>{title}</Text>
    </View>
)

const ListExample = () => {
    const [data, setData] = useState(DATA);
    const [isLoading, callApi] = useState(false);
    const [isRefreshing, refreshList] = useState(false);
    const renderItem = ({ item, index }) => <Item title={ item.title}/>

    return (
        <SafeAreaView style= {styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                // keyExtractor={(item) => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={() => {
                            refreshList(true);
                            setTimeout(() => {
                                setData(DATA);
                                refreshList(false);
                            },5000)
                        }}
                    />
                }
                onEndReached={() => {
                    callApi(true);
                    setTimeout(() => {
                        setData([...data, ...data]);
                        callApi(false)
                    },5000)
                }}
            />
            {isLoading ?
                <View>
                    <ActivityIndicator size={'small'} 
                        color={'red'} />
                </View> : null
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 10
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 11,
        marginHorizontal: 16,
    }
})

export default ListExample;
