import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, Button, TouchableOpacity, ScrollView, TextInput,ToastAndroid, Alert , AsyncStorage } from 'react-native';
import AndroidInputPhone from '../views/AndroidInputPhone.js'
import AndroidInputPassword from '../views/AndroidInputPassword.js'
export default class ProviderScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle: 'Cung cấp/Đối tác',
   };
 };

 constructor(props) {
  super(props);
  this.state = {phone: '', password : ''};
}

 signin() {
  this.validate(this.state.phone, this.state.password);
 }

 signup(){
   ToastAndroid.show('Signup!', ToastAndroid.SHORT);
 }

 _onPhoneTextChange = (text : string) => {
    this.setState({phone: text})
   };

  _onPasswordTextChange = (text : string) => {
        this.setState({password: text})
  };

  validate(phone: string, password : string){
      if(phone.trim()== '' || password.trim() == ''){
        this.showAlert('Lỗi','Vui lòng nhập đầy đủ thông tin');
      }else {
        this.storeLogin(phone, password);
      }
  }

  storeLogin(phone: string, password : string){
      AsyncStorage.setItem('Phone', phone);
      AsyncStorage.setItem('Password', password);
      this.props.navigation.goBack();
  }

  showAlert(title: string, message: string){
    Alert.alert(
                title,
                message,
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
  }
  render(){
    return (
        <View style={styles.container}>
            <AndroidInputPhone
              _onChangeText={this._onPhoneTextChange}/>
            <AndroidInputPassword
              _onChangeText={this._onPasswordTextChange}/>

            <View>
              <TouchableOpacity onPress={() =>this.signin()} style={styles.signinContainer}>
                <Text style={styles.signin}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() =>this.signup()} style={styles.signupContainer}>
                <Text style={styles.signup}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: 'column',
  },

  signupContainer: {
    justifyContent: 'center',
    borderColor: '#BE1E2E',
    borderWidth: 1,
    height: 50,
    margin:10,
  },

  signup: {
    color: '#BE1E2E',
    alignSelf: 'center',
  },

  signinContainer: {
    backgroundColor: '#BE1E2E',
    justifyContent: 'center',
    height: 50,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },

  signin: {
    color: 'white',
    alignSelf: 'center',
  },

  title: {
    color: '#BE1E2E',
    marginStart: 10,
    fontWeight: 'bold',
  },

  description: {
    marginStart: 10,
  },
});
