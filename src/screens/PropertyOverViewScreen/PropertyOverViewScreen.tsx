import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { PropertyType, RootStackParamList } from '../../utils/types';
import React, { } from 'react';
type PropertyOverViewScreenProps = NativeStackScreenProps<RootStackParamList, "PropertyOverViewScreen">;


export default function PropertyOverViewScreen(props: PropertyOverViewScreenProps) {

    const { propertyData } = props.route.params;
    return (
        <ScrollView style={styles.container}>
            <Text>scs</Text>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },


});
