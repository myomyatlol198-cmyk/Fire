import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'

const IncidentReason = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Why</Text>
        </View>
    )
}

export default IncidentReason

const styles = StyleSheet.create({
    container: {
            marginBottom: vs(20),
        },
        title: {
            fontSize: s(14),
            fontWeight: 'bold',
            paddingBottom: s(10)
        },
})