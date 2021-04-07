import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { addEmployee } from '../database/EmployeeDB';

class AddEmpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      designation: '',
      salary: '',
      close: false,
    };
  }

  sendDataToDB = () => {
    const { id, name, designation, salary } = this.state;

    let alphacheck = /^[a-z\d\-_\s]+$/i;
    let numcheck = /^[0-9]*$/;

    if (id === '') {
      Alert.alert('Empty ID', 'Please Fill the ID');
    }
    else if (name === '') {
      Alert.alert('Empty Name', 'Please Fill the Name');
    }
    else if (designation === '') {
      Alert.alert('Empty Designation', 'Please Fill the Designation');
    }
    else if (salary === '') {
      Alert.alert('Empty Salary', 'Please Fill the Salary');
    }
    else if (!alphacheck.test(name)) {
      Alert.alert('Employee Name', 'Use alphabets only');
    }
    else if (!alphacheck.test(designation)) {
      Alert.alert('Designation', 'Use alphabets only');
    }
    else if (!numcheck.test(id)) {
      Alert.alert('ID', 'Use numbers only');
    }
    else if (!numcheck.test(salary)) {
      Alert.alert('Designation', 'Use alphabets only');
    }
    else if (salary > 500000) {
      Alert.alert('Salary Alert', 'Salary more than 5,00,000');
      this.setState({ salary: '' });
    }
    else {
      this.setState({
        id: '',
        name: '',
        salary: '',
        designation: ''
      });
      this.setState({ close: addEmployee(id, name, designation, salary) })
    }
  }

  componentDidUpdate() {
    if (this.state.close) {
      const updateEmployee = true;
      this.props.navigation.navigate('HomeScreen', { updateEmployee });
    }
  }

  goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  }

  getID = (value) => this.setState({ id: value });
  getName = (value) => this.setState({ name: value });
  getDesignation = (value) => this.setState({ designation: value });
  getSalary = (value) => this.setState({ salary: value });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitleTxt}>Add Employee</Text>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => this.goToHomeScreen()}>
            <IoniconsIcon name="chevron-back-circle-outline" color="white" size={40} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainerWrapper}>

          <View style={styles.mainContainer}>
            <View style={styles.inputViewWrapper}>
              <View style={styles.inputIconView}>
                <AntDesignIcon name="idcard" color="white" size={25} />
              </View>
              <TextInput
                keyboardType='numeric'
                autoCorrect={false}
                value={this.state.id}
                onChangeText={(text) => this.getID(text)}
                placeholder="Employee ID"
                style={styles.inputBox} />
            </View>
            <View style={styles.inputViewWrapper}>
              <View style={styles.inputIconView}>
                <IoniconsIcon name="ios-person-outline" color="white" size={25} />
              </View>
              <TextInput
                keyboardType='default'
                autoCorrect={false}
                value={this.state.name}
                onChangeText={(text) => this.getName(text)}
                placeholder="Employee Name"
                style={styles.inputBox} />
            </View>
            <View style={styles.inputViewWrapper}>
              <View style={styles.inputIconView}>
                <MaterialIcon name="work-outline" color="white" size={25} />
              </View>
              <TextInput
                keyboardType='default'
                autoCorrect={false}
                value={this.state.designation}
                onChangeText={(text) => this.getDesignation(text)}
                placeholder="Employee Designation"
                style={styles.inputBox} />
            </View>
            <View style={styles.inputViewWrapper}>
              <View style={styles.inputIconView}>
                <MaterialCommunityIcon name="currency-inr" color="white" size={25} />
              </View>
              <TextInput
                keyboardType='numeric'
                autoCorrect={false}
                value={this.state.salary}
                onChangeText={(text) => this.getSalary(text)}
                placeholder="Employee Salary" style={styles.inputBox} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.sendDataToDB()
            }}
            style={styles.submitBtn}>
            <Text style={styles.submitBtnTxt}>Submit</Text>
          </TouchableOpacity>
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
  mainContainerWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  mainContainer: {},
  inputViewWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  inputIconView: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#91c788',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  inputBox: {
    minHeight: 50,
    height: 55,
    width: '78%',
    backgroundColor: '#fff',
    fontSize: 18,
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  submitBtn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    minHeight: 50,
    height: 55,
    backgroundColor: '#91c788',
  },
  submitBtnTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default AddEmpScreen;
