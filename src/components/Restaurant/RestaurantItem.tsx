import { Heading3 } from '@table2night/utils/theme/Texts';
import React, { FC } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '@table2night/navigation/routes/routes';
import { getImageUri } from '@table2night/utils/commonUtils';

const Wrapper = styled.Pressable`
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
  id: string;
};

const RestaurantItem: FC<Props> = ({ name, image, id }) => {
  const { navigate } = useNavigation();

  const onItemPress = () => {
    navigate(ROUTES.RestaurantDetailScreen, { id });
  };

  return (
    <Wrapper onPress={onItemPress}>
      <StyledImage source={{ uri: getImageUri(image) }} />
      <NameWrapper>
        <Heading3>{name}</Heading3>
      </NameWrapper>
    </Wrapper>
  );
};

export default RestaurantItem;
