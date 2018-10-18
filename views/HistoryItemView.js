import React, {Component} from 'react';
import {StyleSheet, Image, View, Text,TouchableOpacity} from 'react-native';
export default class HistotyItemView extends React.Component {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render(){
    return (
        <TouchableOpacity onPress={this._onPress}>
          <View style ={styles.container}>
            <View style ={styles.row}>
              <Text style={styles.date}>{this.props.date}</Text>
              <Text style={styles.quality}>{this.props.quality}</Text>
              <Text style={styles.rating}>{this.props.rating}</Text>
              <Image style ={styles.image} source={require('../assets/images/ic_keyboard_arrow_right.png')} />
            </View>
            <View style ={styles.row}>
              <Text style={styles.title}>{this.props.title}</Text>
              <Text style={styles.price}>{this.props.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection : 'column',
    padding: 5,
    height : 60,
  },

  image: {
    width : 20,
    height : 20,
    alignSelf : 'center',
  },

  row: {
    flexDirection : 'row',
    flex :1,
  },

  date: {
    alignSelf : 'center',
  },

  quality: {
    flex :1,
    color: 'green',
    alignSelf : 'center',
    marginStart : 10,
  },

  rating: {
    color: 'red',
    alignSelf : 'center',
  },

  title: {
    flex :1,
    color: 'black',
    alignSelf : 'center',
  },

  price: {
    alignSelf : 'center',
  },

});
