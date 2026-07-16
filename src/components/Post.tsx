import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import { s } from 'react-native-size-matters'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

interface PostProps {
    id: string;
    name: string;
    category: string;
    time: string;
    profileURL: string;
    imageURL: string;
    content: string;
}

const Post: FC<PostProps> = ({id, name, category, time, profileURL, imageURL, content}) => {  

    return (

        <View style={styles.container}>
            <View style={styles.posterInfo}>

                <Image style={styles.profile} source={{ uri: profileURL }} />

                <View style={styles.posterInfoText}>
                    <Text style={styles.posterName}> {name}</Text>
                    <Text style={styles.postedOn}>{time}</Text>
                </View>

                <Text style={styles.category}>[{category}]</Text>

            </View>

            <View style={styles.content}>

                <Image style={styles.postImage} source={{ uri: imageURL }} />
                <Text style={styles.postContent}>{content}</Text>

            </View>

            <View style={styles.reaction}>
                <TouchableOpacity ><MaterialCommunityIcons name="fire" size={s(26)} color={'#BBD5DA'} /></TouchableOpacity>
                <TouchableOpacity ><Entypo name="message" size={s(24)} color="#BBD5DA" /></TouchableOpacity>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        marginTop: s(10),
        marginRight: s(20),
        paddingVertical: s(10),
        backgroundColor: '#FFFFFF',
        borderRadius: s(10),
        paddingHorizontal: s(10),
        elevation: 2,
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        position: 'relative',
    },
    posterInfo: {
        flexDirection: 'row',
        gap: s(10),
        marginLeft: s(10),
        marginTop: s(10),
    },
    profile: {
        width: s(40),
        height: s(40),
        borderRadius: s(20),
        backgroundColor: '#BBD5DA',

    },
    posterInfoText: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    posterName: {
        fontSize: s(14),
        fontWeight: 'bold',
    },
    postedOn: {
        fontSize: s(12),
        color: '#BBD5DA',
    },
    category: {
        fontSize: s(12),
        fontWeight: 'bold',
        color: '#FF0000',
        position: 'absolute',
        right: s(10),
        top: s(10),
    },
    content: {
        marginHorizontal: s(10),
        marginTop: s(10),
        paddingBottom: s(3)
    },
    postImage: {
        width: '100%',
        height: s(200),
        resizeMode: 'cover',
        borderRadius: s(10),
        marginVertical: s(10),
    },
    postContent: {
        fontSize: s(12),
        color: '#000000',
        paddingHorizontal: s(5),
        paddingBottom: s(10),
        textAlign: 'justify',
        borderBottomWidth: s(1),
        borderBottomColor: '#BBD5DA'
    },
    reaction: {
        flexDirection: 'row',
        borderColor: '#000000',
        justifyContent: 'space-around',
        paddingVertical: s(5),
        alignItems: 'center'
    },
    selected: {
        color: '#FF0000'
    },
    unSelected: {
        color: '#BBD5DA'
    }
})