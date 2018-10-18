import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import AppNav from '../navigation/AppNav.js'
import BottomBarView from '../views/BottomBarView.js'
export default class SplashScreen extends React.Component {

  constructor(props) {
   super(props);
   this.state = {isLoading: true};

   // Toggle the state every second
   var intervalId = setInterval(() => {
     this.setState(previousState => {
       return { isLoading: false };
     });
   }, 1000);
 }

  resetTimer() {
      clearInterval(this.intervalId);
   }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.splash}>
          <Image source={require('../assets/images/splash/ic_splash.png')} />
        </View>
      );
    } else{
      this.resetTimer();
      return (
        <View style={styles.navContainer}>
          <AppNav/>
          <BottomBarView/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  navContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});
