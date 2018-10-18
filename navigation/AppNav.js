import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen.js';
import CategoryScreen from '../screens/CategoryScreen.js';
import CategoryDetailScreen from '../screens/CategoryDetailScreen.js';
import BookingScreen from '../screens/BookingScreen.js';
import ProviderScreen from '../screens/ProviderScreen.js';
const nav = createStackNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },
  CategoryDetail: { screen: CategoryDetailScreen },
  Booking: { screen: BookingScreen },
  Provider: { screen: ProviderScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

export default nav;
