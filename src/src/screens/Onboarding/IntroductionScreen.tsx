import React, { FC } from 'react';
import Introduction from '@table2night/components/Onboarding/Introduction';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';

const IntroductionScreen: FC = () => (
  <SafeAreaPaddingScreen>
    <Introduction />
  </SafeAreaPaddingScreen>
);

export default IntroductionScreen;
