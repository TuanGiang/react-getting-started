import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TextInput} from 'react-native';
export default class AndroidSearchView extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.search} inlineImageLeft = 'ic_search'  inlineImagePadding = {10}
          placeholder= 'Tìm kiếm'/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  },
  search: {
    height: 40,
    backgroundColor: '#F2F2F2',
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'stretch',
    margin: 10,
  },
});
