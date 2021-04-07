import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const EmployeeCardComp = ({ eID, name, designation, salary }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.idtxt}>#{eID}</Text>
        <Text style={styles.salarytxt}>{salary}</Text>
      </View>
      <Text style={styles.nametxt}>{name}</Text>
      <Text style={styles.txt}>Designation: {designation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#eaeaea',
    borderBottomColor: 'orange',
    borderBottomWidth: 10,
  },
  topView: {
    marginBottom: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  idtxt: {
    fontSize: 20,
    color: '#777',
  },
  salarytxt: {
    fontSize: 20,
    color: '#333',
  },
  nametxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  txt: {
    fontSize: 16,
    color: '#333',
  },
});

export default EmployeeCardComp;