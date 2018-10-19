import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, Button, TouchableOpacity, ScrollView, TextInput,ToastAndroid  } from 'react-native';
import ProductTypeView from '../views/ProductTypeView.js'
import AndroidInputService from '../views/AndroidInputService.js'
import InputServiceNote from '../views/InputServiceNote.js'
export default class AddProductScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle: 'Thêm Dịch vụ/Sản phẩm',
   };
 };

 constructor(props){
   super(props);
   this.state = {isProduct : true};
 }

 _onTypeChanged = (isProduct : boolean) => {
    this.setState({isProduct: isProduct});
   };

 _onServiceChanged = (serivce : string) => {

   };

_onServiceDescriptionChanged = (description : string) => {

     };

_onPressImage = () =>{

} ;

_onPressConfirm = () =>{
   ToastAndroid.show('Confirm!', ToastAndroid.SHORT);
} ;

  render(){
    return (
        <View style={styles.container}>
          <ScrollView>
            <ProductTypeView  _onTypeChanged = {this._onTypeChanged}
              isProduct = {this.state.isProduct}
            />

            <AndroidInputService _onTextChanged = {this._onServiceChanged}/>
            <InputServiceNote  _onTextChanged = {this._onServiceDescriptionChanged}/>

            <Text style = {{fontWeight : 'bold', marginTop : 10,}}> Hình ảnh dịch vụ </Text>

            <View style = {styles.imageRow} >
              <TouchableOpacity onPress = {this._onPressImage} style = {styles.imageItem} >
                <Image style = {styles.image} source={require('../assets/images/ic_camera.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress = {this._onPressImage}  style ={styles.imageItem}>
                <Image style = {styles.image} source={require('../assets/images/ic_camera.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress = {this._onPressImage} style = {styles.imageItem} >
                <Image style = {styles.image} source={require('../assets/images/ic_camera.png')} />
              </TouchableOpacity>
            </View>

            <View style = {styles.imageRow} >
              <TouchableOpacity onPress = {this._onPressImage} style = {styles.imageItem} >
                <Image style = {styles.image} source={require('../assets/images/ic_camera.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress = {this._onPressImage}  style ={styles.imageItem}>
                <Image style = {styles.image} source={require('../assets/images/ic_camera.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress = {this._onPressImage} style = {styles.imageItem} >
                <Image style = {styles.image} source={require('../assets/images/ic_camera.png')} />
              </TouchableOpacity>
            </View>
            <Text style = {{fontWeight : 'bold', marginTop : 10,}}> Khu vực hoạt động </Text>
            <TextInput style={styles.area}
              placeholder= 'Nhập khu vực hoạt động...'/>

            <TouchableOpacity style ={styles.action} onPress = {this._onPressConfirm} >
              <Text style={styles.title}>Xác nhận</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'white',
  },

  imageGroup: {
    flexDirection: 'row',
  },

  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:10,
  },

  imageItem: {
    alignSelf: 'center',
  },
  image: {
     alignSelf: 'center',
     height: 80,
     width: 80,
   },

   area: {
     padding:10,
     height: 40,
     borderColor: 'gray',
     borderWidth: 1,
     alignItems: 'stretch',
     marginTop: 10,
   },


   action: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     borderColor : '#BE1E2E',
     borderWidth : 1,
     marginTop: 10,
     height: 50,
   },

   title: {
     color: '#BE1E2E',
     alignSelf: 'center',
   },


});
