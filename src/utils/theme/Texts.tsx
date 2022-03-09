import styled from 'styled-components/native';

export const Heading1 = styled.Text`
  font-size: 34px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.black};
`;

export const Heading2 = styled.Text`
  font-size: 29px;
  line-height: 34px;
  color: ${({ theme }) => theme.color.black};
`;

export const Heading3 = styled.Text`
  font-size: 21px;
  line-height: 26px;
  color: ${({ theme }) => theme.color.black};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.color.black};
`;

export const Body = styled.Text`
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.color.black};
`;
