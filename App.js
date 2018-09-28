/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ChampionsScreen from './app/screens/ChampionsScreen';
import SummonerScreen from './app/screens/SummonerScreen';
import {createStackNavigator} from 'react-navigation';

const MyStack = createStackNavigator({
  Login : { screen:LoginScreen },
  Welcome : { screen:WelcomeScreen },
  Champions: { screen:ChampionsScreen },
  Summoner: { screen:SummonerScreen}
});

export default class App extends React.Component {
  render() {
    return (
      <MyStack/>
    );
  }
}
