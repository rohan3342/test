import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image style={[styles.image, { width }]} source={item.image} />

      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 600,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  name: {
    fontWeight: '500',
    fontSize: 28,
    textTransform: 'uppercase',
    color: '#2D475C',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#0d2030',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default OnboardingItem;