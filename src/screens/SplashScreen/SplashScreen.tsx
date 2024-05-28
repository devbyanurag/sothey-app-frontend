import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { RootStackParamList } from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SplashScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const SplashScreen = (props: SplashScreenNavigationProp) => {
    const height1 = useRef(new Animated.Value(2)).current;
    const height2 = useRef(new Animated.Value(10)).current;
    const height3 = useRef(new Animated.Value(15)).current;
    const height4 = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.replace('AuthScreen');
        }, 5000);

        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(height1, {
                    toValue: 15,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(height1, {
                    toValue: 2,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(height2, {
                    toValue: 2,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(height2, {
                    toValue: 10,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(height3, {
                    toValue: 2,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(height3, {
                    toValue: 15,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(height4, {
                    toValue: 10,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(height4, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }),
            ]),
            { iterations: 1 } // Number of loop iterations
        );

        animation.start();

        return () => {
            clearTimeout(timer);
            animation.stop();
        };
    }, [height1, height2, height3, height4, props.navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Animated.View style={[styles.box, { height: height1 }]} />
                <Animated.View style={[styles.box, { height: height2 }]} />
                <Animated.View style={[styles.box, { height: height3 }]} />
                <Animated.View style={[styles.box, { height: height4 }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    innerContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    box: {
        width: 30,
        backgroundColor: 'white',
        marginRight: 10,
    },
});

export default SplashScreen;
