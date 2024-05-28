import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PropertyType, RootStackParamList } from '../../utils/types';
import React, { Fragment, useState } from 'react';
import { propertiesData } from '../../utils/DataProperties';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export default function HomeScreen(props: HomeScreenProps) {
  const Images = {
    carousal1: require('../../../assets/images/HomeContainer/carousal1.png'),
    carousal2: require('../../../assets/images/HomeContainer/carousal2.png'),
    checkIcon: require('../../../assets/icons/check.png'),
    enterIcon: require('../../../assets/icons/enter.png'),
    closeIcon: require('../../../assets/icons/close.png')
  };
  const [activeIndexFeatureFrag, setActiveIndexFeatureFrag] = useState<number>(0);

  const handleFreatureFragPress = (index: number) => {
    setActiveIndexFeatureFrag(index);
  };

  const [activeFragCon, setActiveFragCon] = useState<number | null>(null);

  const handleFragCon = (index: number) => {
    setActiveFragCon(index);
  };

  const featureFrag = [
    "ON-GOING BIDS", "COMING SOON", 'CLOSED'
  ]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DISCOVER</Text>
      </View>
      <View style={styles.topicTextheadingCon}>
        <Text style={styles.topicTextheading}>Trending Properties</Text>
        <Text style={styles.topicTextheadingpara1}>Check out prime real estate shares that are being noticed</Text>
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

      <Text style={styles.featuredTxt}>Featured Properties</Text>
      <View style={styles.featuredFragCon}>
        {featureFrag.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.featuredFrag, activeIndexFeatureFrag === index && styles.activeFeaturedFrag]}
            onPress={() => handleFreatureFragPress(index)}
          >
            <Text style={[styles.featuredFragTxt, activeIndexFeatureFrag === index && styles.activeFeaturedFragTxt]}>{data}</Text>
          </TouchableOpacity>
        ))}

      </View>
      <View style={atyles.propList}>
        {propertiesData.filter((propertyDataVal: PropertyType) => {
          return propertyDataVal.featureFrag === activeIndexFeatureFrag;
        }).map((propertyDataVal: PropertyType) => (
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
                  <Text style={atyles.propInnerCon1Val}>{propertyDataVal.peopleRegistered}<Text style={atyles.propInnerCon1ValBold}>/{propertyDataVal.totalSpots}</Text></Text>
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
                <TouchableOpacity style={atyles.propDesCon3btn} onPress={() => {
                  props.navigation.push('PropertyOverViewScreen', { propertyData: propertyDataVal });

                }}>
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
