import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from '../constants/app_routes';
import NewTransaction from '../screens/cart/NewTransaction';

const NewTransactionStackNavigator = () => {
  const NewTransactionStack = createStackNavigator();

  return (
    <NewTransactionStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NewTransactionStack.Screen
        name={AppRoutes.NewTransactionScreen}
        component={NewTransaction}
      />
    </NewTransactionStack.Navigator>
  );
};

export default NewTransactionStackNavigator;