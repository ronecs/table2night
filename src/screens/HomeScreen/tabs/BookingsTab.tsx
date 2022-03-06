import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/components/common/ScreenWrappers';
import styled from 'styled-components/native';

const Title = styled.Text`
  color: ${({ theme }) => theme.color.gray1};
  font-size: 44px;
`;

const BookingsTab: FC = () => {
  return (
    <SafeAreaPaddingScreen>
      <Title>Bookings Tab</Title>
    </SafeAreaPaddingScreen>
  );
};

export default BookingsTab;
