import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Navigator
} from 'react-native';

import { Fonts } from '../utils/Fonts';
import  Style  from '../utils/Style';

export default class ListItem extends Component {
  render(){
    let imageUrl = "https://ddragon.leagueoflegends.com/cdn/8.15.1/img/champion/"+this.props.ChampionName+".png";
    
    return (

      <View style = {Style.listItem}>
      <Text style = {Style.listItemText}> {this.props.ChampionName}, {this.props.ChampionNote}</Text>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Champion',{
            championName: this.props.ChampionName,
        })}>

          <Image
            source = {{uri: imageUrl}}
            style = {Style.listItemImage}
          />
        </TouchableOpacity>

      </View>
    )
  }
}
