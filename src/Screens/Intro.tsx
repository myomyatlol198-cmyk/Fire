import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';

const Intro = () => {
    return (
        <SafeAreaProvider style={styles.container}>
            <View style={styles.shieldBackground}>  

                <Feather name="shield" size={s(100)} color="#FF0000" />
                <View style={styles.fireIconOverlay}>
                    <MaterialIcons name="local-fire-department" size={s(60)} color="#FF0000" />
                </View>

            </View>

            <Text style={styles.headerText}>QUICKFIRE</Text>
        </SafeAreaProvider>

    )
}

export default Intro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shieldBackground: {
        width: s(150),
        height: s(150),
        borderRadius: s(75),
        backgroundColor: '#DFF1F1',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        shadowColor: '#BBD5DA',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: s(5),
        elevation: s(3),
    },
    fireIconOverlay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: s(22),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF0000',
        marginTop: s(10),
    },
})