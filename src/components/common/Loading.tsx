import React, { FC } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { Heading3 } from '@table2night/utils/theme/Texts';

const Wrapper = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

const Loading: FC = () => (
  <Wrapper>
    <Heading3 style={{ paddingVertical: 16 }}>Loading...</Heading3>
    <ActivityIndicator />
  </Wrapper>
);

export default Loading;
