import React, { FC } from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding: 40px 30px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RestaurantDetailScreen: FC = () => <Wrapper />;

export default RestaurantDetailScreen;
