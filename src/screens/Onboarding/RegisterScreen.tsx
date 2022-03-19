import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import Register from '@table2night/components/Onboarding/Register';
import PageHeader from '@table2night/components/common/PageHeader';

const RegisterScreen: FC = () => (
  <SafeAreaPaddingScreen>
    <PageHeader />
    <Register />
  </SafeAreaPaddingScreen>
);

export default RegisterScreen;
