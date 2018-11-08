import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import  Style  from '../utils/Style';
export default class WelcomeScreen extends Component {
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    const userName = this.props.navigation.getParam('userName','default');

    return(
      <View style = {Style.background}>
        <Text style={Style.large}>Welcome to the League of Legends Pocket Assistant {userName}!</Text>

        <TouchableHighlight
          onPress = {() =>this.props.navigation.navigate('Champions')}
          style={Style.button}
          underlayColor = {'gray'}>
          <Text style={Style.buttonText}>CHAMPIONS</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress = {() =>this.props.navigation.navigate('Summoner')}
          style={Style.button}
          underlayColor = {'gray'}>
          <Text style={Style.buttonText}>SUMMONERS</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress = {() =>this.props.navigation.replace('Login')}
          style={Style.button}
          underlayColor = {'gray'}>
          <Text style={Style.buttonText}>LOGOUT</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
