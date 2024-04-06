import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from '../constants/app_routes';
import Transactions from '../screens/Transactions';
import Transaction from '../screens/Transaction';

const TransactionStackNavigator = () => {
  const TransactionStack = createStackNavigator();

  return (
    <TransactionStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TransactionStack.Screen
        name={AppRoutes.TransactionsScreen}
        component={Transactions}
      />
      <TransactionStack.Screen name={AppRoutes.TransactionScreen} component={Transaction} />
    </TransactionStack.Navigator>
  );
};

export default TransactionStackNavigator;