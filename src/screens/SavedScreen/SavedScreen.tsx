import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Fragment, useState } from 'react';


export default function SavedScreen() {


  const [activeFragCon, setActiveFragCon] = useState<number | null>(null);

  const handleFragCon = (index: number) => {
    setActiveFragCon(index);
  };

  const propertiesData = [
    {
      id: 1,
      image: require('../../../assets/images/HomeContainer/scrollHome1.png'),
      location: 'Pali Hill, Bandra West, Mumbai, MH, India',
      totalValue: '$1,796,192',
      startingAt: '$17,961.92++',
      peopleRegistered: '84/100',
      details: ['4 Bedrooms', '4 Bath', '2,900 Sqft', '0.13 Acre(s)'],
      featureFrag: 0,
    },
    {
      id: 2,
      image: require('../../../assets/images/HomeContainer/scrollHome2.png'),
      location: 'Vasant Vihar, New Delhi, DL, India ',
      totalValue: '$1,679,261',
      startingAt: '$83,963++ ',
      peopleRegistered: '4/20',
      details: ['4 Bedrooms', '4 Bath', '2,900 Sqft', '0.13 Acre(s)'],
      featureFrag: 0,
    },
    {
      id: 3,
      image: require('../../../assets/images/HomeContainer/carousal1.png'),
      location: 'Jor Bagh, New Delhi, DL, India ',
      totalValue: '$1,679,261',
      startingAt: '$83,963++ ',
      peopleRegistered: '4/20',
      details: ['2 Bedrooms', '4 Bath', '2,900 Sqft', '0.13 Acre(s)'],
      featureFrag: 0,
    },
    {
      id: 4,
      image: require('../../../assets/images/HomeContainer/carousal1.png'),
      location: 'Jor Bagh, New Delhi, DL, India ',
      totalValue: '$1,679,261',
      startingAt: '$83,963++ ',
      peopleRegistered: '4/20',
      details: ['2 Bedrooms', '4 Bath', '2,900 Sqft', '0.13 Acre(s)'],
      featureFrag: 1,
    },
    {
      id: 5,
      image: require('../../../assets/images/HomeContainer/scrollHome2.png'),
      location: 'Vasant Vihar, New Delhi, DL, India ',
      totalValue: '$1,679,261',
      startingAt: '$83,963++ ',
      peopleRegistered: '4/20',
      details: ['4 Bedrooms', '4 Bath', '2,900 Sqft', '0.13 Acre(s)'],
      featureFrag: 2,
    },
    // Add more propertyDataVal objects here
  ];


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Saved</Text>
      </View>
      

      
      <View style={atyles.propList}>
        {propertiesData.map((propertyDataVal) => (
          <TouchableOpacity
            key={propertyDataVal.id}
            style={[
              atyles.propCon,
              activeFragCon === propertyDataVal.id && atyles.propConActive
            ]}
            onPress={() => { handleFragCon(propertyDataVal.id) }}>
            <Image source={propertyDataVal.image} style={[
              atyles.propImg,
              activeFragCon === propertyDataVal.id && atyles.propImgActive
            ]} />
            <View style={atyles.propDesCon}>
              <Text style={atyles.propDescHeading}>
                <Text style={atyles.propDescHeadingBol}>{propertyDataVal.location.split(', ')[0]},</Text> {propertyDataVal.location.split(', ').slice(1).join(', ')}
              </Text>
              <View style={atyles.propDesValCon1}>
                <View style={atyles.propDesValInnerCon1}>
                  <Text style={atyles.propInnerKey}>Total Value</Text>
                  <Text style={atyles.propInnerCon1Val}>{propertyDataVal.totalValue}</Text>
                </View>
                <View style={atyles.propDesValInnerCon1}>
                  <Text style={atyles.propInnerKey}>Starting at </Text>
                  <Text style={atyles.propInnerCon1Val}>{propertyDataVal.startingAt}</Text>
                </View>
                <View style={atyles.propDesValInnerCon1}>
                  <Text style={atyles.propInnerKey}>People Registered</Text>
                  <Text style={atyles.propInnerCon1Val}>{propertyDataVal.peopleRegistered.split('/')[0]}<Text style={atyles.propInnerCon1ValBold}>/{propertyDataVal.peopleRegistered.split('/')[1]}</Text></Text>
                </View>
              </View>
              <View style={[atyles.propDesCon2, activeFragCon !== propertyDataVal.id && atyles.displayNone]}>
                {propertyDataVal.details.map((detail, index) => (
                  <Fragment key={index}>
                    <Text style={atyles.propDesCon2Text}>{detail}</Text>
                    {index < propertyDataVal.details.length - 1 && <View style={atyles.propDesCon2Dot}></View>}
                  </Fragment>
                ))}
              </View>
              <View style={[atyles.propDesCon3, activeFragCon !== propertyDataVal.id && atyles.displayNone]}>
                <TouchableOpacity style={atyles.propDesCon3btn}>
                  <Text style={atyles.propDesCon3btnTxt}>LEARN MORE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}

      </View>


    </ScrollView>
  );
}

const atyles = StyleSheet.create({
  propList: {
    display: 'flex',
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
  }
  , propCon: {
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
    ,
  },
  propConActive: {
    borderWidth: 1,
    borderColor: 'black',

  },
  propImg: {
    height: 95,
    width: 140
  },
  propImgActive: {
    height: 130
  },
  propDesCon: {
    display: 'flex',
    flex: 1,
    marginLeft: 10
  }
  , propDescHeading: {
    fontSize: 12,
    fontFamily: 'Butler',
    letterSpacing: -0.7
  },
  propDescHeadingBol: {
    fontFamily: 'ButlerBold',
  },
  propDesValCon1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  propDesValInnerCon1: {
    flex: 1,
    marginTop: 20
  },
  propInnerKey: {
    fontSize: 8,
    color: '#12121260'
  },
  propInnerCon1Val: {
    fontSize: 8,
    fontWeight: '500'

  },
  propInnerCon1ValBold: {
    color: '#12121280'
  },
  displayNone: {
    display: 'none'
  },
  propDesCon2: {
    display: 'flex',
    flexDirection: 'row'
    , marginTop: 20,
    alignItems: 'center'
  },
  propDesCon2Text: {
    fontSize: 8,
    color: '#12121295'
  },
  propDesCon2Dot: {
    height: 2,
    width: 2,
    backgroundColor: '#12121295',
    marginHorizontal: 5
  },
  propDesCon3: {
    width: "100%",
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: 20
  },
  propDesCon3btn: {
    width: 160,
    backgroundColor: 'black',
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  propDesCon3btnTxt: {
    color: 'white',
    fontSize: 8,
    fontWeight: '500'

  }
})

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
