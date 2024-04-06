import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import DrawerHeader from '../components/common/DrawerHeader';
import { AppRoutes } from '../constants/app_routes';
import BottomTabNavigator from './BottomTabNavigator';
import NewTransactionStackNavigator from './NewTransactionNavigator';
import TransactionStackNavigator from './TransactionNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => <DrawerHeader {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#f3f3f3',
        drawerActiveTintColor: '#333',
        drawerInactiveTintColor: '#ccc',
        drawerLabelStyle: {marginLeft: -20},
      }}>
      <Drawer.Screen
        name={AppRoutes.HomeDrawer}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Feather name="home" color={color} size={18} />
          ),
        }}
      />
      <Drawer.Screen
        name={AppRoutes.TransactionsDrawer}
        component={TransactionStackNavigator}
        options={{
          title: 'My Transactions',
          drawerIcon: ({focused, color, size}) => (
              <Octicons name="tasklist" color={color} size={18} />
          ),
        }}
      />
      <Drawer.Screen
        name={AppRoutes.NewTransactionDrawer}
        component={NewTransactionStackNavigator}
        options={{
          title: 'New Transaction',
          drawerIcon: ({focused, color, size}) => (
              <Ionicons name="wallet-outline" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;