import React, { FC } from 'react';
import RestaurantList from '@table2night/components/Restaurant/RestaurantList';
import { useQuery } from 'react-query';
import { fetchRestaurantList } from '@table2night/api/restaurant';
import Loading from '@table2night/components/common/Loading';
import Error from '@table2night/components/common/Error';

const RestaurantListContainer: FC = () => {
  const { isLoading, isError, data, refetch } = useQuery(
    'query-restaurant-list',
    fetchRestaurantList,
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error onRetryPress={refetch} />;
  }

  const restaurants = data?.data.items;

  return <RestaurantList restaurants={restaurants} />;
};

export default RestaurantListContainer;
