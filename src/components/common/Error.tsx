import React, { FC } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { Heading3 } from '@table2night/utils/theme/Texts';
import Button from '@table2night/components/common/Button';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

type Props = {
  onRetryPress: () => void;
};

const Error: FC<Props> = ({ onRetryPress }) => (
  <Wrapper>
    <Heading3 style={{ paddingVertical: 16 }}>Sorry... Something unexpected has happened</Heading3>
    <Button onPress={onRetryPress} label="Retry" />
  </Wrapper>
);

export default Error;
