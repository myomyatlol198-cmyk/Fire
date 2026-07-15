import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { s } from 'react-native-size-matters';

interface FilterCardProps {
    id: string;
    name: string;
    onPress: () => void;
    isSelected: boolean;
}

const FilterCard: FC<FilterCardProps> = ({ id, name, onPress, isSelected=true }) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, isSelected ? styles.selectedContainer : styles.unSelectedContainer]}>
            <Text style={[styles.text, isSelected ? styles.selectedText : styles.unSelectedText]}>{name}</Text>
        </TouchableOpacity>
    )

}

export default FilterCard

const styles = StyleSheet.create({
    container: {
        marginVertical: s(10),
        backgroundColor: '#FFFFFF',
        borderRadius: s(10),
        borderWidth: 1,
        borderColor: '#BBD5DA',
    },
    selectedContainer: {
        backgroundColor: '#FF0000',
    },
    unSelectedContainer: {
        backgroundColor: '#FFFFFF',
    },
    text: {
        fontSize: s(14),
        fontWeight: 'bold',
        paddingHorizontal: s(10),
        paddingVertical: s(5),
    },
    selectedText: {
        color: '#FFFFFF',
    },
    unSelectedText: {
        color: '#000000',
    }
})