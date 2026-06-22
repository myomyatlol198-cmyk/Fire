import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Intro = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <MaterialIcons name="local-fire-department" size={s(70)} color="red"  />
            <Text style={styles.emergency}>EMERGENCY</Text>
            <Text style={styles.short}>Fire Response</Text>            
        </View>
    )
}

export default Intro

const styles = StyleSheet.create({   
    emergency: {
        color: "red",
        fontSize: s(20),
        textAlign: 'center',
        fontWeight: 'bold'
    },
    short: {
        color: "red",
        fontSize: s(12),
        textAlign: 'center'
    }
})