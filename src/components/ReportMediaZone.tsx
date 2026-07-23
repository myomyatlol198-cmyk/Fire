import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import Feather from '@expo/vector-icons/Feather';

const ReportMediaZone = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Media Attachment Zone</Text>
            <View style={styles.mediaContainer}>
                <TouchableOpacity style={styles.camera}>
                    <Feather name="camera" size={s(30)} color="#FF0000" />
                    <Text style={{fontWeight: 'semibold'}}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.video}>
                    <Feather name="video" size={s(32)} color="#FF0000" />
                    <Text style={{fontWeight: 'semibold'}}>Video</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReportMediaZone

const styles = StyleSheet.create({
    container: {
        marginVertical: vs(20),
    },
    title: {
        fontSize: s(14),
        fontWeight: 'bold',
        paddingBottom: s(10),
    },
    mediaContainer: {
        borderWidth: s(2),
        borderColor: '#BBD5DA',
        borderStyle: 'dotted',
        borderRadius: s(10),
        padding: s(40),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    camera: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    video: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})