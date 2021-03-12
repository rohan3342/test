import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DATA from '../data.json';
import sortData from '../utils/FilterData';
import HeaderComp from './HeaderComp';

const FILTERDATA = sortData(DATA);

class ContactComp extends Component {
  constructor(props) {
    super(props);
    this.state = { itemCount: 0 };
  }

  RenderListData = (item) => {
    return (
      <View style={styles.itemView}>
        <Text style={styles.productNameTxt}>{item.productName}</Text>
        <CheckBox
          onAnimationType={'bounce'}
          offAnimationType={'bounce'}
          onTintColor={'#4f8080'}
          onCheckColor={'white'}
          onFillColor={'#4f8080'}
          style={styles.checkBox}
          onValueChange={(valueChange) =>
            valueChange
              ? this.setState({ itemCount: this.state.itemCount + 1 })
              : this.setState({ itemCount: this.state.itemCount - 1 })
          }
        />
      </View>
    );
  };

  ContinueBtn = () => {
    return (
      <View style={styles.FooterView}>
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueBtnTxt}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { itemCount } = this.state;
    return (
      <Fragment>
        <HeaderComp />
        <View style={styles.containerView}>
          <SectionList
            sections={FILTERDATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => this.RenderListData(item)}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeaderView}>
                <Text style={styles.title}>{section.title}</Text>
              </View>
            )}
          />
        </View>
        {!(itemCount === 0) ? this.ContinueBtn() : null}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 8,
    backgroundColor: 'white',
  },
  FooterView: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  sectionHeaderView: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  productNameTxt: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  continueBtn: {
    backgroundColor: '#4f8080',
    alignItems: 'center',
    width: '90%',
    padding: 5,
    marginBottom: 30,
    borderRadius: 10,
  },
  continueBtnTxt: {
    marginVertical: 5,
    fontSize: 24,
    color: 'white',
  },
  checkBox: {
    height: 20,
    width: 20,
  },
});

export default ContactComp;
