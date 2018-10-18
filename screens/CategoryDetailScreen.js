import React, {Component} from 'react';
import {StyleSheet, Image, View, Text,TouchableOpacity,FlatList  } from 'react-native';
import CategoryDetailItemView from '../views/CategoryDetailItemView.js'
export default class CategoryDetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle: navigation.getParam('title', 'CategoryDetailScreen'),
   };
 };


  constructor(props) {
   super(props);
   this.state = {data : [
            {id: '1', image: require('../assets/images/ico_product_sub_air-conditioner.png'), title: 'Sửa máy lạnh'},
            {id: '2', image: require('../assets/images/ico_product_sub_air-conditioner.png'), title: 'Bảo trì, vệ sinh máy lạnh'},
            {id: '3', image: require('../assets/images/ico_product_sub_air-conditioner.png'), title: 'Bơm gas'},
            {id: '4', image: require('../assets/images/ico_product_sub_air-conditioner.png'), title: 'Đi đường ống máy lạnh'},
            {id: '5', image: require('../assets/images/ico_product_sub_air-conditioner.png'), title: 'Tư vấn lắp đặt'},
          ]
   };
 }



 _keyExtractor = (item, index) => item.id;

 _onPressItem = (id: string, titleStr: string) => {
      this.props.navigation.navigate('Booking',{ itemId: id,  title :titleStr, });
   };

 renderSeparator = () => {
   return (
     <View
       style={{
         height: 1,
         backgroundColor: "#CED0CE",
       }}
     />
   );
};

 _renderItem = ({item}) => (
   <CategoryDetailItemView
     id={item.id}
     image={item.image}
     onPressItem={this._onPressItem}
     title={item.title}
   />
 );

 render(){
   return (
      <FlatList
        ItemSeparatorComponent={this.renderSeparator}
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
 }
}
