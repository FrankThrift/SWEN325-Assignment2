import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  PixelRatio,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { Fonts } from '../utils/Fonts';
import  Style  from '../utils/Style';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {summonerName: 'DEFAULT_NAME'};
  }

  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    return (
      <View style = {Style.background}>
        <Text style={Style.large}>Welcome to the League of Legends Pocket Assistant!</Text>
        <Text style={Style.small}>Please log in! </Text>

        <TextInput
          style={Style.input}
          placeholder="    Summoner name here    "
          onChangeText={(summonerName) => this.setState({summonerName})}
        />
        <TouchableHighlight
          onPress = {() => this.props.navigation.replace('Welcome',{
              userName: this.state.summonerName,
          })}
          style={Style.button}
          underlayColor = {'gray'}>

          <Text style={Style.buttonText}>LOG IN</Text>
        </TouchableHighlight>

        </View>


    );
  }
}
