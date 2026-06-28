import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import ProfileDetailsSection from '../components/ProfileDetailsSection'

export type UserType = {
    profile? : string;
    name: string;
    email: string;
    phone: string;
}

const user: UserType = {
    profile: 'https://dummyimage.com/600x400/000/fff.png&text=Profile',
    name: "Myo Myat",
    email: "myomyat@example.com",
    phone: "123-456-7890"
}

const Profile = () => {
    return (
        <View style={styles.container}>
            
            <Text style={{ fontSize: s(20), fontWeight: 'bold', textAlign: 'center', marginTop: s(80) }}>Profile</Text>
            <View style={styles.profile_container}>

                <View style={styles.profile_image_container}>
                    <Image style={styles.image} source={{uri: user.profile}} />
                </View>
                <View style={styles.profile_details}>
                    <ProfileDetailsSection title={"Name: "} value={user.name} />
                    <ProfileDetailsSection title={"Email: "} value={user.email} />
                    <ProfileDetailsSection title={"Phone: "} value={user.phone} />
                </View>

            </View>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eae1e1',
    },
    profile_container: {
        marginTop: s(30),
        backgroundColor: '#ffffff',
        marginHorizontal: s(30),
        borderRadius: s(10),
        paddingBottom: s(30),       
    },
    profile_image_container: {
        height: s(140),
        width: s(140),
        borderRadius: s(70),
        alignSelf: 'center',
        marginVertical: s(30),
    },
    image: {
        width: s(140),
        height: s(140),
        borderRadius: s(70),
    },
    profile_details: {
        paddingHorizontal: s(30),
        
    }
})