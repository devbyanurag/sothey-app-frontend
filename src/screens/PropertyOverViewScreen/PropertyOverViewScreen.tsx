import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Animated, Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../utils/types';
import React, { useRef, useState } from 'react';
import FontistoIcon from '@expo/vector-icons/Fontisto'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AccodianView from '../../components/AccodianView/AccodianView';





type PropertyOverViewScreenProps = NativeStackScreenProps<RootStackParamList, "PropertyOverViewScreen">;


export default function PropertyOverViewScreen(props: PropertyOverViewScreenProps) {
    const { propertyData } = props.route.params;
    const [expandedPara, setExpandedPara] = useState(false);
    const animatedHeightPara = useRef(new Animated.Value(130)).current;
    const [selectedFinance, setSelectedFinance] = useState(false);

    const handlesSetSelectedFinance = () => {
        setSelectedFinance(!selectedFinance)
    }

    const toggleExpandPara = () => {
        Animated.timing(animatedHeightPara, {
            toValue: expandedPara ? 130 : 180,
            duration: 300,
            useNativeDriver: false,
        }).start();

        setExpandedPara(!expandedPara);
    };
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView style={styles.container} >

                <ImageBackground source={propertyData.image} resizeMode="cover" style={[styles.flexImgCon]}>
                    <View style={styles.flexImgInnerCon}>
                        <View style={styles.flexImgInnerUp}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.iconCon}>
                                <FontistoIcon name='arrow-left-l' color={'white'} size={15} />
                            </TouchableOpacity>
                            <View style={styles.flexImgInnerUpRight}>
                                <TouchableOpacity onPress={() => { }} style={styles.iconCon}>
                                    <AntDesign name='upload' color={'white'} size={15} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { }} style={styles.iconCon}>
                                    <FontAwesome name='bookmark-o' color={'white'} size={15} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.flexImgInnerDown}>
                            <Text style={styles.propDescHeadingLight}>{propertyData.location.split(', ')[0]},</Text>
                            <Text style={styles.propDescHeading}>
                                {propertyData.location.split(', ').slice(1).join(', ')}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                <Animated.View style={[styles.descTextCon, { height: animatedHeightPara }]}>
                    <Text style={styles.descTextheading}>
                        {propertyData.description}
                    </Text>


                    <Text style={styles.descTextPara} >
                        This exquisite first-floor apartment is perched on a 515 sqm (617 sq. yds.) plot; the largest plot size of its kind in Jor Bagh, outside the ASI’s limitations and in close proximity to Lodhi Gardens. The apartment faces and has access to a park in the front and the rear providing residents with verdant & serene green views.
                        {"\n\n"}
                        This recently built 275 sqm (~2,960 sq. ft.) apartment has a beautiful living...
                        {expandedPara ? <Text>room with ample natural light, a spacious kitchen equipped with modern appliances, three bedrooms with en-suite bathrooms, a study room, and a utility room. The apartment is elegantly designed with high-quality finishes and offers stunning views of the surrounding greenery.
                            <Text style={styles.readMore} onPress={toggleExpandPara}>Read Less</Text>
                        </Text> : <Text style={styles.readMore} onPress={toggleExpandPara}>Read More</Text>}
                    </Text>

                    {/* <TouchableOpacity onPress={toggleExpandPara}>
                    <Text style={styles.readMore}>{expandedPara ? 'Read Less' : 'Read More'}</Text>
                </TouchableOpacity> */}

                </Animated.View>

                <View style={styles.valuesCon}>


                    <View style={styles.valuesCon1}>
                        <Text style={styles.valuesConTxtup}>Total Value</Text>
                        <Text style={styles.valuesConTxtdown}>{propertyData.totalValue}</Text>

                    </View>
                    <View style={styles.valuesCon2}>
                        <Text style={styles.valuesConTxtup}>Price per share</Text>
                        <Text style={styles.valuesConTxtdown}>{propertyData.pricePerShare}</Text>

                    </View>
                    <View style={styles.valuesCon1}>

                        <Text style={styles.valuesConTxtup}>Available spots</Text>
                        <Text style={styles.valuesConTxtdown}>{propertyData.totalSpots - propertyData.peopleRegistered}</Text>
                    </View>
                </View>
                <View style={styles.fundsEndCon}>
                    <Text style={styles.fundsEndTxt1}>Fund Raising Timeline</Text>
                    <View style={styles.fundsEndTimeCon}>
                        <AntDesign name='clockcircleo' size={10} />
                        <Text style={styles.fundsEndTimeTxt2}>Ends in <Text style={styles.fundsEndTimeTxt2Bold}>12 Days</Text>
                        </Text>

                    </View>
                    <View style={styles.loadingCon} >
                        <View style={styles.loadingConInner} />
                    </View>

                </View>
                <AccodianView propertyData={propertyData} selectedFinance={selectedFinance} handlesSetSelectedFinance={handlesSetSelectedFinance} />
            </ScrollView>
            {selectedFinance && <View style={styles.confirmSpotCon}>
                <TouchableOpacity style={styles.confirmSpot}>
                    <Text style={styles.confirmSpotTxt}>CONFIRM SPOT</Text>
                    <Image source={require('../../../assets/icons/arrowRight2.png')} style={styles.arrowRight} resizeMode="cover" />
                </TouchableOpacity>
            </View>}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginTop: -4,
    },
    confirmSpotCon: {
        position: 'absolute',
        backgroundColor: '#fff',
        height: 100,
        width: '100%',
        zIndex: 1,
        bottom: 0,
        paddingVertical: 20,
        display: 'flex',
        alignItems: 'center',
    },
    confirmSpot: {
        width: "90%",
        height: '100%',
        backgroundColor: "#121212",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    confirmSpotTxt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '300'
    },
    arrowRight: {
        height: 30,
        width: 50,
        marginLeft:20
    },
    flexImgCon: {
        height: 220,
        width: "100%",
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    flexImgInnerCon: {
        width: '90%',
        height: '90%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    flexImgInnerUp: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    iconCon: {
        backgroundColor: '#12121280',
        padding: 10,
        borderRadius: 50,
        height: 35,
        width: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexImgInnerUpRight: {
        display: 'flex',
        flexDirection: 'row',
        width: 80,
        justifyContent: 'space-between'
    },
    flexImgInnerDown: {

    },
    propDescHeading: {
        fontSize: 32,
        letterSpacing: -0.7,
        color: 'white',
        fontFamily: 'Butler',
        marginLeft: 20

    },
    propDescHeadingLight: {
        fontFamily: 'CormorantItalic',
        fontSize: 40,
        letterSpacing: -0.7,
        color: 'white',
    },

    descTextCon: {
        backgroundColor: '#ffffff',
        marginHorizontal: 7,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        overflow: 'hidden',
        width: "100%"
    },
    descTextheading: {
        fontFamily: 'ButlerBold',
        letterSpacing: -0.5,
        fontSize: 16

    },
    descTextPara: {
        fontFamily: 'Butler',
        letterSpacing: -0.5,
        color: '#12121280',
        fontSize: 11,
        marginTop: 15
    },
    readMore: {
        fontFamily: 'Roboto',
        letterSpacing: -0.5,
        color: '#000000',
        fontSize: 11,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    valuesCon: {
        backgroundColor: '#ffffff',
        marginHorizontal: 7,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        display: 'flex',
        flexDirection: 'row'
    },
    valuesCon1: {
        flex: 1,
    },
    valuesCon2: {
        alignItems: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#12121280",
        marginHorizontal: 35,
        paddingHorizontal: 35,
        flex: 1,

    },
    valuesConTxtup: {
        color: '#12121280',
        fontSize: 10
    },
    valuesConTxtdown: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 2
    },
    fundsEndCon: {
        backgroundColor: '#ffffff',
        marginHorizontal: 7,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        display: 'flex',
    },
    fundsEndTxt1: {
        color: '#12121280',
        fontSize: 10

    }
    , fundsEndTimeCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    fundsEndTimeTxt2: {
        fontSize: 12,
        marginLeft: 5
    },
    fundsEndTimeTxt2Bold: {
        fontWeight: 'bold'
    },
    loadingCon: {
        width: "100%",
        height: 8,
        backgroundColor: '#12121280'
    },
    loadingConInner: {
        height: '100%',
        width: '60%',
        backgroundColor: '#000'
    },




});
