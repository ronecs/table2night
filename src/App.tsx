import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from '@table2night/utils/theme/theme';
import Toast from 'react-native-toast-message';
import {
  BottomSheetContext,
  BottomSheetProvider,
} from '@gorhom/bottom-sheet/lib/typescript/contexts';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { loadFonts } from './utils/commonUtils';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  // State to store information if App has finished loading
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Function to do loading at startup... while splash is showed
  const appStart = async (): Promise<void> => {
    await loadFonts();
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
    <ThemeProvider theme={theme}>
      <BottomSheetModalProvider>
        <MainNavigation />
        <Toast />
      </BottomSheetModalProvider>
    </ThemeProvider>
  );
};

export default App;
