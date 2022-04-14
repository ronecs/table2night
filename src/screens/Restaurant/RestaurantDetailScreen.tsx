import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import RestaurantDetailContainer from '@table2night/components/Restaurant/RestaurantDetail.container';
import styled from 'styled-components/native';
import PageHeader from '@table2night/components/common/PageHeader';
import { RouteProp } from '@react-navigation/native';

const StyledSafeArea = styled(SafeAreaPaddingScreen)`
  background-color: ${({ theme }) => theme.color.white};
`;

type Props = {
  route: RouteProp<any, any>;
};

const RestaurantDetailScreen: FC<Props> = ({ route }) => {
  const restaurantId = route?.params?.id;
  return (
    <StyledSafeArea edges={['top']}>
      <PageHeader />
      <RestaurantDetailContainer id={restaurantId} />
    </StyledSafeArea>
  );
};

export default RestaurantDetailScreen;
