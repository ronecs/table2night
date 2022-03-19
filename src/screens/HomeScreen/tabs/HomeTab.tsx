import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import RestaurantListContainer from '@table2night/components/Restaurant/RestaurantList.container';

const HomeTab: FC = () => (
  <SafeAreaPaddingScreen edges={['top']}>
    <RestaurantListContainer />
  </SafeAreaPaddingScreen>
);

export default HomeTab;
