import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, Button, TouchableOpacity, ScrollView, AsyncStorage  } from 'react-native';
import AndroidSearchView from '../views/AndroidSearchView.js'
import BottomBarView from '../views/BottomBarView.js'
export default class HomeScreen extends React.Component {
  static navigationOptions = {
     headerTitle: <AndroidSearchView />,
  };


  _gotoCategoryDetailScreen (id: string, titleStr: string){
      this.props.navigation.navigate('CategoryDetail',{ itemId: id,  title :titleStr, });
  }

  _gotoBookingScreen (id: string, titleStr: string){
      this.props.navigation.navigate('Booking',{ itemId: id,  title :titleStr, });
  }

  _gotoCategoryScreen(){
    this.props.navigation.navigate('Category');
  }
  _gotoProviderScreen(){
    this.props.navigation.navigate('Provider');
  }

  _retrieveData = async () => {
    try {
      const phone = await AsyncStorage.getItem('Phone');
      if (phone !== null) {
        alert('Goto User info');
      } else {
        alert('Bạn phải đăng nhập trước');
      }
     } catch (error) {
         alert(error);
     }
  }


  render(){
      return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
              <View style = {styles.categoryGroup} >
                <TouchableOpacity onPress={() =>this._gotoCategoryScreen()} style={styles.category}>
                  <Text style={styles.categoryTitle}>Dịch vụ/Sản phẩm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._gotoProviderScreen()} style={styles.category}>
                  <Text style={styles.categoryTitle}>Cung cấp/Đối tác</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.categoryGroup} >
                <TouchableOpacity onPress={this._handleLearnMorePress} style={styles.category}>
                  <Text style={styles.categoryTitle}>Thông tin liên hệ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._retrieveData} style={styles.category}>
                  <Text style={styles.categoryTitle}>Tài khoản</Text>
                </TouchableOpacity>
              </View>

              <View style = {styles.titleContainer} >
                  <Text style={styles.title}>Dịch vụ/Sản phẩm tiêu biểu</Text>
              </View>

              <View style = {styles.mainCategoryRow} >
                <TouchableOpacity onPress={()=>this._gotoCategoryDetailScreen('1','Sửa điện lạnh')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_electric.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Sửa điện lạnh</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._gotoCategoryDetailScreen('1','Sửa điện nước')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_water.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Sửa điện nước</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._gotoCategoryDetailScreen('1','Sửa điện tử')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_computer.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Sửa điện tử</Text>
                </TouchableOpacity>
              </View>

              <View style = {styles.mainCategoryRow} >
                <TouchableOpacity onPress={()=>this._gotoCategoryDetailScreen('1','Sp công nghệ')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_tech.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Sp công nghệ</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._gotoCategoryDetailScreen('1','Sp công nghiệp')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_manufactor.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Sp công nghiệp</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._gotoCategoryDetailScreen('1','Sp nông nghiệp')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_agri.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Sp nông nghiệp</Text>
                </TouchableOpacity>
              </View>

              <View style = {styles.titleContainer} >
                  <Text style={styles.title}>Có thể bạn thích</Text>
              </View>

              <View style = {styles.mainCategoryRow} >
                <TouchableOpacity onPress={()=>this._gotoBookingScreen('1','Sửa máy lạnh')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_sub_air-conditioner.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Sửa máy lạnh</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._gotoBookingScreen('1','Sửa máy giặc')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_sub_washer.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Sửa máy giặc</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._gotoBookingScreen('1','Sửa bình nóng lạnh')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_sub_heater.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Bình nóng lạnh</Text>
                </TouchableOpacity>
              </View>

              <View style = {styles.mainCategoryRow} >
                <TouchableOpacity onPress={()=>this._gotoBookingScreen('1','Sửa bóng đèn')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_sub_light.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Bóng đèn</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._gotoBookingScreen('1','Sửa ống nước')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_sub_pipe.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Ống nước</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._gotoBookingScreen('1','Sửa van nước')} style={styles.mainCategoryItem}>
                  <Image style ={styles.mainCategoryItemImage} source={require('../assets/images/ico_product_sub_valve.png')} />
                  <Text style={styles.mainCategoryItemTitle}>Van nước</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  categoryGroup: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  category: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#BE1E2E',
    height: 60,
    margin:10,
  },

  categoryTitle: {
    color: 'white',
    alignSelf: 'center',
  },

  titleContainer: {
    height : 50,
    justifyContent: 'center',
    backgroundColor: '#FAF1F2',
  },

  title: {
    color: '#BE1E2E',
    marginStart: 10,
    fontWeight: 'bold',
  },

  mainCategoryGroup: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  mainCategoryRow: {
    flexDirection: 'row',
    margin:10,
  },

  mainCategoryItem: {
    flex: 1,
    height: 70,
    margin:10,
  },

  mainCategoryItemImage: {
      alignSelf: 'center',
      height: 50,
  },

  mainCategoryItemTitle: {
      alignSelf: 'center',
      height: 20,
  },


});
