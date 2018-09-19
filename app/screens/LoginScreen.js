import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fonts } from '../utils/Fonts';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View >
        <Text style={Style.large}>Welcome to the League of Legends Pocket Assistant!</Text>
        <Text style={Style.small}>Please log in! </Text>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  large: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*20,
    textAlign: 'center'
  },
  small: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*15,
    textAlign: 'center'
  }
});
