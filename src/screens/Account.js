import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TopBar from '../components/AccountComp/TopBar';
import { BottomList, TopList } from '../utils/AccountListData';
import ListItem from '../components/AccountComp/ListItem';
class Account extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar />
        <View style={styles.borderView} />
        <View style={styles.topListView}>
          <FlatList
            bounces={false}
            data={TopList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <ListItem
                key={item.id}
                leftIcon={item.leftIcon}
                title={item.title}
                rightIcon={item.rightIcon}
                listType={item.listType}
              />
            )}
          />
        </View>
        <View style={styles.borderView} />
        <View style={styles.bottomListView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={false}
            data={BottomList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <ListItem
                key={item.id}
                title={item.title}
                leftIcon={item.leftIcon}
                flag={item.flag}
                rightTxt={item.rightTxt}
                rightIcon={item.rightIcon}
                listType={item.listType}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  borderView: {
    height: 10,
    backgroundColor: '#eee',
  },
  topListView: {},
  bottomListView: {
    height: '50%',
    flexGrow: 1,
  },
});
export default Account;
