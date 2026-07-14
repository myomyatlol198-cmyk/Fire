import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'

interface ProfileDetailsSectionProps {
    value: string;
}

const ProfileDetailsSection: FC<ProfileDetailsSectionProps> = ({ value }) => {
    return (
        <View style={styles.container}>            
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}

export default ProfileDetailsSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',      
        paddingVertical: vs(3),
    },
    text: {
        fontSize: s(12),
        fontWeight: 'bold',
    }
})


