import { apiClient } from '@table2night/api/apiUtils';
import qs from 'qs';
import { TUserLoginInfo } from '@table2night/types/TUser';
import { getApiToken } from '@table2night/utils/commonUtils';

export const registerUser = async (data: any) => {
  const result = await apiClient.post(`/RegisterUser/`, qs.stringify(data), {});
  return result;
};

export const loginUser = async (data: TUserLoginInfo) => {
  const result = await apiClient.get(
    `/LoginUser/?dbs_psswd=${getApiToken()}&email=${data.email}&password=${data.password}`,
  );
  return result;
};
