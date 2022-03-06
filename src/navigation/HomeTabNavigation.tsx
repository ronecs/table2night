import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../screens/HomeScreen/tabs/HomeTab';
import ROUTES from './routes/routes';
import BookingsTab from '@table2night/screens/HomeScreen/tabs/BookingsTab';
import SettingsTab from '@table2night/screens/HomeScreen/tabs/SettingsTab';

const Tab = createBottomTabNavigator();

const HomeTabNavigation: FC = () => (
  <Tab.Navigator>
    <Tab.Screen name={ROUTES.HomeTab} component={HomeTab} />
    <Tab.Screen name={ROUTES.BookingsTab} component={BookingsTab} />
    <Tab.Screen name={ROUTES.SettingsTab} component={SettingsTab} />
  </Tab.Navigator>
);

export default HomeTabNavigation;
