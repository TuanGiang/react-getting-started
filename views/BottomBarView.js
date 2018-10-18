import React, {Component} from 'react';
import call from 'react-native-phone-call'
import {StyleSheet, Image, View, Text, TextInput,TouchableOpacity} from 'react-native';
import { ShareApi,ShareDialog } from 'react-native-fbsdk';

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
  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(shareLinkContent).then(
      function(canShow) {
        if (canShow) {
          return ShareDialog.show(shareLinkContent);
        }
      }
    ).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Share cancelled');
        } else {
          console.log('Share success with postId: '
            + result.postId);
        }
      },
      function(error) {
        console.log('Share fail with error: ' + error);
      }
    );
  }
  shareFacebook(){
      this.shareLinkWithShareDialog();
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
