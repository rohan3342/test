import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, FlatList } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EmployeeCardComp from '../components/EmployeeCardComp';
import {
  getAllEmployees,
  sortData,
  searchEmployee,
  deleteAllData,
  deleteByID,
} from '../database/EmployeeDB';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ascending: true,
      employees: [],
      searchKeyword: '',
    };
  }

  componentDidMount() {
    this.renderEmpData();
  }

  renderEmpData = () => this.setState({ employees: getAllEmployees() });

  changeFilter = () => this.setState({ ascending: !this.state.ascending });

  sortDataByOrder = (sortOrder) => (
    sortOrder === 'asc' ?
      this.setState({ employees: sortData(sortOrder) }) :
      this.setState({ employees: sortData(sortOrder) })
  );

  searchEmp = (value) => this.setState({
    employees: searchEmployee(value),
    searchKeyword: value,
  });

  setSearchKeyword = (value) => this.setState({ searchKeyword: value });

  deleteOneItem = (id) => {
    deleteByID(id);
    this.renderEmpData();
  }

  deleteAllDataFromDB = () => {
    Alert.alert('Delete', 'Do you want to delete this Item ?', [
      {
        text: 'Yes',
        onPress: () => { deleteAllData(), this.renderEmpData() },
        style: 'destructive',
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  }

  goToAddEmpScreen = () => this.props.navigation.navigate('AddEmpScreen');

  renderFlatList = () => {
    if (this.state.employees.length > 0) {
      return (
        <FlatList
          data={this.state.employees}
          keyExtractor={(item, index) => item + index}
          renderItem={(item) =>
            <EmployeeCardComp
              eID={item.item.id}
              name={item.item.name}
              designation={item.item.designation}
              salary={item.item.salary}
              deleteOneItem={(value) => this.deleteOneItem(value)}
            />}
        />
      )
    } else {
      return (
        <View style={styles.emptyList}>
          <Text style={styles.emptyListTxt}>
            No employees found.
          </Text>
          <Text style={styles.emptyListTxtsmall}>
            Please Add employee!
          </Text>
        </View>
      )
    }
  }

  renderFilterBar = (isDisable) => {
    const { ascending, searchKeyword } = this.state;

    return (
      <View style={styles.filterBar}>
        <View style={styles.searchBar}>
          <TextInput
            keyboardType='default'
            autoCapitalize='none'
            autoCorrect={false}
            value={searchKeyword}
            onChangeText={(text) => this.setSearchKeyword(text)}
            placeholder="Search Employee"
            style={styles.searchBox} />
          <TouchableOpacity
            disabled={isDisable}
            onPress={() => this.searchEmp(searchKeyword)}
            style={styles.searchBtn}>
            <FontAwesomeIcon name="search" color="white" size={25} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          disabled={isDisable}
          onPress={() => {
            this.sortDataByOrder(ascending ? 'asc' : 'desc'),
              this.changeFilter()
          }}>
          {ascending ? (
            <FontAwesomeIcon name="sort-amount-up" color="#91c788" size={30} />
          ) : (
            <FontAwesomeIcon name="sort-amount-down" color="#91c788" size={30} />
          )}
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { searchKeyword, employees } = this.state;
    return (
      <View style={styles.container}>

        <View style={styles.topBar}>
          <Text style={styles.topBarTitleTxt}>Employee List</Text>
          <TouchableOpacity
            style={styles.addBtn}
            onLongPress={() => this.deleteAllDataFromDB()}
            onPress={() => this.goToAddEmpScreen()}>
            <FontAwesomeIcon name="plus-circle" color="white" size={35} />
          </TouchableOpacity>
        </View>

        {
          (employees.length > 2 && searchKeyword === '') ?
            this.renderFilterBar(true) : this.renderFilterBar(false)
        }
        <View style={styles.listView}>
          {this.renderFlatList()}
        </View>
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
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListTxt: {
    marginTop: -100,
    marginVertical: 5,
    fontSize: 24,
    color: '#91c788',
  },
  emptyListTxtsmall: {
    fontSize: 18,
    color: '#91c788',
  },
});

export default HomeScreen;
