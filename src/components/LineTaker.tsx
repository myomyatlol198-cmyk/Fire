import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

interface LineTakerProps {
    name: string;
}

const LineTaker: FC<LineTakerProps> = ({name}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

export default LineTaker

const styles = StyleSheet.create({
    container: {
        
    }
})