import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EmployeeCardComp from '../components/EmployeeCardComp';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ascending: true,
    };
  }

  changeFilter = () => {
    this.setState({ ascending: !this.state.ascending });
  }

  goToAddEmpScreen = () => {
    this.props.navigation.navigate('AddEmpScreen');
  }

  render() {
    const { ascending } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitleTxt}>Employee List</Text>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => this.goToAddEmpScreen()}
          >
            <FontAwesomeIcon name="plus-circle" color="white" size={35} />
          </TouchableOpacity>
        </View>
        <View style={styles.filterBar}>
          <View style={styles.searchBar}>
            <TextInput placeholder="Search Employee" style={styles.searchBox} />
            <TouchableOpacity style={styles.searchBtn}>
              <FontAwesomeIcon name="search" color="white" size={25} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.changeFilter()}>
            {ascending ? (
              <FontAwesomeIcon name="sort-amount-up" color="#91c788" size={30} />
            ) : (
              <FontAwesomeIcon name="sort-amount-down" color="#91c788" size={30} />
            )}
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.listView}>
          <EmployeeCardComp
            eID="1"
            name="Rohan"
            designation="Dev"
            salary="15,000"
          />
          <EmployeeCardComp
            eID="1"
            name="Rohan"
            designation="Dev"
            salary="15,000"
          />
          <EmployeeCardComp
            eID="1"
            name="Rohan"
            designation="Dev"
            salary="15,000"
          />
          <EmployeeCardComp
            eID="1"
            name="Rohan"
            designation="Dev"
            salary="15,000"
          />
          <EmployeeCardComp
            eID="1"
            name="Rohan"
            designation="Dev"
            salary="15,000"
          /><EmployeeCardComp
            eID="1"
            name="Rohan"
            designation="Dev"
            salary="15,000"
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    paddingVertical: 20,
    backgroundColor: '#91c788',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarTitleTxt: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  addBtn: {
    position: 'absolute',
    right: 20,
  },
  filterBar: {
    marginTop: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
  },
  searchBox: {
    minHeight: 50,
    height: 55,
    width: '80%',
    backgroundColor: '#ddd',
    fontSize: 18,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchBtn: {
    backgroundColor: '#91c788',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
  },
  listView: {
    flex: 1,
  }
});

export default HomeScreen;
