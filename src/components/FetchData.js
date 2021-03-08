import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import CardView from './CardView';

const Item = ({ data }) => { 
    //console.log("\nDATA: ",data);
    return  <CardView 
            key={data.id}
            id={data.id}
            f_name={data.first_name}
            l_name={data.last_name}
            email={data.email}
            avatar={data.avatar}
        />
}

const FetchData = () => {
    const [initData, changeinitData] = useState([]);
    const [data, setData] = useState([]);
    const [pageCount,changePageCount] = useState(1);
    // const [isLoading, callApi] = useState(false);
    const [isRefreshing, refreshList] = useState(false);
    const renderItem = ({ item }) => <Item data={item} />
    const [onEnd, changeOnEnd] = useState(false)

    useEffect(() => {
        fetch('https://reqres.in/api/users?page='+ pageCount)
        .then(response => response.json())
        .then(responseBody => responseBody.data)
        .then(d => {
            if (pageCount > 1) {
                return setData([...data, ...d])
            } else if (isRefreshing && pageCount == 1) {
                setData([])
                setData(initData)
            }
            else {
                changeinitData(d)
                return setData(d)
            }
        })
        .catch(error => console.error("An error has occurred: " + error));
      }, [pageCount]);

      
    return (
        <SafeAreaView style= {styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={() => {
                            refreshList(true);
                            setTimeout(() => {
                                changePageCount(1);
                                refreshList(false);
                            }, 1000)
                        }}
                    />
                }
                onEndReached={() => {
                    changeOnEnd(true)
                    setTimeout(() => {
                        changePageCount(2)
                    }, 4000)
                }}
            />
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

export default FetchData;
