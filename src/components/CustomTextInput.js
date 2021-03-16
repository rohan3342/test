import React from 'react';
import { View, Image, StyleSheet, TextInput, Platform } from 'react-native';

const CustomTextInput = ({
  id,
  placeholder,
  imgActive,
  imgInactive,
  getUserData,
}) => {
  return (
    <View key={id} style={styles.container}>
      <View style={styles.imgView}>
        <Image source={imgInactive} style={styles.img} />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={(text) => getUserData(text, id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  img: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  textInput: {
    width: '100%',
  },
});

export default CustomTextInput;
