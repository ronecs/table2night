import { Body, Heading2 } from '@table2night/utils/theme/Texts';
import React, { FC } from 'react';
import styled from 'styled-components/native';
import Button from '@table2night/components/common/Button';
import { TButtonVariant } from '@table2night/types/TButton';
import { getImageUri } from '@table2night/utils/commonUtils';

const Wrapper = styled.ScrollView`
  padding: ${({ theme }) => theme.space.space8};
  border-radius: ${({ theme }) => theme.space.space16};
  flex: 1;
`;

const StyledImage = styled.Image`
  width: 100%;
  aspect-ratio: 1.75;
  border-radius: ${({ theme }) => theme.space.space16};
`;

const NameWrapper = styled.View`
  padding: ${({ theme }) => theme.space.space16} 0;
`;

const StyledDescription = styled(Body)`
  color: ${({ theme }) => theme.color.gray80};
  font-size: 21px;
  margin-top: ${({ theme }) => theme.space.space16};
`;

const ButtonWrapper = styled.View`
  padding: ${({ theme }) => theme.space.space16};
  margin-top: ${({ theme }) => theme.space.space24};
`;

const CallLabel = styled(Body)`
  margin: ${({ theme }) => theme.space.space8};
  text-align: center;
  color: ${({ theme }) => theme.color.gray100};
`;

type Props = {
  name: string;
  image: string;
  description: string;
  onBookButtonPress: () => void;
  showCallButton: boolean;
  onMakeCallPress: () => void;
  isLoading: boolean;
};

const RestaurantDetail: FC<Props> = ({
  name,
  image,
  description,
  onBookButtonPress,
  showCallButton,
  onMakeCallPress,
  isLoading,
}) => (
  <Wrapper>
    <StyledImage source={{ uri: getImageUri(image) }} />
    <NameWrapper>
      <Heading2>{name}</Heading2>
      <StyledDescription>{description}</StyledDescription>
      <ButtonWrapper>
        <Button onPress={onBookButtonPress} label="Book now" loading={isLoading} />
      </ButtonWrapper>
      {showCallButton && !isLoading && (
        <ButtonWrapper>
          <CallLabel>Want to invite your friends?</CallLabel>
          <Button
            variant={TButtonVariant.SECONDARY}
            onPress={onMakeCallPress}
            label="Make a call"
          />
        </ButtonWrapper>
      )}
    </NameWrapper>
  </Wrapper>
);

export default RestaurantDetail;
