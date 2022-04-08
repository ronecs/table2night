import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TBasicUserInfo } from '@table2night/types/TUser';
import { Heading2 } from '@table2night/utils/theme/Texts';
import Button from '@table2night/components/common/Button';
import { TButtonVariant } from '@table2night/types/TButton';
import Routes from '@table2night/navigation/routes/routes';
import { useNavigation } from '@react-navigation/native';

const Wrapper = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.space.space16};
`;

const Avatar = styled.Image`
  width: ${({ theme }) => theme.space.space64};
  height: ${({ theme }) => theme.space.space64};
  border-radius: ${({ theme }) => theme.space.space64};
  margin-right: ${({ theme }) => theme.space.space16};
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ButtonsWrapper = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.space.space16};
  padding: ${({ theme }) => theme.space.space16};
`;

const LogOutButtonWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.space.space32};
`;

const ButtonWrapper = styled.View`
  margin-top: ${({ theme }) => theme.space.space16};
`;

type Props = {
  user: TBasicUserInfo;
};

const Profile: FC<Props> = ({ user }) => {
  const { navigate } = useNavigation();
  const onLogoutPress = () => {
    // ToDo - remove id from local storage and from context and restart app with new settings
  };

  const onButtonPress = (route: string) => () => {
    navigate(route);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Avatar source={{ uri: user.image }} />
        <Heading2>{user.name}</Heading2>
      </HeaderWrapper>
      <ButtonsWrapper>
        <LogOutButtonWrapper>
          <Button variant={TButtonVariant.SECONDARY} onPress={onLogoutPress} label="Log out" />
        </LogOutButtonWrapper>
        <ButtonWrapper>
          <Button onPress={onButtonPress(Routes.HomeTab)} label="Go back Home" />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onPress={onButtonPress(Routes.BookingsTab)} label="Show my bookings" />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onPress={() => undefined} label="Call a friend" />
        </ButtonWrapper>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Profile;
