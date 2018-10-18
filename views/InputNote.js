import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TextInput} from 'react-native';
export default class InputNote extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.search}
          placeholder= 'Ghi chú/ Số lượng'/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  },
  search: {
    padding:10,
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'stretch',
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
});
