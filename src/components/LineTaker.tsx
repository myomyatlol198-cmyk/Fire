import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { s } from 'react-native-size-matters';

interface LineTakerProps {
    name: string;
    onPress?: () => void;
    iconName: React.ReactNode;
}

const LineTaker: FC<LineTakerProps> = ({name, onPress, iconName}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View>{iconName}</View>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

export default LineTaker

const styles = StyleSheet.create({
    container: {       
        flexDirection: 'row',
        gap: s(10),
        alignItems: 'center',
        paddingHorizontal: s(15),
        paddingVertical: s(20),
        borderRadius: s(15),
        borderBottomWidth: 1,
        borderBottomColor: '#c7c5c5',
    },
    text: {
        fontSize: s(13),
        fontWeight: 'bold',
    }
})