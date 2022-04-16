import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import VideoCall from '@table2night/components/VideoCall/VideoCall';
import PageHeader from '@table2night/components/common/PageHeader';

const VideoCallScreen: FC = () => (
  <SafeAreaPaddingScreen>
    <PageHeader />
    <VideoCall />
  </SafeAreaPaddingScreen>
);

export default VideoCallScreen;
