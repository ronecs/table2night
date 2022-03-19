import { Heading3 } from '@table2night/utils/theme/Texts';
import React, { FC } from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.space.space8};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.space.space16};
`;

const StyledImage = styled.Image`
  width: 100%;
  aspect-ratio: 1.75;
  border-radius: ${({ theme }) => theme.space.space16};
`;

const NameWrapper = styled.View`
  padding: ${({ theme }) => theme.space.space8} 0;
`;

type Props = {
  name: string;
  image: string;
};

const RestaurantItem: FC<Props> = ({ name, image }) => (
  <Wrapper>
    <StyledImage source={{ uri: image }} />
    <NameWrapper>
      <Heading3>{name}</Heading3>
    </NameWrapper>
  </Wrapper>
);

export default RestaurantItem;
