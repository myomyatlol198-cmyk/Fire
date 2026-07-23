import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import ReportMediaZone from '../components/ReportMediaZone'
import Location from '../components/Location'
import IncidentReason from '../components/IncidentReason'

const Upload = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Report Emergency</Text>
            <ReportMediaZone />
            <Location />
            <IncidentReason />
        </View>
    )
}

export default Upload

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: s(20),
        paddingTop: s(20),
    },
    title: {
        marginTop: s(50),
        fontSize: s(20),
        fontWeight: 'bold',
        color: '#FF0000',
        textShadowColor:'#838181',
        textShadowOffset: {width: s(1), height: s(1)},
        textShadowRadius: s(5),
    },
})