import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import RestaurantDetailContainer from '@table2night/components/Restaurant/RestaurantDetail.container';
import styled from 'styled-components/native';
import PageHeader from '@table2night/components/common/PageHeader';

const StyledSafeArea = styled(SafeAreaPaddingScreen)`
  background-color: ${({ theme }) => theme.color.white};
`;

const RestaurantDetailScreen: FC = () => (
  <StyledSafeArea edges={['top']}>
    <PageHeader />
    <RestaurantDetailContainer />
  </StyledSafeArea>
);

export default RestaurantDetailScreen;
