import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import styled from 'styled-components/native';
import Button from '@table2night/components/common/Button';

const Title = styled.Text`
  color: ${({ theme }) => theme.color.gray1};
  font-size: 44px;
`;

const HomeTab: FC = () => (
  <SafeAreaPaddingScreen>
    <Title>Home Tab</Title>
    <Button />
  </SafeAreaPaddingScreen>
);

export default HomeTab;
