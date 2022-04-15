import React, { FC } from 'react';
import Profile from '@table2night/components/Profile/Profile';
import styled from 'styled-components/native';
import { Heading2 } from '@table2night/utils/theme/Texts';
import { useUserInfo } from '@table2night/contexts/UserContext';

const Header = styled(Heading2)`
  width: 60%;
  padding: ${({ theme }) => theme.space.space16} 0;
`;

const ProfileContainer: FC = () => {
  const { userInfo, setUserInfo } = useUserInfo();
  return (
    <>
      <Header>Profile</Header>
      <Profile user={userInfo} setUserInfo={setUserInfo} />
    </>
  );
};

export default ProfileContainer;
