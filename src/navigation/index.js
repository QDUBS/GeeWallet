import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../constants/app_routes';
import AuthStackNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.HomeTab} component={DrawerNavigator } />
    </Stack.Navigator>
  );
};

export default RootNavigator;