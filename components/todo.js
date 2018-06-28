import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from '@expo/vector-icons';

export default class todo extends Component {
  state={
    done:this.props.data.done,
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 25,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={this.props.onToggle}>
         {(console.log(this.props.data.done), this.props.data.done ? (
           <Feather name="check-square" size={24}/>
          ):( <Feather name="square" size={24}/>))
           
         }
        </TouchableOpacity>
        <Text>{this.props.data.text}</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Feather name="info" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onModify}>
            <MaterialCommunityIcons name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
