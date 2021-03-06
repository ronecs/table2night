/* eslint-disable global-require */
import * as Font from 'expo-font';
import Constants from 'expo-constants';

export const loadFonts = async () => {
  await Font.loadAsync({
    'SF-Heavy': {
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Heavy.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Black': {
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Black.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Bold': {
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Bold.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Light': {
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Light.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Medium': {
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Medium.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Regular': {
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Regular.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-SemiBold': {
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Semibold.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
  });
};

export const getApiUrl = () => Constants.manifest?.extra?.apiUrl;
export const getApiToken = () => Constants.manifest?.extra?.apiToken;

export const getImageUri = (value: string) => `data:image/jpeg;base64,${value}`;
