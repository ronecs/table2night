import { apiClient } from '@table2night/api/apiUtils';

export const fetchRestaurantList = async () => {
  const result = await apiClient.get('GetRestaurantList/');
  return result;
};

export const fetchRestaurantDetail = async (id: string) => {
  const result = await apiClient.get(`GetRestaurantList/?${id}`);
  return result;
};
