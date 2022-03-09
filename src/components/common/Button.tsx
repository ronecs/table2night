import { FC } from 'react';
import styled from 'styled-components/native';
import { ButtonText } from '@table2night/utils/theme/Texts';

const Wrapper = styled.Pressable`
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.green50};
  padding: ${({ theme }) => theme.space.space16} ${({ theme }) => theme.space.space32};
  border-radius: ${({ theme }) => theme.space.space8};
`;

const Button: FC = () => (
  <Wrapper>
    <ButtonText>Button</ButtonText>
  </Wrapper>
);

export default Button;
