import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TextInput} from 'react-native';
export default class AndroidInputPassword extends React.Component {

  _onTextChanged(text: string){
      this.props._onChangeText(text);
  }
  
  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.search} inlineImageLeft = 'ic_pass_line'  inlineImagePadding = {10}
            onChangeText={(text) => this._onTextChanged(text)}
          placeholder= 'Mật khẩu'/>
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
