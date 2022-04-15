import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from '@table2night/utils/theme/theme';
import Toast from 'react-native-toast-message';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import ReactQueryProvider from '@table2night/contexts/ReactQueryContext';
import { UserInfoProvider } from '@table2night/contexts/UserContext';
import { TBasicUserInfo } from '@table2night/types/TUser';
import { initializeUserInfo } from '@table2night/utils/userUtils';
import { loadFonts } from './utils/commonUtils';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  // State to store information if App has finished loading
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // State to store information about user if they're logged in
  const [userInfo, setUserInfo] = useState<TBasicUserInfo | null>(null);

  // Function to do loading at startup... while splash is showed
  const appStart = async (): Promise<void> => {
    await loadFonts();
    await initializeUserInfo(setUserInfo);
  };

  // If App is still loading, return splash screen
  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={appStart}
        onFinish={() => setIsLoaded(true)}
        onError={() => {
          console.log('Error while loading app');
        }}
      />
    );
  }

  // App
  return (
    <UserInfoProvider value={{ userInfo, setUserInfo }}>
      <ThemeProvider theme={theme}>
        <ReactQueryProvider>
          <BottomSheetModalProvider>
            <MainNavigation />
            <Toast />
          </BottomSheetModalProvider>
        </ReactQueryProvider>
      </ThemeProvider>
    </UserInfoProvider>
  );
};

export default App;
