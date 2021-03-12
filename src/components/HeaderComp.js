import React from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { cross, search } from '../asset/index';
import LinearGradient from 'react-native-linear-gradient';

class HeaderComp extends React.PureComponent {
  CrossBtn = () => {
    Alert.alert('Confirm Exit', 'Are You Sure you want to Exit?', [
      { text: 'Yes', onPress: null, style: 'destructive' },
      {
        text: 'Cancel',
        onPress: null,
        style: 'cancel',
      },
    ]);
  };

  render() {
    return (
      <LinearGradient
        style={styles.headerView}
        colors={['rgba(26,36,68,0.9)', 'rgba(0,73,78,0.9)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <SafeAreaView />
        <View style={styles.headerBar}>
          <Text style={styles.headerTxt}>
            <Text>Store Selected: </Text>
            <Text style={styles.storeName}>Coop Molndal Aby</Text>
          </Text>
          <TouchableOpacity onPress={() => this.CrossBtn()}>
            <Image style={styles.crossIcon} source={cross} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <Image style={styles.searchIcon} source={search} />
          <TextInput
            placeholder="Enter Text"
            selectionColor="#ddd"
            placeholderTextColor="#d0d0d0"
            style={styles.inputTxt}
          />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    height: '15%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  headerTxt: {
    color: 'white',
    fontSize: 16,
  },
  crossIcon: {
    width: 22,
    height: 22,
  },
  storeName: {
    fontWeight: 'bold',
  },
  searchBar: {
    marginHorizontal: 5,
    backgroundColor: 'gray',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  searchIcon: {
    marginRight: 15,
    width: 20,
    height: 20,
  },
  inputTxt: {
    width: '100%',
    fontSize: 16,
  },
});

export default HeaderComp;
