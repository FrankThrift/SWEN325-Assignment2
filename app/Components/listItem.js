import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

import { Fonts } from '../utils/Fonts';
import  Style  from '../utils/Style';

export default class ListItem extends Component {
  render(){
    let imageUrl = "https://ddragon.leagueoflegends.com/cdn/8.15.1/img/champion/"+this.props.ChampionName+".png"
    return (
      <View style = {Style.listItem}>
      <Text style = {Style.listItemText}> {this.props.ChampionName}, {this.props.ChampionNote}</Text>
        <TouchableOpacity onPress={()=>{alert("you clicked me")}}>

          <Image
            source = {{uri: imageUrl}}
            style = {Style.listItemImage}
          />
        </TouchableOpacity>

      </View>
    )
  }
}
