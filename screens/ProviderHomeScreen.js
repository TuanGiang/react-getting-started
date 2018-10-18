import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, Button, TouchableOpacity, ScrollView, TextInput,ToastAndroid, Alert , AsyncStorage } from 'react-native';
import AndroidInputPhone from '../views/AndroidInputPhone.js'
import AndroidInputPassword from '../views/AndroidInputPassword.js'
export default class ProviderHomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle: 'Cung cấp/Đối tác',
   };
 };

 constructor(props){
   super(props);
   this.state = { name : 'Anh A', allow : true};
   this.getCurrentLogin();
 }

 _handleAccountPress = () => {

 }

 _handleHistoryPress = () => {
   this.props.navigation.navigate('ProviderHistory');
 }

 _handleInComePress = () => {

 }

 _handleProvidePress = () => {

 }

 getCurrentLogin = async ()  => {
   try {
     const phone = await AsyncStorage.getItem('Phone');
     this.setState({name: phone});
    } catch (error) {
        alert(error);
    }
 };

  render(){
    return (
      <View style={styles.container}>
        <View style = {styles.prodiderGroup} >
          <TouchableOpacity onPress={this._handleAccountPress} style={styles.provider}>
            <Text style={styles.providerTitle}>Tài khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleHistoryPress} style={styles.provider}>
            <Text style={styles.providerTitle}>Lịch sử dịch vụ</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.prodiderGroup} >
          <TouchableOpacity onPress={this._handleInComePress} style={styles.provider}>
            <Text style={styles.providerTitle}>Doanh thu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleProvidePress} style={styles.provider}>
            <Text style={styles.providerTitle}>Cung cấp</Text>
          </TouchableOpacity>
        </View>
        <Text style ={{margin:10}}>Xin chào {this.state.name}</Text>
        <Text style ={{margin:10}}>Rất hân hạnh hợp tác cùng anh.</Text>
        <View style = {styles.prodiderGroup} >
          <TouchableOpacity onPress={this._handleInComePress} style={styles.provider}>
            <Text style={styles.providerTitle}>Có</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleProvidePress} style={styles.provider}>
            <Text style={styles.providerTitle}>Không</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  prodiderGroup: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  provider: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#BE1E2E',
    borderWidth: 1,
    height: 60,
    margin:10,
  },

  providerTitle: {
    color: '#BE1E2E',
    alignSelf: 'center',
  },
});
