import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

class OfferCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: moment.duration().add(this.props.timeLeft),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: false,
    };
  }

  updateTimer = () => {
    const x = setInterval(() => {
      let { countdown } = this.state;

      if (countdown <= 0) {
        clearInterval(x);
        this.setState({ isExpired: true });
      } else {
        countdown = countdown.subtract(1, 's');
        const days = countdown.days();
        const hours = countdown.hours();
        const mins = countdown.minutes();
        const secs = countdown.seconds();

        this.setState({
          days,
          hours,
          mins,
          secs,
          countdown,
        });
      }
    }, 1000);
  };

  componentDidMount() {
    this.updateTimer();
  }

  render() {
    const { title, id, desc } = this.props;
    const { hours, mins, secs, isExpired } = this.state;
    return (
      <View key={id} style={styles.container}>
        <View
          style={[isExpired ? styles.disableContainer : styles.hideContianer]}>
          <Text style={styles.ExpiredTxt}>EXPIRED!</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.titleTxt}>{title}</Text>
          <Text style={styles.descTxt}>{desc}</Text>
        </View>
        <View style={styles.timerContainer}>
          <Text
            style={[styles.timerTxt, isExpired ? styles.offerExpired : null]}>
            {!isExpired
              ? `Offer Valid Till: ${hours} : ${mins} : ${secs}`
              : 'Expired'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: 'skyblue',
    marginVertical: 10,
    marginHorizontal: 15,
    height: 200,
    borderRadius: 10,
  },
  mainContainer: {
    padding: 20,
  },
  timerContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ccc',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  timerTxt: {
    color: '#000',
    fontSize: 18,
    fontWeight: '300',
  },
  offerExpired: {
    color: 'red',
  },
  titleTxt: {
    fontSize: 22,
    fontWeight: '800',
    color: 'white',
  },
  descTxt: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
  },
  hideContianer: {
    position: 'absolute',
    opacity: 0,
  },
  disableContainer: {
    opacity: 0.9,
    position: 'absolute',
    backgroundColor: '#aaa',
    zIndex: 1,
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  ExpiredTxt: {
    color: '#333',
    top: 75,
    fontSize: 30,
    alignSelf: 'center',
  },
});

export default OfferCard;
