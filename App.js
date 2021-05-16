import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './page/Home.page';
import Profile from './page/Profile.page';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import generalReducer from './redux/reducer/generalReducer';

const Stack = createStackNavigator();
const store = createStore(generalReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ title: 'EEEE home' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}


export default App