import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ROUTES from './routes/routes';

const Stack = createStackNavigator();

const MainNavigation: FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={ROUTES.HomeScreen}>
      <Stack.Screen
        name={ROUTES.HomeScreen}
        component={HomeScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
