import React, {Component} from 'react';
import {StyleSheet, Image, View, Text,TouchableOpacity,FlatList  } from 'react-native';
import HistotyItemView from '../views/HistoryItemView.js'
export default class HistoryScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle:'Lịch sử',
   };
 };

  constructor(props) {
   super(props);
   this.state = {data : [
            {id: '1', date: '2018/05/06', quality:'Tốt', rating: 'Đã đánh giá', title: 'Sửa điện lạnh', price: '250.000đ'},
            {id: '1', date: '2018/06/06', quality:'Trung bình', rating: 'Đã đánh giá', title: 'Sửa điện lạnh', price: '23.000đ'},
            {id: '1', date: '2018/07/06', quality:'Khá', rating: 'Chưa đánh giá', title: 'Sửa điện nước', price: '250.000đ'},
            {id: '1', date: '2018/08/06', quality:'Khá', rating: 'Đã đánh giá', title: 'Sửa van nước', price: '210.000đ'},
            {id: '1', date: '2018/09/06', quality:'Trung bình', rating: 'Chưa đánh giá', title: 'Sửa điện lạnh', price: '250.000đ'},
            {id: '1', date: '2018/05/06', quality:'', rating: 'Đã đánh giá', title: 'Thay ống nước', price: '220.000đ'},
            {id: '1', date: '2018/06/06', quality:'Tốt', rating: 'Chưa đánh giá', title: 'Sửa điện lạnh', price: '21.000đ'},
            {id: '1', date: '2018/07/06', quality:'Tốt', rating: 'Đã đánh giá', title: 'Sửa điện lạnh', price: '220.000đ'},
          ]
   };
 }

 _keyExtractor = (item, index) => item.id;

 _onPressItem = (id: string) => {

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
   <HistotyItemView
     id={item.id}
     date={item.date}
     quality={item.quality}
     rating={item.rating}
     title={item.title}
     price={item.price}
     onPressItem={this._onPressItem}
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
