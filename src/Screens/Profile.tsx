import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ScrollView } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import ProfileDetailsSection from '../components/ProfileDetailsSection'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import LineTaker from '../components/LineTaker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export type UserType = {
    profile?: string;
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

const profileActions = [
    { id: 1, name: 'Edit Profile', target: 'EditProfile' },
    { id: 2, name: 'Change Password', target: 'ChangePassword' },
    { id: 3, name: 'Privacy Settings', target: 'PrivacySettings' },
    { id: 4, name: 'Notification Settings', target: 'Notification Settings' },
    { id: 5, name: 'Terms of Service', target: 'Terms of Service' },
]

const Profile = () => {

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>Profile</Text>
            <View style={styles.profile_container}>

                <View style={styles.profile_image_container}>
                    <Image style={styles.image} source={{ uri: user.profile }} />
                    <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate('Home' as never)}>
                        <AntDesign name="edit" size={s(15)} color="#000" />
                    </TouchableOpacity>
                </View>
                <View>

                    <ProfileDetailsSection value={user.name} />
                    <ProfileDetailsSection value={user.email} />
                    <ProfileDetailsSection value={user.phone} />

                </View>

            </View>

            <View >
                <Text style={{ color: '#000',fontWeight: 'bold',fontSize: s(14) }}>Account Settings</Text>
            </View>

            <View style={styles.infoContainer}>
                {profileActions.map((action) => (
                    <LineTaker key={action.id} name={action.name} onPress={()=> navigation.navigate(action.target as never)} />
                ))}
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login' as never)}>
                <MaterialIcons name="logout" size={s(20)} color="#FF0000" />
                <Text style={{ color: '#FF0000', fontWeight: 'bold', fontSize: s(14) }}>  Logout</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        paddingTop: s(20),
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: s(20),
    },
    title: {
        fontSize: s(20),
        fontWeight: 'bold',
        marginTop: s(50),
    },
    profile_container: {
        marginTop: s(25),
        marginBottom: s(20),
        paddingVertical: s(10),
        borderRadius: s(15),
        flexDirection: 'row',
        backgroundColor: '#BBD5DA',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 6,    
    },
    profile_image_container: {
        height: s(80),
        width: s(100),
        marginVertical: s(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: s(70),
        height: s(70),
        borderRadius: s(35),
    },
    editIcon: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        width: s(22),
        height: s(22),
        borderRadius: s(15),
        bottom: s(-5),
        borderWidth: s(2),
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        backgroundColor: '#BBD5DA',
        marginTop: s(20),
        borderRadius: s(10),
        paddingBottom: s(30),
        elevation: 2,
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
    },
    logoutButton: {
        flexDirection: 'row',
        marginVertical: s(30),
        backgroundColor: '#BBD5DA',
        paddingVertical: s(10),
        borderRadius: s(20),
        alignItems: 'center',
        justifyContent: 'center',
    }
})