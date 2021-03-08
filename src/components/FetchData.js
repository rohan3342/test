import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import CardView from './CardView';

const Item = ({ data }) => { 
    return <CardView key={data.id} id={data.id} f_name={data.first_name} l_name={data.last_name}
            email={data.email} avatar={data.avatar} />
}

const FetchData = () => {
    const [DATA, setDATA] = useState([]);
    const [pageCount,changePageCount] = useState(1);
    const [isRefreshing, changeIsRefreshin] = useState(false);
    const [loader, setLoader] = useState(false);
    const [onEnd, changeOnEnd] = useState(false);
    
    const renderItem = ({ item }) => <Item data={item} />
    
    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${pageCount}`)
            .then(response => response.json())
            .then(responseBody => setDATA([...DATA, ...responseBody.data]))
            .catch(error => console.error("An error has occurred: " + error));
    }, [pageCount]);
      
    const refreshData = async () => {
        changeIsRefreshin(true);
        setDATA([])
        changePageCount(1)
        changeIsRefreshin(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={() => refreshData()}
                    />
                }
                onEndReachedThreshold={10}
                onEndReached={() => {
                    changeOnEnd(true);
                    if (pageCount == 1) { 
                        console.log('ON END CALLED!!');
                        setLoader(true);
                        setTimeout(() => {
                            changePageCount(2)
                            setLoader(false);
                            changeOnEnd(false);
                        }, 3000)
                    }
                }}
            />
            { loader ? <ActivityIndicator size={'small'} color={'red'} />
                    : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingVertical: 10
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 11,
        marginHorizontal: 16,
    }
})

export default FetchData;
