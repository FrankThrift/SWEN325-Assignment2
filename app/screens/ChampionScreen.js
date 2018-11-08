import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import  Style  from '../utils/Style';
import Swiper from 'react-native-swiper';

export default class ChampionScreen extends Component {
  constructor(){
    super();
    this.state = {champInfo: new Array()};
  }


  componentDidMount(){
    const championName = this.props.navigation.getParam('championName','default');
    console.log("Champion name ", championName);
    return fetch('https://ddragon.leagueoflegends.com/cdn/8.15.1/data/en_US/champion/'+championName+'.json')
    .then((response) => {
      //console.log("HERE")
      this.setState(previousState => {
        let fuck = JSON.parse(response._bodyText)
        //console.log("Data: ", fuck.data)
        return { champInfo: fuck.data };
      });
    }
    )
      .catch((error) =>{
        console.error(error);
      });
  }

  sortChampInfo(data){
    let responseObject = data;
    var abilities = {
      skins: [],
      q: '',
      qDes: '',
      w: '',
      wDes: '',
      e: '',
      eDes: '',
      r: '',
      rDes: ''
    }
    for(var champion in responseObject){
      console.log("Champion:",champion);
      if (!responseObject.hasOwnProperty(champion)) continue;
      for(var skin in responseObject[champion].skins){
        abilities.skins.push({
          name: responseObject[champion].skins[skin].name.trim(),
          num: responseObject[champion].skins[skin].num
        });
      }

        //passive: this.responseObject.data[champion].passive.image.full,
        abilities.q = responseObject[champion].spells[0].image.full,
        abilities.qDes = responseObject[champion].spells[0].description,
        abilities.w = responseObject[champion].spells[1].image.full,
        abilities.wDes = responseObject[champion].spells[1].description,
        abilities.e = responseObject[champion].spells[2].image.full,
        abilities.eDes = responseObject[champion].spells[2].description,
        abilities.r = responseObject[champion].spells[3].image.full,
        abilities.rDes = responseObject[champion].spells[3].description
    }
    return abilities;
  }

  renderPage(index,abilities,championName){
    if (abilities.skins[index]==undefined) return;
    console.log("Skin Number: ",abilities.skins[index].num);
    //"+championName+"_"+abilities.skins[index].num+".jpg"
    let imageURL = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+championName+"_"+abilities.skins[index].num+".jpg";
    console.log("ImageURL: ",imageURL)
    return (<View style = {Style.slide}><Image style = {Style.image} source = {{uri: imageURL}}/></View>);

  }

  render() {
    const championName = this.props.navigation.getParam('championName','default');
    var abilities = this.sortChampInfo(this.state.champInfo);
    //console.log("Abilities",abilities);
    let qUrl = "https://ddragon.leagueoflegends.com/cdn/8.15.1/img/spell/"+abilities.q;
    let wUrl = "https://ddragon.leagueoflegends.com/cdn/8.15.1/img/spell/"+abilities.w;
    let eUrl = "https://ddragon.leagueoflegends.com/cdn/8.15.1/img/spell/"+abilities.e;
    let rUrl = "https://ddragon.leagueoflegends.com/cdn/8.15.1/img/spell/"+abilities.r;
    //Taken from here: https://stackoverflow.com/questions/44106285/react-native-swiper-image-array/44115046
    const pagesCount = abilities.skins.length;
    const imHavingFun = [...new Array(pagesCount)].map((it, idx) => {
       return this.renderPage(idx,abilities,championName);
    });
    return (
      <View style = {Style.backgroundTest}>
      <Swiper showsPagination={false}>
        {imHavingFun}
      </Swiper>
      <View style = {Style.background}>
      <Text style = {Style.large}> Abilities </Text>
      <TouchableHighlight onPress = {() => Alert.alert(championName+"'s Q",abilities.qDes)}
        style = {Style.iconButton}
        underlayColor = {'gray'}>
        <Image
          source = {{uri: qUrl}}
          style = {Style.abilityImage}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress = {() => Alert.alert(championName+"'s W",abilities.wDes)}
        style = {Style.iconButton}
        underlayColor = {'gray'}>
        <Image
          source = {{uri: wUrl}}
          style = {Style.abilityImage}
          />
      </TouchableHighlight>
      <TouchableHighlight onPress = {() => Alert.alert(championName+"'s E",abilities.eDes)}
        style = {Style.iconButton}
        underlayColor = {'gray'}>
        <Image
          source = {{uri: eUrl}}
          style = {Style.abilityImage}
          />
      </TouchableHighlight>
      <TouchableHighlight onPress = {() => Alert.alert(championName+"'s Ultimate",abilities.rDes)}
        style = {Style.iconButton}
        underlayColor = {'gray'}>
        <Image
          source = {{uri: rUrl}}
          style = {Style.abilityImage}
          />
      </TouchableHighlight>
        </View>
      </View>

    );
  }
}
