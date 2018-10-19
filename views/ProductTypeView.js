import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TextInput,TouchableOpacity} from 'react-native';

export default class BottomBarView extends React.Component {
  constructor(props){
    super(props);
  }

  _onTypeChanged(isProduct: boolean){
      this.props._onTypeChanged(isProduct);
  }

  render(){
    if(this.props.isProduct){
      return (
        <View style={styles.container}>
          <TouchableOpacity style ={styles.actionSelected} onPress = {()=>this._onTypeChanged(true)} >
            <Text style={styles.titleSelected}>Dịch vụ</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.action} onPress = {()=>this._onTypeChanged(false)} >
            <Text style={styles.title}>Sản phẩm</Text>
          </TouchableOpacity>
        </View>
      );
    } else{
      return (
        <View style={styles.container}>
          <TouchableOpacity style ={styles.action} onPress = {()=>this._onTypeChanged(true)} >
            <Text style={styles.title}>Dịch vụ</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.actionSelected} onPress = {()=>this._onTypeChanged(false)} >
            <Text style={styles.titleSelected}>Sản phẩm</Text>
          </TouchableOpacity>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
  },

  divider: {
    backgroundColor: '#EDECED',
    width: 1,
    marginTop: 5,
    marginBottom: 5,
  },

  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#b2b2b2',
    height: 50,
  },

  actionSelected: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#BE1E2E',
    height: 50,
  },

  image: {
    alignSelf: 'center',
  },
  titleSelected: {
    color: 'white',
    marginStart: 5,
    alignSelf: 'center',
  },

  title: {
    marginStart: 5,
    alignSelf: 'center',
  },
});
