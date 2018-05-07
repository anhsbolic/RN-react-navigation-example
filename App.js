import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Navigators
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'

// StackNavigator screens
import ItemList from './page/ItemList'
import Item from './page/Item'

// TabNavigator screens
import TabA from './page/TabA'
import TabB from './page/TabB'
import TabC from './page/TabC'

// Plain old component
import Plain from './page/Plain'

export const Stack = StackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
}, {
  initialRouteName: 'ItemList',
})

export const Tabs = TabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: TabC },
}, {
  order: ['TabA', 'TabB', 'TabC']
})

export const Drawer = DrawerNavigator({
  Stack: { screen: Stack },
  Tabs: { screen: Tabs },
  Plain: { screen: Plain },
})