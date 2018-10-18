import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, Button, TouchableOpacity, ScrollView, TextInput,ToastAndroid  } from 'react-native';
import AndroidInputPhone from '../views/AndroidInputPhone.js'
import AndroidInputAddress from '../views/AndroidInputAddress.js'
import InputNote from '../views/InputNote.js'
export default class BookingScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle: navigation.getParam('title', 'BookingScreen'),
   };
 };

 confirm(){
   ToastAndroid.show('Confirm!', ToastAndroid.SHORT);
 }

  render(){
    return (
        <View style={styles.container}>
            <AndroidInputPhone/>
            <AndroidInputAddress/>
            <InputNote/>
            <View>
              <TouchableOpacity onPress={() =>this.confirm()} style={styles.confirmContainer}>
                <Text style={styles.confirm}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Dịch vụ sửa XYX</Text>
            <Text style={styles.description}>Nhu cầu sử dụng máy lạnh tại các gia đình, công ty, nhà xưởng, xí nghiệp cần thiết hơn. Máy lạnh cũng như những thiết bị điện da dụng khác, sau một thời gian sử dụng thường gặp phải những hư hỏng xảy ra ngoài ý muốn mà nếu như chúng ta không sớm khắc phục sửa chữa máy lạnh thì sẽ dẫn đến những sự cố khác phức tạp hơn.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: 'column',
  },
  confirmContainer: {
    backgroundColor: '#BE1E2E',
    justifyContent: 'center',
    height: 50,
    margin:10,
  },
  confirm: {
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
