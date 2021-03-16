import React from 'react';
import { View, Image, StyleSheet, TextInput, Platform } from 'react-native';

const CustomTextInput = ({
  id,
  name,
  placeholder,
  imgActive,
  imgInactive,
  getUserData,
  keyboardType,
  focusedTextInput,
  CurrentfocusedTextInput,
}) => {
  return (
    <View
      key={id}
      style={[
        styles.container,
        CurrentfocusedTextInput === name ? styles.containerActive : null,
      ]}>
      <View style={styles.imgView}>
        {showIcon(CurrentfocusedTextInput, name, imgActive, imgInactive)}
      </View>
      <TextInput
        keyboardType={keyboardType}
        style={styles.textInput}
        placeholder={placeholder}
        onFocus={() => focusedTextInput(name)}
        onChangeText={(text) => getUserData(text, name)}
      />
    </View>
  );
};

const showIcon = (CurrentfocusedTextInput, name, imgActive, imgInactive) => {
  if (CurrentfocusedTextInput === name) {
    return <Image source={imgActive} style={styles.img} />;
  } else {
    return <Image source={imgInactive} style={styles.img} />;
  }
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
  containerActive: {
    ...Platform.select({
      ios: {
        shadowColor: '#2968CD',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
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
