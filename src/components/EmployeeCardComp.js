import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const deleteItem = (value, deleteOneItem) => {
  Alert.alert('Delete', 'Do you want to delete this Item ?', [
    {
      text: 'Yes',
      onPress: () => deleteOneItem(value),
      style: 'destructive',
    },
    { text: 'Cancel', style: 'cancel' },
  ]);
};

const EmployeeCardComp = ({ eID, name, designation, salary, deleteOneItem }) => {
  return (
    <TouchableOpacity
      onLongPress={() => deleteItem(eID, deleteOneItem)}
      style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.idtxt}>#{eID}</Text>
        <Text style={styles.salarytxt}>₹{salary}</Text>
      </View>
      <Text style={styles.nametxt}>{name}</Text>
      <Text style={styles.txt}>{designation}</Text>
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