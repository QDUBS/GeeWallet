import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRoutes } from '../constants/app_routes';
import NewTransactionStackNavigator from './NewTransactionNavigator';
import TransactionStackNavigator from './TransactionNavigator';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 2,
        },
      }}>
      <Tab.Screen
        name={AppRoutes.Home}
        component={TransactionStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
              <Entypo name="home" size={25} color={color} />
          ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name={AppRoutes.NewTransaction}
        component={NewTransactionStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
              <Ionicons name="wallet" size={25} color={color} />
          ),
          title: 'New',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;