import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import ProfileContainer from '@table2night/components/Profile/Profile.container';

const ProfileTab: FC = () => (
  <SafeAreaPaddingScreen edges={['top']}>
    <ProfileContainer />
  </SafeAreaPaddingScreen>
);

export default ProfileTab;
