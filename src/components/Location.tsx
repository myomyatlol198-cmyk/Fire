import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { s, vs } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons';

const Location = () => {

    const [location,setLocation] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Where</Text>
                <Text style={styles.mapTitle}>Pin On Map</Text>
            </View>
            <View style={styles.locationContainer}>
                <TextInput placeholder='Choose Location' value={location} onChangeText={setLocation} autoCapitalize='none'></TextInput>
                <TouchableOpacity>
                    <Ionicons name="location-outline" size={s(20)} color="#FF0000" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    container: {
        marginBottom: vs(20),
    },
    title: {
        fontSize: s(14),
        fontWeight: 'bold',
        paddingBottom: s(10)
    },
    mapTitle: {
        fontSize: s(14),
        fontWeight: 'bold',
        alignItems: 'center',
        color: '#FF0000',
        paddingBottom: s(10)
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    locationContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: s(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: s(15),
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
    },
})
