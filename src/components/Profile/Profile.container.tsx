import React, { FC } from 'react';
import Profile from '@table2night/components/Profile/Profile';
import { userProfile } from '@table2night/fixtures/fixtures';
import styled from 'styled-components/native';
import { Heading2 } from '@table2night/utils/theme/Texts';

const Header = styled(Heading2)`
  width: 60%;
  padding: ${({ theme }) => theme.space.space16} 0;
`;

const ProfileContainer: FC = () => {
  // ToDo - fetch actual data or retrieve from localStorage/UserContext
  const data = userProfile;
  return (
    <>
      <Header>Profile</Header>
      <Profile user={data} />
    </>
  );
};

export default ProfileContainer;
