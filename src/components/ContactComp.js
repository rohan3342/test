import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SectionList,
} from 'react-native';
import { cross, checkG, checkW, search } from '../asset/index';
import LinearGradient from 'react-native-linear-gradient';
import DATA from '../data.json';

class ContactComp extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.sortData(DATA);
  }

  sortData(data) {
    const updatedObj = {};
    const updatedData = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (updatedObj.hasOwnProperty(element.primaryCategory.categoryName)) {
        //if title exists push data element
        updatedObj[element.primaryCategory.categoryName].push(element);
      } else {
        //else create new title key and push data element
        updatedObj[element.primaryCategory.categoryName] = [element];
      }
    }

    const keys = Object.keys(updatedObj);
    for (let i = 0; i < keys.length; i++) {
      console.log('keys', keys[i]);
      const title = keys[i];
      const item = {
        title,
        data: updatedObj[keys[i]],
      };
      updatedData.push(item);
    }
    this.setState({ data: updatedData });
    // return updatedData;
  }

  render() {
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

    return (
      <Fragment>
        <LinearGradient
          style={styles.headerView}
          colors={['rgba(26,36,68,0.9)', 'rgba(0,73,78,0.9)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <View style={styles.headerBar}>
            <Text style={styles.headerTxt}>
              <Text>Store Selected: </Text>
              <Text style={styles.storeName}>Coop Molndal Aby</Text>
            </Text>
            <TouchableOpacity>
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

        <View style={styles.containerView}>
          <Text> List Data: </Text>
          <SectionList
            sections={this.state.data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item.productName}</Text>
              </View>
            )}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeaderView}>
                <Text style={styles.title}>{section.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.FooterView}>
          <Text> Continue Button </Text>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    paddingTop: 45,
    padding: 10,
  },
  containerView: {
    flex: 8,
    backgroundColor: 'white',
  },
  FooterView: {
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: 'gray',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
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

  item: {
    marginVertical: 8,
  },
  sectionHeaderView: {
    fontSize: 24,
    backgroundColor: 'white',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
  },
});

export default ContactComp;
