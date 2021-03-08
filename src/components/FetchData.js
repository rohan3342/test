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
    
    const renderItem = ({ item }) => <Item data={item} />
    
    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${pageCount}`)
            .then(response => response.json())
            .then(responseBody => {
                console.log(`Page Count Inside useEffect: ${pageCount}`);
                if (pageCount > 1) {
                    console.log(`Setting Data, Inside If: Spreading Data!!`);
                    return setDATA([...DATA, ...responseBody.data])
                }
                else {
                    console.log(`Setting Data, Inside Else: ${responseBody.data}`);
                    return setDATA(responseBody.data)
                }
            })
            .catch(error => console.error("An error has occurred: " + error));
    }, [pageCount,isRefreshing]);
      
    const refreshData = async () => {
        console.log('Page Refresh Rquest!');

        changeIsRefreshin(true);
        console.log(`changeIsRefreshin: ${isRefreshing}`);

        setDATA([])
        changePageCount(1)
        console.log(`PageCount : ${pageCount}`);
        
        changeIsRefreshin(false);
        console.log(`changeIsRefreshin: ${isRefreshing}`);
        
        console.log('Page Refresh Rquest End!!!');
    }

    return (
        <SafeAreaView style={styles.container}>
            {console.log('RENDER CALLED!!!\n \n')}
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
                onEndReached={() => {
                    setLoader(true);
                    console.log('Loader Start!');
                    if (pageCount <= 1) {
                        setTimeout(() => {
                            changePageCount(2)
                            console.log(`Page == 1 | True ==> PageCount Set : ${pageCount}`);
                        }, 3000)
                    }
                    console.log('Loader End!');
                    setLoader(false);
                }}
                ListFooterComponent={ loader ? <ActivityIndicator size={'small'} color={'red'} />
                    : null}
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
