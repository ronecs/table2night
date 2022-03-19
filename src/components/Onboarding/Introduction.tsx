import React, { FC } from 'react';
import IntroductionImage from '@table2night/assets/img/introductionImage.svg';
import styled from 'styled-components/native';
import Button from '@table2night/components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { TButtonVariant } from '@table2night/types/TButton';
import ROUTES from '@table2night/navigation/routes/routes';
import { Body, Heading1 } from '@table2night/utils/theme/Texts';

export const Title = styled(Heading1)`
  margin-top: ${({ theme }) => theme.space.space48};
`;

export const Description = styled(Body)`
  margin-top: ${({ theme }) => theme.space.space16};
  text-align: center;
  padding: 0 ${({ theme }) => theme.space.space32};
  color: ${({ theme }) => theme.color.gray100};
`;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${({ theme }) => theme.space.space80};
`;

const ButtonsWrapper = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.space.space16};
`;

const ButtonWrapper = styled.View`
  padding-top: ${({ theme }) => theme.space.space8};
`;

const Introduction: FC = () => {
  const { navigate } = useNavigation();
  const onLoginPress = () => {
    navigate(ROUTES.LoginScreen);
  };
  const onRegisterPress = () => {
    navigate(ROUTES.RegisterScreen);
  };
  return (
    <Wrapper>
      <IntroductionImage />
      <Title>Welcome</Title>
      <Description>
        To use our app please Log In. {'\n'}If you do not have account please create one first.
      </Description>
      <ButtonsWrapper>
        <ButtonWrapper>
          <Button label="Create account" onPress={onRegisterPress} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant={TButtonVariant.SECONDARY} label="Login" onPress={onLoginPress} />
        </ButtonWrapper>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Introduction;
