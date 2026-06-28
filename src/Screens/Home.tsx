import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons'

const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>        //Header name and notification icon
                <View>
                    <Text style={styles.hey}>Hey,</Text>
                    <Text style={styles.name}>Myo Myat</Text>
                </View>
                
                <TouchableOpacity>      //notification icon
                    <Ionicons name="notifications-outline" size={24} color="#848080" />
                </TouchableOpacity>

            </View>

            <View style={styles.SOS_header_text}>       //SOS header text
                <Text style={{fontWeight: 'bold', fontSize: s(12)}}>Help is just a click away!</Text>
                <Text style={{ fontSize: s(14), fontWeight: 'bold'}}>Click <Text style={{color: '#f21717'}}>SOS button</Text> to call for help</Text>
            </View>

            <TouchableOpacity style={styles.SOS}>       //SOS button
                <Text style={{ color: 'white', fontSize: s(24), fontWeight: 'bold' }}>SOS</Text>
            </TouchableOpacity>

            <View style={styles.volunteer_help}>       //Volunteer for help
                
                <Text style={{
                    fontSize: s(12),fontWeight: 'bold', color: '#000000'
                }}>Volunteer for help
                </Text>               

            </View>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eae1e1',
    },
    header: {
        marginHorizontal: s(30),
        marginTop: s(50),
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    hey: {
        fontSize: s(18),
        fontWeight: 'semibold',
    },
    name: {
        fontSize: s(20),
        fontWeight: 'bold',
    },
    SOS: {
        backgroundColor: '#f21717',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: s(200),
        width: s(200),
        borderRadius: s(100),
        marginTop: s(110),
    },
    SOS_header_text:{
        marginTop: s(50),
        marginHorizontal: s(30),
    },
    volunteer_help: {
        marginTop: s(80),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: s(30),
        paddingVertical: s(10),
        borderRadius: s(10),
    }
})
