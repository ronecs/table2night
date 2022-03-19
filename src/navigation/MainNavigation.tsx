import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from '@table2night/screens/Onboarding/IntroductionScreen';
import RegisterScreen from '@table2night/screens/Onboarding/RegisterScreen';
import LoginScreen from '@table2night/screens/Onboarding/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ROUTES from './routes/routes';

const Stack = createStackNavigator();

const MainNavigation: FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={ROUTES.IntroductionScreen}>
      <Stack.Screen
        name={ROUTES.IntroductionScreen}
        component={IntroductionScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={ROUTES.RegisterScreen}
        component={RegisterScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={ROUTES.LoginScreen}
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={ROUTES.HomeScreen}
        component={HomeScreen}
        options={{ header: () => null, gestureEnabled: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
