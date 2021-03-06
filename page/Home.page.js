import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Button } from 'react-native'
import ListContent from '../components/ListContent.component'
import ListView from '../components/ListView.component'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExpenses, addToken } from '../redux/action/generalAction';

class Home extends Component {
  state = {
    name: '',
    names: [],
    total: 0
  }

  handleNameInput = (text) => {
    this.setState({ name: text })
  }

  login = (text) => {
    this.props.addToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjExNDYyNTgsImRhdGEiOnsicm9sZSI6ImFkbWluIiwidXNlcl9pZCI6IjYwOWZiNmFmZDYwZTMzNDQ1ODZjZjk0NiJ9LCJpYXQiOjE2MjExNDI2NTh9.0Ghs3syMVVvgrXagMrjhqfXmWf2VGqNWVP8Y9ucpJPE')
    alert("Loginkan " + this.props.expenses.token)
    this.componentDidMount()
  }

  componentDidMount = () => {
    fetch('http://10.0.2.2:3000/api/user', {
      method: 'GET',
      headers: new Headers({
        'token': this.props.expenses.token
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("fetch ", responseJson);
        console.log("fetch data", responseJson.data);
        this.props.addExpenses(responseJson.data[0].expenses)
        this.setState({
          total: responseJson.data[0].total_expense,
          names: responseJson.data[0].expenses
        })
      })
      .catch((error) => {
        console.log("errorz ", error);
      });
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.container2}>
          <View style={styles.profile_photo}>
            <Button
              onPress={() => this.props.navigation.navigate('Profile', {
                itemId: 86,
                otherParam: 'anything you want here',
              })}
              title="Red button!"
              color="red"
            />
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
          {
            // console.log("state ", this.state)
          }
          <ListView names={this.state.names}></ListView>
        </View>
      </View >
    )
  }
}

const mapStateToProps = (state) => {
  const { expenses } = state
  return { expenses }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addExpenses,
    addToken,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
    backgroundColor: 'grey',
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