import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const Home = () => {
  const [copiedText, setText] = useState('');
  const [inputText, setInputText] = useState('');
  const readCopiedText = async () => {
    try {
      const text = await Clipboard.getString('');
      setText(text);
    } catch (error) {
      console.error(error);
    }
  };

  const writeToClipboard = async () => {
    Clipboard.setString(inputText);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <Text> Clipboard Content: </Text>
        <Text> {copiedText}</Text>
        <Button title={'Read Content'} onPress={readCopiedText} />
        <TextInput
          placeholder={'Enter Text'}
          onChangeText={(value) => setInputText(value)}
          style={styles.txtInput}
        />
        <Button title={'Save Content'} onPress={writeToClipboard} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    width: '80%',
    height: 40,
    padding: 5,
    marginTop: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Home;
