import React, {Component} from 'react';
import {StyleSheet, Image, View, Text,TouchableOpacity,FlatList  } from 'react-native';
import CategoryItemView from '../views/CategoryItemView.js'
export default class CategoryScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle:'Dịch vụ/Sản phẩm',
   };
 };

  constructor(props) {
   super(props);
   this.state = {data : [
            {id: '1', image: require('../assets/images/ico_product_electric.png'), title: 'Sửa điện lạnh'},
            {id: '2', image: require('../assets/images/ico_product_water.png'), title: 'Sửa điện nước'},
            {id: '3', image: require('../assets/images/ico_product_computer.png'), title: 'Sửa điện tử'},
            {id: '4', image: require('../assets/images/ico_product_tech.png'), title: 'Sản phẩm công nghệ'},
            {id: '5', image: require('../assets/images/ico_product_manufactor.png'), title: 'Sản phẩm công nghiệp'},
            {id: '6', image: require('../assets/images/ico_product_agri.png'), title: 'Sản phẩm nông nghiệp'},
          ]
   };
 }

 _keyExtractor = (item, index) => item.id;

 _onPressItem = (id: string, titleStr: string) => {
   this.props.navigation.navigate('CategoryDetail',{ itemId: id,  title :titleStr, });
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
   <CategoryItemView
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
