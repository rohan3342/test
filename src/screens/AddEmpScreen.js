import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';



class AddEmpScreen extends Component {
  goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  }
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
              <TextInput placeholder="Employee ID" style={styles.inputBox} />
            </View>
            <View style={styles.inputViewWrapper}>
              <View style={styles.inputIconView}>
                <IoniconsIcon name="ios-person-outline" color="white" size={25} />
              </View>
              <TextInput placeholder="Employee Name" style={styles.inputBox} />
            </View>
            <View style={styles.inputViewWrapper}>
              <View style={styles.inputIconView}>
                <MaterialIcon name="work-outline" color="white" size={25} />
              </View>
              <TextInput placeholder="Employee Designation" style={styles.inputBox} />
            </View>
            <View style={styles.inputViewWrapper}>
              <View style={styles.inputIconView}>
                <MaterialCommunityIcon name="currency-inr" color="white" size={25} />
              </View>
              <TextInput placeholder="Employee Salary" style={styles.inputBox} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.goToHomeScreen()}
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
