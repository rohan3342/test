import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import OfferCard from './OfferCard';
const DEALSDATA = require('../utils/dealsData.json');

class Home extends Component {
  render() {
    return (
      <ScrollView>
        {DEALSDATA.map((item, index) => (
          <OfferCard
            title={item.title}
            desc={item.desc}
            key={index}
            id={item.id}
            timeLeft={item.timeLeft}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
