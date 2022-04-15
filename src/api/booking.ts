import { apiClient } from '@table2night/api/apiUtils';
import qs from 'qs';
import { getApiToken } from '@table2night/utils/commonUtils';

export const addBooking = async (data: any) => {
  const result = await apiClient.post(`CreateBooking/`, qs.stringify(data), {});
  return result;
};

export const getUserBookings = async (id: string) => {
  const result = await apiClient.get(`GetBookings/${id}?dbs_psswd=${getApiToken()}`);
  return result;
};

export const deleteBooking = async (id: string) => {
  const result = await apiClient.delete(`DeleteBooking/${id}?dbs_psswd=${getApiToken()}`);
  return result;
};

export const editBooking = async (data: any) => {
  const result = await apiClient.put(
    `EditBooking/${data.id}?dbs_psswd=${getApiToken()}&num_ppl=${data.num_ppl}&date_time=${
      data.date_time
    }`,
  );
  return result;
};
