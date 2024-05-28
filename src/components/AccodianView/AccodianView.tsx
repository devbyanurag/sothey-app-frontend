import React, { useRef, useState } from 'react'
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PropertyType } from '../../utils/types'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';


interface AccodianViewProps {
    propertyData: PropertyType,
    selectedFinance: boolean,
    handlesSetSelectedFinance: () => void
}

const AccodianView = ({ propertyData, selectedFinance, handlesSetSelectedFinance }: AccodianViewProps) => {
    const Images = {
        acc2: require('../../../assets/icons/accordian/accicon2.png'),
        acc3: require('../../../assets/icons/accordian/accicon3.png'),
        accicon1sub1: require('../../../assets/icons/accordian/accicon1sub1.png'),
        accicon1sub2: require('../../../assets/icons/accordian/acciconcoll2.png'),
        profileIImg: require('../../../assets/images/profileImg.png'),
        arrowRight: require('../../../assets/icons/arrowRight2.png'),
        leagalInfoBlur1: require('../../../assets/images/leagalInfoBlur1.png'),

    };
    const navigation = useNavigation();

    const [expandedAcc1, setExpandedAcc1] = useState(false);


    const animatedHeightAcc1 = useRef(new Animated.Value(70)).current;
    const animatedAccIcon1RefLeft = useRef(new Animated.Value(6)).current;
    const animatedAccIcon1RefRight = useRef(new Animated.Value(12)).current;

    const [expandedAcc2, setExpandedAcc2] = useState(false);
    const animatedHeightAcc2 = useRef(new Animated.Value(70)).current;

    const [expandedAcc3, setExpandedAcc3] = useState(false);
    const animatedHeightAcc3 = useRef(new Animated.Value(70)).current;

    const toggleExpandHeight = (index: number) => {
        let expandedState, setExpandedState, animatedHeight, toValueHeight;
        switch (index) {
            case 1:
                expandedState = expandedAcc1;
                setExpandedState = setExpandedAcc1;
                animatedHeight = animatedHeightAcc1;
                toValueHeight = expandedAcc1 ? 70 : 250;
                break;
            case 2:
                expandedState = expandedAcc2;
                setExpandedState = setExpandedAcc2;
                animatedHeight = animatedHeightAcc2;
                toValueHeight = expandedAcc2 ? 70 : 150; // different height
                break;
            case 3:
                expandedState = expandedAcc3;
                setExpandedState = setExpandedAcc3;
                animatedHeight = animatedHeightAcc3;
                toValueHeight = expandedAcc3 ? 70 : 350; // different height
                break;
            default:
                return;
        }

        Animated.timing(animatedHeight, {
            toValue: toValueHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();


        setExpandedState(!expandedState);
    };

    const toggleIconAni = () => {
        Animated.timing(animatedAccIcon1RefLeft, {
            toValue: expandedAcc1 ? 6 : 16,
            duration: 300,
            useNativeDriver: false,
        }).start();
        Animated.timing(animatedAccIcon1RefRight, {
            toValue: expandedAcc1 ? 12 : 7,
            duration: 300,
            useNativeDriver: false,
        }).start();

    }


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.accCon, { height: animatedHeightAcc1 }]}>
                <TouchableOpacity style={styles.accdisplayCon} onPress={() => {
                    toggleExpandHeight(1)
                    toggleIconAni()
                }} >
                    <View style={styles.iconCon} >
                        <View style={[styles.icon1Circle, expandedAcc1 && styles.icon1CircleActive]} >
                            <Animated.View style={[styles.accConDivup, expandedAcc1 && styles.accConDivupActive, { transform: [{ translateX: animatedAccIcon1RefLeft }] }]} />
                            <Animated.View style={[styles.accConDivDown, expandedAcc1 && styles.accConDivupActive, { transform: [{ translateX: animatedAccIcon1RefRight }] }]} />

                        </View>
                    </View>

                    <View style={styles.accTitleCon}>
                        <Text style={styles.accTitleConUp}>Financing Options</Text>
                        <Text style={styles.accTitleConDown}>Options for both Owners and Shareholders</Text>
                    </View>
                    {
                        !expandedAcc1
                            ? <MaterialIcons style={styles.accConArrow} name='keyboard-arrow-down' size={15} />
                            : <MaterialIcons style={styles.accConArrow} name='keyboard-arrow-up' size={15} onPress={() => toggleExpandHeight(1)} />
                    }
                </TouchableOpacity>
                <View style={styles.hiddenAcc1Con}>
                    <TouchableOpacity onPress={() => { handlesSetSelectedFinance() }} style={[styles.becomeShare, selectedFinance && styles.selectedFinance]}>
                        <View style={styles.becomeShareLeft}>
                            <Image source={Images.accicon1sub1} style={styles.accicon1sub1Img} />
                            <Text style={styles.becomeShareTxt1}>Become a shareholder</Text>
                            <Text style={styles.becomeShareTxt2}>Own a share of this stunning growth-driven property.</Text>
                            <Text style={styles.becomeShareTxt3}>
                                <Text style={styles.becomeShareTxt31}>1 Share</Text> (token) = {propertyData.pricePerShare}</Text>
                        </View>
                        <View style={styles.becomeShareRight}>
                            <Text style={styles.becomeShareRightTxt1}>
                                {propertyData.totalValue}
                            </Text>
                            <Text style={styles.becomeShareRightTxt2}> {propertyData.pricePerShare}</Text>

                        </View>
                    </TouchableOpacity>
                    <View style={styles.becomeShareNextCon}>
                        <Image source={Images.accicon1sub2} style={styles.becomeShareNextConImg} />
                        <View style={styles.becomeShareNextInnerCon}>
                            <Text style={styles.becomeShareTxt1}>Sotheby’s Financial Services</Text>
                            <Text style={styles.becomeShareTxt2}>Allow our team of experts to tailor the ideal financing option for you </Text>
                        </View>

                    </View>
                </View>
            </Animated.View>

            <Animated.View style={[styles.accCon, { height: animatedHeightAcc2 }]}>
                <TouchableOpacity style={styles.accdisplayCon} onPress={() => toggleExpandHeight(2)} >
                    <View style={styles.iconCon}>
                        <Image source={Images.acc2} style={styles.iconImg} resizeMode="cover" />
                    </View>

                    <View style={styles.accTitleCon}>
                        <Text style={styles.accTitleConUp}>Property Details</Text>
                        <Text style={styles.accTitleConDown}>Flat type, square footage, location benefits...</Text>
                    </View>
                    {
                        !expandedAcc2
                            ? <MaterialIcons style={styles.accConArrow} name='keyboard-arrow-down' size={15} />
                            : <MaterialIcons style={styles.accConArrow} name='keyboard-arrow-up' size={15} onPress={() => toggleExpandHeight(2)} />
                    }
                </TouchableOpacity>
                <View style={styles.hiddenAcc1Con}>
                    <View style={styles.becomeShareNextCon}>
                        <Image source={Images.accicon1sub2} style={styles.becomeShareNextConImg} />
                        <View style={styles.becomeShareNextInnerCon}>
                            <Text style={styles.becomeShareTxt1}>Sotheby’s Financial Services</Text>
                            <Text style={styles.becomeShareTxt2}>Allow our team of experts to tailor the ideal financing option for you </Text>
                        </View>

                    </View>
                </View>

            </Animated.View>

            <Animated.View style={[styles.accCon, { height: animatedHeightAcc3 }]}>
                <TouchableOpacity style={styles.accdisplayCon} onPress={() => toggleExpandHeight(3)} >
                    <View style={styles.iconCon}>
                        <Image source={Images.acc3} style={styles.iconImg} resizeMode="cover" />
                    </View>

                    <View style={styles.accTitleCon}>
                        <Text style={styles.accTitleConUp}>Financial Model</Text>
                        <Text style={styles.accTitleConDown}>Indicators for capital appreciation, monthly yield etc.</Text>
                    </View>
                    {
                        !expandedAcc3
                            ? <MaterialIcons style={styles.accConArrow} name='keyboard-arrow-down' size={15} />
                            : <MaterialIcons style={styles.accConArrow} name='keyboard-arrow-up' size={15} onPress={() => toggleExpandHeight(3)} />
                    }
                </TouchableOpacity>
                <View style={styles.hiddenAcc1Con}>
                    <Image source={Images.leagalInfoBlur1} style={styles.leagalInfoBlur1} resizeMode="contain" blurRadius={10} />
                    <View style={styles.joinusCon}>
                        <Text style={styles.joinusTxt1}>Join Us</Text>
                        <Text style={styles.joinusTxt2}>Learn more about this property and gain access to a wide pool of financing options - ones that could flair up not just your passion, but even your portfolio. </Text>
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('AuthScreen' as never);
                            }} style={styles.signupButton}>
                                <Text style={styles.joinusTxt3}>Sign Up </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Animated.View>
            <TouchableOpacity style={styles.specialistCon}>
                <Image source={Images.profileIImg} style={styles.profileImg} resizeMode="cover" />
                <View style={styles.specialistConMiddle}>
                    <Text style={styles.specialistConTxt1}>{propertyData.contactPerson}</Text>
                    <Text style={styles.specialistConTxt2}>Seek guidance and an expert opinion from our specialists.</Text>

                </View>
                <Image source={Images.arrowRight} style={styles.arrowRight} resizeMode="contain" />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    accCon: {
        backgroundColor: '#ffffff',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 25,
        display: 'flex',
        height: 70,
        marginHorizontal: 7,
        overflow: 'hidden'
    },
    accdisplayCon: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
    },
    iconCon: {
        width: 40,
        height: 40,
    },
    accTitleCon: {
        display: 'flex',
        flex: 1,
        marginLeft: 20,
    },
    accTitleConUp: {
        fontWeight: 'bold',
        fontSize: 14
    },
    accTitleConDown: {
        fontSize: 10,
        marginTop: 4,
        color: '#12121280',
    },
    accConArrow: {
        marginTop: 15
    },
    iconImg: {
        borderColor: '#121212',
        width: "100%",
        height: '100%',
    },
    icon1Circle: {
        borderWidth: 1,
        borderColor: '#121212',
        width: "100%",
        height: '100%',
        borderRadius: 50,
        position: 'relative',
    },
    accConDivup: {
        width: 15,
        height: 8,
        backgroundColor: '#121212',
        marginBottom: 1,
        position: 'absolute',
        top: 10,
        // left: 16

    },
    accConDivDown: {
        width: 20,
        height: 8,
        backgroundColor: '#121212',
        position: 'absolute',
        top: 20,
        // left: 7,
    },
    accConDivupActive: {
        backgroundColor: 'white',
    },
    icon1CircleActive: {
        backgroundColor: '#121212'
    },
    hiddenAcc1Con: {
        width: '100%',
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    },
    becomeShare: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#121212',
        paddingVertical: 10,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    selectedFinance: {
        backgroundColor: '#d9d9d980'
    },
    accicon1sub1Img: {
        height: 40,
        width: 40,
    },
    becomeShareTxt1: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    becomeShareTxt2: {
        fontSize: 10,
    },
    becomeShareTxt3: {
        fontSize: 10,
        color: '#12121280'
    },
    becomeShareTxt31: {
        textDecorationLine: 'underline'
    },
    becomeShareLeft: {
        flex: 1
    },
    becomeShareRight: {
        width: 70,
        display: 'flex',
        alignItems: 'center'
    },
    becomeShareRightTxt1: {
        fontSize: 10,
        color: '#12121280',
        textDecorationLine: 'line-through',
    },
    becomeShareRightTxt2: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    becomeShareNextCon: {
        width: '90%',
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    becomeShareNextConImg: {
        height: 20,
        width: 20
    }
    , becomeShareNextInnerCon: {
        marginLeft: 10
    },
    specialistCon: {
        backgroundColor: '#00172A',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 25,
        height: 70,
        marginHorizontal: 7,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 500
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    specialistConMiddle: {
        marginLeft: 10
    },
    specialistConTxt1: {
        color: "#fff",
        fontWeight: 'bold',
        marginBottom: 5
    },
    specialistConTxt2: {
        color: "#ffffff90",
        fontSize: 10
    },
    arrowRight: {
        width: 50,
        height: 50,
        marginLeft: 30
    },
    leagalInfoBlur1: {
        height: 250,
        position: 'absolute',
        width: 250
        , left: 30,
    },
    joinusCon: {
        backgroundColor: '#00172A',
        height: 170,
        paddingVertical: 20,
        paddingLeft: 40,
        paddingRight: 20
    },
    joinusTxt1: {
        color: '#ffffff'
        ,
        fontSize: 20,
        fontFamily: 'Butler'
    },
    joinusTxt2: {
        color: '#ffffff'
        ,
        fontSize: 10,
        marginTop: 20
    },
    joinusTxt3: {
        color: '#00172A'
        ,
        fontSize: 20,
        fontFamily: 'Butler'

    },

    signupButton: {
        alignSelf: 'flex-end',
        backgroundColor: '#EBE7D3',
        paddingHorizontal: 30,
        paddingVertical: 7,
        marginTop: 10

    }
})

export default AccodianView
