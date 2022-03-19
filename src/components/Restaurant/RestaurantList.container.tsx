import React, { FC } from 'react';
import { restaurantsList } from '@table2night/fixtures/fixtures';
import RestaurantList from '@table2night/components/Restaurant/RestaurantList';

const RestaurantListContainer: FC = () => {
  // ToDo - Actually fetch data here instead of importing fixtures
  const restaurants = restaurantsList;
  return <RestaurantList restaurants={restaurants} />;
};

export default RestaurantListContainer;
