import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { PropertyType, RootStackParamList } from '../../utils/types';
import React, { Fragment, useState } from 'react';
import { propertiesData } from '../../utils/DataProperties';
import { styles } from '../HomeScreen/HomeScreen';

type OrderScreenProps = NativeStackScreenProps<RootStackParamList, "OrderScreen">;

export default function OrderScreen(props: OrderScreenProps) {
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
        <Text style={styles.headerText}>OrderScreen</Text>
      </View>

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
      <View style={styles.propList}>
        {propertiesData.filter((propertyDataVal: PropertyType) => {
          return propertyDataVal.featureFrag === activeIndexFeatureFrag;
        }).map((propertyDataVal: PropertyType) => (
          <TouchableOpacity
            key={propertyDataVal.id}
            style={[
              styles.propCon,
              activeFragCon === propertyDataVal.id && styles.propConActive
            ]}
            onPress={() => { handleFragCon(propertyDataVal.id) }}>
            <Image source={propertyDataVal.image} style={[
              styles.propImg,
              activeFragCon === propertyDataVal.id && styles.propImgActive
            ]} />
            <View style={styles.propDesCon}>
              <Text style={styles.propDescHeading}>
                <Text style={styles.propDescHeadingBol}>{propertyDataVal.location.split(', ')[0]},</Text> {propertyDataVal.location.split(', ').slice(1).join(', ')}
              </Text>
              <View style={styles.propDesValCon1}>
                <View style={styles.propDesValInnerCon1}>
                  <Text style={styles.propInnerKey}>Total Value</Text>
                  <Text style={styles.propInnerCon1Val}>{propertyDataVal.totalValue}</Text>
                </View>
                <View style={styles.propDesValInnerCon1}>
                  <Text style={styles.propInnerKey}>Starting at </Text>
                  <Text style={styles.propInnerCon1Val}>{propertyDataVal.startingAt}</Text>
                </View>
                <View style={styles.propDesValInnerCon1}>
                  <Text style={styles.propInnerKey}>People Registered</Text>
                  <Text style={styles.propInnerCon1Val}>{propertyDataVal.peopleRegistered}<Text style={styles.propInnerCon1ValBold}>/{propertyDataVal.totalSpots}</Text></Text>
                </View>
              </View>
              <View style={[styles.propDesCon2, activeFragCon !== propertyDataVal.id && styles.displayNone]}>
                {propertyDataVal.details.map((detail, index) => (
                  <Fragment key={index}>
                    <Text style={styles.propDesCon2Text}>{detail}</Text>
                    {index < propertyDataVal.details.length - 1 && <View style={styles.propDesCon2Dot}></View>}
                  </Fragment>
                ))}
              </View>
              <View style={[styles.propDesCon3, activeFragCon !== propertyDataVal.id && styles.displayNone]}>
                <TouchableOpacity style={styles.propDesCon3btn} onPress={() => {
                  props.navigation.push('PropertyOverViewScreen', { propertyData: propertyDataVal });

                }}>
                  <Text style={styles.propDesCon3btnTxt}>LEARN MORE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}

      </View>


    </ScrollView>
  );
}




