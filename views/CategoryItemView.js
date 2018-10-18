import React, {Component} from 'react';
import {StyleSheet, Image, View, Text,TouchableOpacity} from 'react-native';
export default class CategoryItemView extends React.Component {
  _onPress = () => {
    this.props.onPressItem(this.props.id, this.props.title);
  };

  render(){
    return (
        <TouchableOpacity onPress={this._onPress}>
          <View style ={styles.container}>
              <Image  style ={styles.image}  source={this.props.image}/>
              <Text style={styles.title}>
                {this.props.title}
              </Text>
              <Image style ={styles.image} source={require('../assets/images/ic_keyboard_arrow_right.png')} />
          </View>
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    height : 50,
  },
  image: {
    width : 40,
    height : 40,
    marginStart : 10,
    alignSelf : 'center',
  },
  title: {
    marginStart: 10,
    flex : 1,
    alignSelf : 'center',
  },

});
