import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';


export default class ChampionScreen extends Component {



  getContent(){
    return fetch('http://ddragon.leagueoflegends.com/cdn/8.15.1/data/en_US/champion/'+this.props.championName+'.json')
    .then((response) => {
      this.setState(previousState => {
        let data = JSON.parse(response._bodyText)
        return { champs: data.data };
      });
    }).catch((error)=> {
      console.error(error);
    });
  }

  render() {
    var q = 'qdefault';
    var qDes = 'qdesdefault';
    var w = 'wdefault';
    var wDes = 'wdesdefault';
    var e = 'edefault';
    var eDes = 'edesdefault';
    var r = 'rdefault';
    var rDes = 'rdesdefault';
    const championName = this.props.navigation.getParam('championName','default');
    return (
      <View style = {Style.background}>
      </View>
    );
  }
}
