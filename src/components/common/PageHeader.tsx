import React, { FC } from 'react';
import styled from 'styled-components/native';
import BackIcon from '@table2night/assets/img/backArrow.svg';
import { useNavigation } from '@react-navigation/native';

const Wrapper = styled.View`
  flex-direction: row;
  height: ${({ theme }) => theme.space.space48};
`;

const BackButton = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

const PageHeader: FC = () => {
  const { goBack } = useNavigation();
  return (
    <Wrapper>
      <BackButton onPress={goBack}>
        <BackIcon />
      </BackButton>
    </Wrapper>
  );
};

export default PageHeader;
