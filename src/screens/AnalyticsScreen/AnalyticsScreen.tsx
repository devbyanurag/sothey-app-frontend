import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, {  } from 'react';

export default function AnalyticsScreen() {
  const Images = {
    carousal1: require('../../../assets/images/HomeContainer/carousal1.png'),
    carousal2: require('../../../assets/images/HomeContainer/carousal2.png'),
    checkIcon: require('../../../assets/icons/check.png'),
    enterIcon: require('../../../assets/icons/enter.png'),
    closeIcon: require('../../../assets/icons/close.png')
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Analytics</Text>
      </View>
      
      <ScrollView horizontal={true} style={styles.carousalContainer}>
        <ImageBackground source={Images.carousal1} resizeMode="cover" style={[styles.carousalCard, styles.carousalCard1]}>
          <Image source={Images.carousal1} style={styles.imageWithOpacity} />
          <View style={styles.carousalTop}>
            <Text style={styles.carousalTopTxt1}>Jor Bagh</Text>
            <Text style={styles.carousalTopTxt2}>New Delhi, DL, India</Text>
          </View>
          <View style={styles.carousalmiddle}>
            <Text style={styles.carousalmiddleText}>2,900 Sqft</Text>
            <View style={styles.carousalmiddleDot}></View>
            <Text style={styles.carousalmiddleText}>0.13 Acre(s)</Text>

          </View>
          <View style={styles.carousalbottom}>
            <View style={styles.carousalCardBox1}>
              <Image source={Images.checkIcon} style={styles.carousalCardBox1Img} />
              <Text style={styles.carousalCardBox1Txt}>Fractional Investment Available </Text>
            </View>
            <View style={styles.carousalCardBox2}>
              <Image source={Images.enterIcon} style={styles.carousalCardBox2Img} />
              <Text style={styles.carousalCardBox2Txt}>1,207 people registered </Text>
            </View>
          </View>
        </ImageBackground>
        <ImageBackground source={Images.carousal2} resizeMode="cover" style={[styles.carousalCard]}>
          <Image source={Images.carousal2} style={styles.imageWithOpacity} />
          <View style={styles.carousalTop}>
            <Text style={styles.carousalTopTxt1}>Civil</Text>
            <Text style={styles.carousalTopTxt2}>New Delhi, DL, India</Text>
          </View>
          <View style={styles.carousalmiddle}>
            <Text style={styles.carousalmiddleText}>14,961 Sq</Text>
            <View style={styles.carousalmiddleDot}></View>
            <Text style={styles.carousalmiddleText}>0.13 Acre(s)</Text>

          </View>
          <View style={styles.carousalbottom}>
            <View style={styles.carousalCardBox1}>
              <Image source={Images.closeIcon} style={styles.carousalCardBox1Img} />
              <Text style={styles.carousalCardBox1Txt}>Fractional Investment UnAvailable </Text>
            </View>
            <View style={styles.carousalCardBox2}>
              <Image source={Images.enterIcon} style={styles.carousalCardBox2Img} />
              <Text style={styles.carousalCardBox2Txt}>1,207 people registered </Text>
            </View>
          </View>
        </ImageBackground>

      </ScrollView>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    paddingHorizontal: 40,
    borderBottomWidth: 1,
    borderColor: '#121212',
    display: 'flex',
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: 'CormorantItalic',
    fontSize: 32,
  },
  topicTextheadingCon: {
    marginTop: 40,
    paddingHorizontal: 40,

  },
  topicTextheading: {
    fontSize: 18,
    fontWeight: '500'
  },
  topicTextheadingpara1: {
    fontSize: 10,
    fontWeight: '400',
    color: '#12121260'
  },
  carousalContainer: {
    flex: 1,
    height: 220,
    marginVertical: 20

  },

  carousalCard: {
    height: '100%',
    width: 340,
    marginRight: 15,
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageWithOpacity: {
    ...StyleSheet.absoluteFillObject,
    width: 340,
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.8
  },
  carousalCard1: {
    marginLeft: 40,
  },
  carousalbottom: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    marginLeft: 20
  },
  carousalCardBox1: {
    height: 20,
    width: 170,
    marginRight: 10,
    backgroundColor: '#EBE7D365',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  }
  , carousalCardBox1Img: {
    height: 15,
    width: 15,
    marginRight: 5
  },
  carousalCardBox1Txt: {
    fontSize: 10,
    color: '#EBE7D3'
  },
  carousalCardBox2: {
    height: 20,
    width: 130,
    marginRight: 10,
    backgroundColor: '#EBE7D3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  }
  , carousalCardBox2Img: {
    height: 12,
    width: 12,
    marginRight: 5
  },
  carousalCardBox2Txt: {
    fontSize: 10,
  },
  carousalmiddle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginVertical: 10
  },
  carousalmiddleText: {
    fontSize: 8,
    color: '#EBE7D3'
  },
  carousalmiddleDot: {
    height: 2,
    width: 2,
    backgroundColor: '#EBE7D3',
    marginHorizontal: 7
  },
  carousalTop: {
    display: 'flex',
    marginLeft: 20
  },
  carousalTopTxt1: {
    fontSize: 20,
    fontFamily: 'ButlerBold',
    color: 'white',
  },
  carousalTopTxt2: {
    fontSize: 20,
    fontFamily: 'ButlerLight',
    color: 'white',
  },
  featuredTxt: {
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 50,
    marginVertical: 30

  },
  featuredFragCon: {
    width: "100%",
    paddingHorizontal: 50,
    display: 'flex',
    flexDirection: 'row',
    height: 20
  },
  featuredFrag: {
    flex: 1,
    borderBottomColor: '#D6D2C033',
    borderBottomWidth: 3,
    marginHorizontal: 2,
    display: 'flex',
    alignItems: 'center'
  },
  activeFeaturedFrag: {
    borderBottomColor: 'black',
  },
  featuredFragTxt: {
    color: '#D6D2C0',
    fontSize: 8
  },
  activeFeaturedFragTxt: {
    color: 'black',

  },

});
