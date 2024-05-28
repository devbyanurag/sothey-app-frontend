import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const onPress = (index: number) => navigation.navigate(state.routeNames[index]);

    return (
        <View style={styles.tabBarContainer}>
            <TouchableOpacity style={styles.tabBarItemCon} onPress={() => { onPress(0) }}>
                <View style={[styles.tabBarIconcon, styles.tranform40]}>
                    <View style={[styles.tabBarIcon1Circle, state.index === 0 && styles.active]}>
                    </View>
                    <View style={[styles.tabBarIcon1div, state.index === 0 && styles.active]}>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabBarItemCon} onPress={() => { onPress(1) }}>
                <View style={[styles.tabBarIconcon, styles.tranform40]}>
                    <View style={styles.tabBarIcon2up}>
                        <View style={[styles.tabBarIcon2up1, state.index === 1 && styles.active]}>
                        </View>
                        <View style={[styles.tabBarIcon2up2, state.index === 1 && styles.active]}>
                        </View>
                        <View style={[styles.tabBarIcon2up1, state.index === 1 && styles.active]}>
                        </View>
                    </View>
                    <View style={styles.tabBarIcon2down}>
                    </View>

                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabBarItemCon} onPress={() => { onPress(2) }}>
                <View style={styles.tabBarIconcon}>
                    <View style={styles.tabBarIcon3con}>
                        <View style={[styles.tabBarIcon3div1, state.index === 2 && styles.active]}>
                        </View>
                        <View style={[styles.tabBarIcon3div2, state.index === 2 && styles.active]}>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabBarItemCon} onPress={() => { onPress(3) }}>
                <View style={styles.tabBarIconcon}>
                    <View style={[styles.tabBarIcon4div, state.index === 3 && styles.active]} />

                    <View style={[styles.tabBarIcon4triangle, state.index === 3 && styles.tabBarIcon4triangleActive]} />

                </View>
            </TouchableOpacity>
        </View >
    );
};

export default CustomTabBar;

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        backgroundColor: '#000',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20
    },
    tabBarItemCon: {
        flex: 1,
        alignItems: 'center',
        height: "100%",
        justifyContent: 'center'
    },
    tabBarIconcon: {
        height: 40,
        width: 40,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',

    },
    tranform40: {
        transform: [{ rotate: '-40deg' }]
    },
    tabBarIcon1Circle: {
        height: 15,
        width: 15,
        backgroundColor: '#ffffff80',
        borderRadius: 50,
    }
    , tabBarIcon1div: {
        height: 5,
        width: 3,
        backgroundColor: '#ffffff80',
        marginTop: 3
    },
    tabBarIcon2up: {
        display: 'flex',
        flexDirection: 'row'
    },
    tabBarIcon2up1: {
        backgroundColor: '#ffffff80',
        height: 10,
        width: 3
    },
    tabBarIcon2up2: {
        backgroundColor: '#ffffff80',
        height: 10,
        width: 10,
        marginHorizontal: 2

    }, tabBarIcon2down: {
        backgroundColor: '#ffffff80',
        height: 10,
        width: 3,
        marginTop: 2
    },
    tabBarIcon3con: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    tabBarIcon3div1: {
        backgroundColor: '#ffffff80',
        height: 10,
        width: 8,
        marginRight: 2
    },
    tabBarIcon3div2: {
        backgroundColor: '#ffffff80',
        height: 20,
        width: 8,
    },
    tabBarIcon4div: {
        backgroundColor: '#ffffff80',
        height: 5,
        width: 16,
        borderTopRightRadius: 2,
        borderTopLeftRadius: 2
    },

    tabBarIcon4triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 16,
        borderLeftColor: '#ffffff80',
        borderRightColor: '#ffffff80',
        borderBottomColor: 'transparent',
        marginTop: 0.19608
    },
    tabBarIcon4triangleActive: {

        borderLeftColor: '#ffffff',
        borderRightColor: '#ffffff',

    },
    active: {
        backgroundColor: '#ffff'
    }

});