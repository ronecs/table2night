import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import styled from 'styled-components/native';

const Title = styled.Text`
  color: ${({ theme }) => theme.color.gray1};
  font-size: 44px;
`;

const SettingsTab: FC = () => (
  <SafeAreaPaddingScreen>
    <Title>Settings Tab</Title>
  </SafeAreaPaddingScreen>
);

export default SettingsTab;
