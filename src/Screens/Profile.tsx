import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import ProfileDetailsSection from '../components/ProfileDetailsSection'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import LineTaker from '../components/LineTaker';

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

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Profile</Text>
            <View style={styles.profile_container}>

                <View style={styles.profile_image_container}>
                    <Image style={styles.image} source={{uri: user.profile}} />
                    <TouchableOpacity style={styles.editIcon} onPress={()=> navigation.navigate('Home' as never)}>
                        <AntDesign name="edit" size={s(22)} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>       

                    <ProfileDetailsSection  value={user.name} />                   
                    <ProfileDetailsSection  value={user.email} />                  
                    <ProfileDetailsSection  value={user.phone} />
                    
                </View>

            </View>

            <View style={styles.infoContainer}>

                <Text style={{color: '#BBD5DA'}}>Account Settings</Text>

                
            </View>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
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
        marginHorizontal: s(20),
        borderRadius: s(10),
        paddingBottom: s(30),       
    },
    profile_image_container: {
        height: s(80),
        width: s(100),
        alignSelf: 'center',
        marginVertical: s(20),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    image: {
        width: s(90),
        height: s(90),
        borderRadius: s(50),
    },
    editIcon: {
        backgroundColor: '#BBD5DA',
        position: 'absolute',
        width: s(30),
        height: s(30),
        borderRadius: s(15),
        bottom: s(-20),
        borderWidth: s(3),
        borderColor: '#fff',
    },
    infoContainer: {
        
        marginTop: s(20),
        
        
    }
})