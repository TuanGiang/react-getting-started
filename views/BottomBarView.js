import React, {Component} from 'react';
import call from 'react-native-phone-call'
import {StyleSheet, Image, View, Text, TextInput,TouchableOpacity} from 'react-native';
import { ShareApi } from 'react-native-fbsdk';

const args = {
  number: '0985773486', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}

const shareLinkContent = {
  contentType: 'link',
  contentUrl: "https://facebook.com",
  contentDescription: 'Wow, check out this great site!',
};

export default class BottomBarView extends React.Component {
  callPhone(){
      call(args).catch(console.error);
  }

  shareFacebook(){
    ShareApi.canShare(this.state.shareLinkContent).then(
    var tmp = this;
    function(canShare) {
      if (canShare) {
        return ShareApi.share(tmp.state.shareLinkContent, '/me', 'Some message.');
      }
    }).then(
      function(result) {
        console.log('Share with ShareApi success.');
      },
      function(error) {
        console.log('Share with ShareApi failed with error: ' + error);
      }
    );
  }


  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style ={styles.action} onPress = {() => this.callPhone()}>
          <Image style={styles.image} source={require('../assets/images/ic_phone_white.png')} />
          <Text style={styles.title}>Gọi điện</Text>
        </TouchableOpacity>
        <View style = {styles.divider}/>
        <TouchableOpacity style ={styles.action}  onPress = {() => this.shareFacebook()}>
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
