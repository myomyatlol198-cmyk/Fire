import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { s } from 'react-native-size-matters';

interface LineTakerProps {
    name: string;
    onPress?: () => void;
}

const LineTaker: FC<LineTakerProps> = ({name}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

export default LineTaker

const styles = StyleSheet.create({
    container: {       
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: s(15),
        paddingVertical: s(20),
        borderRadius: s(15),
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    text: {
        fontSize: s(13),
        fontWeight: 'bold',
    }
})