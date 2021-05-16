import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import ListContent from './ListContent.component'

const ListView = (props) => {
    const alertItemName = (item) => {
        alert(item.name)
    }
    console.log("propss", props)
    return (
        <ScrollView>
            <View>
                {
                    props.names.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => alertItemName(item)} key={item._id}>
                            <ListContent
                                value={item.amount}
                            >
                            </ListContent>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default ListView