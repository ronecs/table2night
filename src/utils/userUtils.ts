import { Dispatch } from 'react';
import { TBasicUserInfo } from '@table2night/types/TUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '@table2night/utils/storageUtils';
import Toast from 'react-native-toast-message';

export const initializeUserInfo = async (setUserInfo: Dispatch<TBasicUserInfo>): Promise<void> => {
  try {
    const storageUserInfo = await AsyncStorage.getItem(STORAGE_KEYS.USER_INFO);
    if (!storageUserInfo) return;
    setUserInfo(JSON.parse(storageUserInfo));
  } catch (e) {
    Toast.show({
      type: 'error',
      text1: e.message,
      autoHide: true,
    });
  }
};
