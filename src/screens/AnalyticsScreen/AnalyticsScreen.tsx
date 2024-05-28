import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ImageBackground, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { RootStackParamList } from '../../utils/types';
import React, { useState } from 'react';
import { propertiesData } from '../../utils/DataProperties';
import { styles } from '../HomeScreen/HomeScreen';

type AnalyticsScreenProps = NativeStackScreenProps<RootStackParamList, "AnalyticsScreen">;

export default function AnalyticsScreen(props: AnalyticsScreenProps) {
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
        <Text style={styles.headerText}>AnalyticsScreen</Text>
      </View>

      <ScrollView horizontal={true} style={styles.carousalContainer}>
        <TouchableHighlight onPress={() => {
          const propertyDataFind = propertiesData.find(property => property.id === 3);
          if (propertyDataFind) {
            props.navigation.push('PropertyOverViewScreen', { propertyData: propertyDataFind })
          }
        }}>
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
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          const propertyDataFind = propertiesData.find(property => property.id === 1);
          if (propertyDataFind) {
            props.navigation.push('PropertyOverViewScreen', { propertyData: propertyDataFind })
          }
        }}>
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
        </TouchableHighlight>

      </ScrollView>


    </ScrollView>
  );
}


