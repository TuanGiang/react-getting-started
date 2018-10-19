import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TextInput} from 'react-native';
export default class InputServiceNote extends React.Component {

  _onTextChanged(text: string){
      this.props._onChangeText(text);
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.search}
          onChangeText={(text) => this._onTextChanged(text)}
          placeholder= 'Mô tả dịch vụ...'/>
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
  },
});
