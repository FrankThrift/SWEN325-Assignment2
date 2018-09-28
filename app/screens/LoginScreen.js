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
import {createStackNavigator,} from 'react-navigation';
import { Fonts } from '../utils/Fonts';

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
          onPress = {() =>this.props.navigation.replace('Welcome',{
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


const Style = StyleSheet.create({
  buttonText: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*15,
    color: '#000000'
  },
  button: {
    padding: 10,
    backgroundColor: '#EDB852',
    borderStyle: 'solid',
  },
  large: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*20,
    textAlign: 'center',
    color: '#EDB852',
    paddingBottom: 20,
  },
  small: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*15,
    textAlign: 'center',
    color: '#EDB852',
    paddingBottom: 15,
  },
  input: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*17.5,
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 15,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13181B',
  },
});
