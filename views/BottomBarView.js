import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TextInput,TouchableOpacity} from 'react-native';
export default class BottomBarView extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style ={styles.action}>
          <Image style={styles.image} source={require('../assets/images/ic_phone_white.png')} />
          <Text style={styles.title}>Gọi điện</Text>
        </TouchableOpacity>
        <View style = {styles.divider}/>
        <TouchableOpacity style ={styles.action}>
          <Image style={styles.image} source={require('../assets/images/ic_share.png')} />
          <Text style={styles.title}>Chia sẻ</Text>
        </TouchableOpacity>
      </View>
    );
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
    backgroundColor: '#BE1E2E',
    height: 50,
  },
  image: {
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    marginStart: 5,
    alignSelf: 'center',
  },
});
