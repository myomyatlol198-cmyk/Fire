import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'

interface ProfileDetailsSectionProps {
    title: string;
    value: string;
}

const ProfileDetailsSection: FC<ProfileDetailsSectionProps> = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}

export default ProfileDetailsSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#0c0b0b',
        paddingVertical: vs(20),
        paddingHorizontal: s(5),
    },
    text: {
        fontSize: s(14),
        fontWeight: 'semibold',
        
    }
})


