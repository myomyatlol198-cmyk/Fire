import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { s } from 'react-native-size-matters'
import Feather from '@expo/vector-icons/Feather';
import FilterList from '../components/FilterList';
import PostList from '../components/PostList';


const Community = () => {

    const [searchText, setSearchText] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Community</Text>

            <View style={styles.searchBar}>
                <Feather name="search" size={s(20)} color="#BBD5DA" />
                <TextInput
                    style={styles.textInput}
                    onChangeText={setSearchText}
                    value={searchText}
                    placeholder='Search...'
                    placeholderTextColor='#BBD5DA'
                />
            </View>

            <Text style={styles.filterText}>Filter By</Text>

            <FilterList />

            <PostList />
        </ScrollView>
    )
}

export default Community

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingLeft: s(20),
        paddingTop: s(20),
    },
    title: {
        marginTop: s(50),
        fontSize: s(20),
        fontWeight: 'bold',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: s(10),
        paddingHorizontal: s(10),
        paddingVertical: s(3),
        marginTop: s(20),
        marginRight: s(20),
        elevation: 2,
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
    },
    textInput: {
        fontSize: s(14),
        marginLeft: s(10),
    },
    filterText: {
        fontSize: s(16),
        fontWeight: 'bold',
        marginTop: s(15),
    }
})