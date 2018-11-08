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
import  ListItem  from '../Components/listItem';

export default class ChampionsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      champs: new Array(),
    };
  }
  //taken from here: https://stackoverflow.com/questions/45666762/search-filter-with-react-native-on-flatlist


  componentDidMount(){
    return fetch('https://ddragon.leagueoflegends.com/cdn/8.20.1/data/en_US/champion.json')
    .then((response) => {
      this.setState(previousState => {
        //console.log(response._bodyText)
        let fuck = JSON.parse(response._bodyText)
        return { champs: fuck.data };
      });
    }
    )
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    let champs = this.getChampionInformation(this.state.champs);
    if(!champs[0]) return(<View></View>);
    return(
      <View style = {Style.listItemBackground}>

        <FlatList
          data = {champs}
          renderItem = {this._renderItem}
          />
      </View>
    );
  }

  _renderItem = ({item, index}) => (
    <ListItem
      navigation = {this.props.navigation}
      ChampionName = {item.name}
      ChampionNote = {item.note}
      />
  );

  getChampionInformation(data){
    let champs = [];
    for(var champion in data){
          if (!data.hasOwnProperty(champion)) continue;
          champs.push({
            name: data[champion].id,
            note: data[champion].title,
          });
        }
        //console.log(this.champs);

      return champs;
  }
}
