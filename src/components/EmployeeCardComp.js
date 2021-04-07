import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EmployeeCardComp = ({ eID, name, designation, salary }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.idtxt}>#{eID}</Text>
        <Text style={styles.salarytxt}>{salary}</Text>
      </View>
      <Text style={styles.nametxt}>{name}</Text>
      <Text style={styles.txt}>Designation: {designation}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 20,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomColor: 'rgba(145,199,136,0.8)',
    borderBottomWidth: 15,
  },
  topView: {
    marginBottom: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  idtxt: {
    fontSize: 16,
    color: '#777',
  },
  salarytxt: {
    fontSize: 18,
    color: '#333',
  },
  nametxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#91c788',
  },
  txt: {
    fontSize: 16,
    color: '#333',
  },
});

export default EmployeeCardComp;