import { apiClient } from '@table2night/api/apiUtils';
import { getApiToken } from '@table2night/utils/commonUtils';

export const fetchRestaurantList = async () => {
  const result = await apiClient.get('GetRestaurantList/');
  return result;
};

export const fetchRestaurantDetail = async (id: string) => {
  const result = await apiClient.get(`GetRestaurantDetail/${id}?dbs_psswd=${getApiToken()}`);
  return result;
};
