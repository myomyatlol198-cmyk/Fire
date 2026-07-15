import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { s } from 'react-native-size-matters'
import { FlatList } from 'react-native-gesture-handler'
import FilterCard from './FilterCard'



const FilterTopics = [
    { id: '1', name: 'All' },
    { id: '2', name: 'Active Alert' },
    { id: '3', name: 'Safety Tips' },
    { id: '4', name: 'Resolved' }
]

const FilterList = () => {

    const [selectedId, setSelectedId] = useState('1');

    return (
        <View style={styles.container}>
            <FlatList
                data={FilterTopics}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FilterCard
                    id={item.id}
                    name={item.name}
                    onPress={() => setSelectedId(item.id)}
                    isSelected={item.id === selectedId}

                />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: s(10), paddingHorizontal: s(10) }}
            />
        </View>
    )
}


export default FilterList

const styles = StyleSheet.create({
    container: {
        marginTop: s(10),
    }
})