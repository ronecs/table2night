import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'SF-Heavy': {
      // eslint-disable-next-line global-require
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Heavy.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Black': {
      // eslint-disable-next-line global-require
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Black.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Bold': {
      // eslint-disable-next-line global-require
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Bold.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Light': {
      // eslint-disable-next-line global-require
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Light.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Medium': {
      // eslint-disable-next-line global-require
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Medium.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-Regular': {
      // eslint-disable-next-line global-require
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Regular.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'SF-SemiBold': {
      // eslint-disable-next-line global-require
      uri: require('@table2night/assets/fonts/SF-Pro-Rounded-Semibold.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
  });
};
