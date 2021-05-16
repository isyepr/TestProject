import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import ListContent from '../components/ListContent.component'
import ListView from '../components/ListView.component'

class Profile extends Component {
    state = {
        name: '',
        itemId: this.props.route.params.itemId,
        otherParam: this.props.route.params.otherParam,
    }

    handleNameInput = (text) => {
        this.setState({ name: text })
    }

    login = (text) => {
        alert("Loginkan " + text + "dari home " + this.state.itemId + ' | ' + this.state.otherParam)
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.container2}>
                    <View style={styles.profile_photo}>
                    </View>
                    <TextInput style={styles.textInput}
                        underlineColorAndroid="white"
                        placeholder="Email"
                        placeholderTextColor="white"
                        onChangeText={this.handleNameInput}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.login(this.state.name)
                        }>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container3}>
                    <ListView names={[]}></ListView>
                </View>
            </View>
        )
    }
}

export default Profile

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    },
    textInput: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    container: {
        flexDirection: 'column',
        backgroundColor: 'green',
        flex: 1
    },
    container2: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: '50%',
        width: '100%',
        // flex: 1,
    },
    container3: {
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'red',
        height: '50%',
        width: '100%',
        // flex: 1,
    },
    profile_photo: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'yellow',
        width: 100,
        height: 100,
        borderRadius: 100 / 2
        // flex: 1,
    },
    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    blackbox: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    },
})