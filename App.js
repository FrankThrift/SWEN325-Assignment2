/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen'
import {createStackNavigator,} from 'react-navigation';

const Stack = createStackNavigator({
  Login: { screen: LoginScreen },
});

export default class App extends React.Component {
  render() {
    return <Stack />;
  }
}
