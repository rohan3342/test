import React, {Component} from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ScrollView,ActivityIndicator } from 'react-native'
import CardView from './CardView'

class FetchData extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            loading: true,
            currentPage: 1,
            maxPage: 2
        }
        setTimeout(()=> this.fetchData(this.state.currentPage), 1000)
    }

    fetchData = async (currentPage) => {
        await fetch('https://reqres.in/api/users?page='+this.state.currentPage)
            .then(response=> response.json())
            .then(responseBody => responseBody.data)
            .then(apidata => {
                if(currentPage < this.state.maxPage) {
                    this.setState({loading: false, data: apidata});  
                } else {
                    this.setState({loading: false, data: [...this.state.data, ...apidata]});
                }
            })
            .catch(error => console.error("An error has occurred: "+ error));
    } 

    endOfThePage = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 40;
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
    }

    render() {
        const {data, loading ,currentPage, maxPage} = this.state;

        if(loading) {
            return(
                <View style={styles.loaderView}>
                    <ActivityIndicator style={styles.loader} 
                        size="large" color="lightgreen"/>
                </View>
                )
        }
        
        return(
                <ScrollView style={styles.container}
                    onScroll = {({nativeEvent}) => {
                        if(this.endOfThePage(nativeEvent) && currentPage <= maxPage) {
                            this.setState({currentPage: currentPage+1});
                            this.fetchData(currentPage);
                    }}}
                >
                    {data.map((data) => 
                        <CardView 
                            key={data.id}
                            id={data.id}
                            f_name={data.first_name}
                            l_name={data.last_name}
                            email={data.email}
                            avatar={data.avatar}
                        />
                    )}
                </ScrollView>
            );
        }
    }

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    loaderView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
});

export default FetchData;