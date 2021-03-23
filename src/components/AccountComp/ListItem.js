import React, { Fragment } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const checkListType = (listType, flag, rightTxt, rightIcon) => {
  if (listType === 'countryType') {
    //listType = USA
    return (
      <View style={styles.rigthView}>
        <Image source={flag} style={styles.flagIcon} />
        <Text>{rightTxt}</Text>
        <Image style={styles.rightIcon} source={rightIcon} />
      </View>
    );
  } else if (listType === 'langType') {
    // listType = lang
    return (
      <View style={styles.rigthView}>
        <Text>{rightTxt}</Text>
        <Image style={styles.rightIcon} source={rightIcon} />
      </View>
    );
  } else if (listType === 'none') {
    return (
      <View style={styles.rigthView}>
        <Image style={styles.rightIcon} source={rightIcon} />
      </View>
    );
  } else if (listType === 'footer') {
    return (
      <View style={styles.footerViewWrapper}>
        <View style={styles.footerView}>
          <Text>{rightTxt}</Text>
        </View>
      </View>
    );
  }
};

const ListItem = ({
  id,
  leftIcon,
  title,
  flag,
  rightTxt,
  rightIcon,
  listType,
}) => {
  return (
    <Fragment>
      <TouchableOpacity
        key={id}
        style={[
          styles.container,
          listType === 'footer' ? styles.containerNewColor : null,
        ]}>
        <View style={styles.leftView}>
          <Image style={styles.leftIcon} source={leftIcon} />
          <Text style={styles.titleTxt}>{title}</Text>
        </View>
        {checkListType(listType, flag, rightTxt, rightIcon)}
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  titleTxt: {
    fontSize: 14,
  },
  rigthView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
    width: 15,
    height: 15,
  },
  footerViewWrapper: {
    width: '100%',
    marginLeft: '20%',
    justifyContent: 'center',
  },
  footerView: {
    position: 'absolute',
  },
  containerNewColor: {
    backgroundColor: '#eee',
  },
});

export default ListItem;
