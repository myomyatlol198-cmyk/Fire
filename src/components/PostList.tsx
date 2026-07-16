import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Post from './Post'
import { s } from 'react-native-size-matters'

const Posts =[
    {id: '1', name: 'Myo Myat', category: 'Safety Tips',time: '10 minutes ago', profile: 'https://images.pexels.com/photos/32024311/pexels-photo-32024311.jpeg', image: 'https://images.pexels.com/photos/38528111/pexels-photo-38528111.jpeg', content: 'Post content goes here,lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    {id: '2', name: 'Nyi Min', category: 'Active Alert',time: '20 minutes ago', profile: 'https://images.pexels.com/photos/38578615/pexels-photo-38578615.jpeg', image: 'https://images.pexels.com/photos/37867994/pexels-photo-37867994.jpeg', content: 'Post content goes here,lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    {id: '3', name: 'Thinzar', category: 'Safety Tips',time: 'One hour ago', profile: 'https://images.pexels.com/photos/38487596/pexels-photo-38487596.jpeg', image: 'https://images.pexels.com/photos/36611374/pexels-photo-36611374.jpeg', content: 'Post content goes here,lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    {id: '4', name: 'Aye Theingi', category: 'Active Alert',time: '10 hours ago', profile: 'https://images.pexels.com/photos/38213557/pexels-photo-38213557.jpeg', image: 'https://images.pexels.com/photos/38365073/pexels-photo-38365073.jpeg', content: 'Post content goes here,lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },

]

const PostList = () => {
    return (
        <View>
            <FlatList
                data={Posts}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Post
                    id={item.id} name={item.name} category={item.category} time={item.time} profileURL={item.profile}
                    imageURL={item.image} content={item.content}
                />}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: s(30),
                }}
            />

        </View>
    )
}

export default PostList

const styles = StyleSheet.create({})