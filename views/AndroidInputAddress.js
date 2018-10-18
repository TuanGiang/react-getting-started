import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TextInput} from 'react-native';
export default class AndroidInputPhone extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.search} inlineImageLeft = 'ic_address_line'  inlineImagePadding = {10}
          placeholder= 'Địa chỉ'/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  },
  search: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'stretch',
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
});
