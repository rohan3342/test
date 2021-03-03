import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Image, ScrollView, View,  Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class MovieHome extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        {/* --------------- Top Bar ---------------*/}
        <View style={styles.Bar}>
          <FontAwesome5 name="chevron-left" size={20} regular color={'#3c3c3c'}/>
          <Text style={[styles.BarText,styles.lightBlack]}>Product Detailes</Text>
          <FontAwesome5 name="bookmark" size={20} regular color={'#3c3c3c'}/>
        </View>

        <ScrollView style={styles.scrollViewContainer}>
          
          {/* --------------- Main View --------------- */}
          <View style={styles.mainView}>
            <Image style={styles.image} source={require('../asset/poster.png')} />
            <Text style={[styles.headingText, styles.textcenter, styles.lightBlack]}>
              How To Train Your Dragon: The Hidden World
            </Text>
            <Text style={[styles.textcenter,styles.lightBlack]}>Part III</Text>
            <View style={styles.buttonGroup}>
              <Text style={styles.smallBtn}>Adventure</Text>
              <Text style={styles.smallBtn}>Family</Text>
              <Text style={styles.smallBtn}>Fantasy</Text>
            </View>
          </View>

          {/* --------------- Border --------------- */}
          <View style={styles.borderView}></View>

          {/* --------------- Bottom View ---------------*/}
          <View>
            <View style={styles.movieInfo}>
              
              <View style={styles.movieInfoItem}>
                <Text style={styles.movieInfoLightText}>Year</Text>
                <Text style={styles.movieInfoBoldText}>2019</Text>
              </View>
              
              <View style={styles.movieInfoItem}>
                <Text style={styles.movieInfoLightText}>Country</Text>
                <Text style={styles.movieInfoBoldText}>USA</Text>
              </View>
              
              <View style={styles.movieInfoItem}>
                <Text style={styles.movieInfoLightText}>Length</Text>
                <Text style={styles.movieInfoBoldText}>112 min</Text>
              </View>
            
            </View>

            <View style={styles.movieDetails}>
              
              <Text style={[styles.movieDetailsHeader,styles.lightBlack]}>About Movie</Text>
              <Text style={styles.movieDetailsText}>
                When Hiccup discovers Toothless isn't the only Night Fury, he
                must seek "The Hidden World", a secret Dragon Utopia before a
                hired tyrant named Grimmel finds it first.
              </Text>
              
              <Text style={[styles.movieDetailsHeader ,styles.lightBlack]} >Screenshots</Text>
              
              <View style={styles.screenshots}>
                <Image style={styles.screenshot} source={require('../asset/ss1.jpg')} />
                <Image style={styles.screenshot} source={require('../asset/ss2.jpg')} />
              </View>
              
              <View style={styles.btnView}>
                <Text style={styles.buyBtn}>BUY TICKET</Text>
              </View>
            
            </View>
          </View>

        </ScrollView>
      
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
	
  Bar: {
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 10,
    backgroundColor: 'white'
  },

  BarText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '100'
  },
	
  container: {
    flex: 1,
	},

	scrollViewContainer: {
    backgroundColor: '#F8F9FD',
	},

	textcenter: {
    textAlign: 'center',
	},
  
  lightBlack: {
    color: '#3c3c3c'
  },

  borderView: {
    alignSelf:'center',
    width: '95%',
    borderBottomColor:'#ededed',
    borderBottomWidth:1,
    marginBottom: 20
  },
  
	mainView: {
		width: '70%',
		alignSelf: 'center',
	},

  image: {
    marginVertical: 30,
    borderRadius: 10,
    width: '100%', 
    height: 350
  },

	headingText: {
		marginBottom: 10,
		fontSize: 20,
	},
	
	buttonGroup: {
		marginTop: 20,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 70,
	},
	
	smallBtn: {
		backgroundColor: '#2F80FC',
		marginHorizontal: 5,
		paddingHorizontal: 15,
		paddingVertical: 6,
		fontSize: 12,
		color: 'white',
		borderRadius: 15,
	},

	movieInfo: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
    marginBottom: 10
	},
	
  movieInfoItem: {
    marginHorizontal: 10,
	},
  
  movieInfoLightText: {
    textAlign:'center',
    color: '#8a8a8a',
    fontSize: 14,
    marginBottom: 4
  },

  movieInfoBoldText: {
    textAlign: 'center',
    fontSize:16,
    color: '#3c3c3c'
  },
  
  movieDetails: {
    paddingHorizontal: 20
  },

  movieDetailsHeader: {
    marginVertical:20,
    fontSize: 16
  },

  movieDetailsText: {
    color: '#8a8a8a'
  },

  screenshots: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:-10,
  },

  screenshot:{
    height: 140,
    width: '48%',
    borderRadius:15
  },
  
  btnView:{
    backgroundColor: '#2F68FB',
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 12,
    borderRadius: 10
  },

  buyBtn: {
    color: 'white',
    textAlign: 'center'
  }

});

export default MovieHome;
