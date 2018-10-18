import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen.js';
import CategoryScreen from '../screens/CategoryScreen.js';
import CategoryDetailScreen from '../screens/CategoryDetailScreen.js';
import BookingScreen from '../screens/BookingScreen.js';
import ProviderScreen from '../screens/ProviderScreen.js';
import ProviderHomeScreen from '../screens/ProviderHomeScreen.js';
import ProviderHistory from '../screens/HistoryScreen.js'
const nav = createStackNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },
  CategoryDetail: { screen: CategoryDetailScreen },
  Booking: { screen: BookingScreen },
  Provider: { screen: ProviderScreen },
  ProviderHome: { screen: ProviderHomeScreen },
  ProviderHistory: { screen: ProviderHistory },
  },
  {
    initialRouteName: 'Home',
  }
);

export default nav;
