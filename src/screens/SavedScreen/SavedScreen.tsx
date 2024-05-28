import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { PropertyType, RootStackParamList } from '../../utils/types';
import React, { Fragment, useState } from 'react';
import { propertiesData } from '../../utils/DataProperties';
import { styles } from '../HomeScreen/HomeScreen';

type SavedScreenProps = NativeStackScreenProps<RootStackParamList, "SavedScreen">;

export default function SavedScreen(props: SavedScreenProps) {
  const [activeIndexFeatureFrag, setActiveIndexFeatureFrag] = useState<number>(0);


  const [activeFragCon, setActiveFragCon] = useState<number | null>(null);

  const handleFragCon = (index: number) => {
    setActiveFragCon(index);
  };

  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SavedScreen</Text>
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




