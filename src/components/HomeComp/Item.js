import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Heart } from '../../asset/index';

const Item = ({ image, brand, description, price }) => {
  return (
    <View style={styles.itemCard}>
      <View style={styles.imageView}>
        <Text style={styles.offerText}>New</Text>
        <Image style={styles.itemImage} source={image} />
        <TouchableOpacity style={styles.likedView}>
          <Image style={styles.liked} source={Heart} />
        </TouchableOpacity>
      </View>

      <Text style={styles.textBrand}>{brand}</Text>
      <Text style={styles.textDescription}>{description}</Text>
      <Text style={styles.textPrice}>Rs.{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    width: '47%',
    marginBottom: 30,
    marginHorizontal: 6,
  },
  itemImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },

  textBrand: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  textDescription: {
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 5,
  },
  textPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageView: {
    position: 'relative',
    marginBottom: 10,
  },
  offerText: {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'green',
    zIndex: 1,
    top: 0,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textTransform: 'uppercase',
  },
  likedView: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 50,
    top: 10,
    right: 10,
  },
  liked: {
    height: 20,
    width: 20,
  },
});
export default Item;
