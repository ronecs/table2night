import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import PageHeader from '@table2night/components/common/PageHeader';
import Login from '@table2night/components/Onboarding/Login';

const LoginScreen: FC = () => (
  <SafeAreaPaddingScreen>
    <PageHeader />
    <Login />
  </SafeAreaPaddingScreen>
);

export default LoginScreen;
