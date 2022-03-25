import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingsTab from '@table2night/screens/HomeScreen/tabs/BookingsTab';
import SettingsTab from '@table2night/screens/HomeScreen/tabs/SettingsTab';
import BookingsIcon from '@table2night/assets/img/bookingsIcon.svg';
import BookingsIconFocused from '@table2night/assets/img/bookingsIconFocused.svg';
import HomeIcon from '@table2night/assets/img/homeIcon.svg';
import HomeIconFocused from '@table2night/assets/img/homeIconFocused.svg';
import ProfileIcon from '@table2night/assets/img/profileIcon.svg';
import ProfileIconFocused from '@table2night/assets/img/profileIconFocused.svg';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ROUTES from './routes/routes';
import HomeTab from '../screens/HomeScreen/tabs/HomeTab';

const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.space.space16};
`;

const Tab = createBottomTabNavigator();

const HomeTabNavigation: FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { justifyContent: 'center', alignItems: 'center', height: 50 + insets.bottom },
      }}
    >
      <Tab.Screen
        name={ROUTES.HomeTab}
        component={HomeTab}
        options={{
          title: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IconWrapper>
                <HomeIconFocused />
              </IconWrapper>
            ) : (
              <IconWrapper>
                <HomeIcon />
              </IconWrapper>
            ),
        }}
      />
      <Tab.Screen
        name={ROUTES.BookingsTab}
        component={BookingsTab}
        options={{
          title: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IconWrapper>
                <BookingsIconFocused />
              </IconWrapper>
            ) : (
              <IconWrapper>
                <BookingsIcon />
              </IconWrapper>
            ),
        }}
      />
      <Tab.Screen
        name={ROUTES.SettingsTab}
        component={SettingsTab}
        options={{
          title: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IconWrapper>
                <ProfileIconFocused />
              </IconWrapper>
            ) : (
              <IconWrapper>
                <ProfileIcon />
              </IconWrapper>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
