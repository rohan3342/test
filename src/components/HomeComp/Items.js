import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Item from './Item';

const DATA = [
  {
    image: require('../../asset/items/item-1.jpg'),
    brand: 'Arrow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 3299,
  },
  {
    image: require('../../asset/items/item-2.jpg'),
    brand: 'Peter England',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 4100,
  },
  {
    image: require('../../asset/items/item-3.jpg'),
    brand: 'Van Heusen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 2799,
  },
  {
    image: require('../../asset/items/item-4.jpg'),
    brand: 'Zodiac',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 3100,
  },
  {
    image: require('../../asset/items/item-5.jpg'),
    brand: 'Louis Phillipe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 2599,
  },
  {
    image: require('../../asset/items/item-6.jpg'),
    brand: 'John Players',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 2199,
  },
  {
    image: require('../../asset/items/item-7.jpg'),
    brand: 'Park Avenue',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 1900,
  },
  {
    image: require('../../asset/items/item-8.jpg'),
    brand: 'Parx',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 1800,
  },
];

const Items = () => {
  return (
    <ScrollView>
      <View style={styles.itemContainer}>
        {DATA.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            brand={item.brand}
            description={item.description}
            price={item.price}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

export default Items;
