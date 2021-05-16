import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ListContent = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 200,
        height: 50,
        margin: 2,
  
    },
    text: {
        padding: 10
    }
})
export default ListContent