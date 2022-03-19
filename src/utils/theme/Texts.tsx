import styled from 'styled-components/native';

const MediumText = styled.Text`
  font-family: 'SF-Medium';
`;

const BoldText = styled.Text`
  font-family: 'SF-Black';
`;

export const Heading1 = styled(MediumText)`
  font-size: 34px;
  line-height: 40px;
`;

export const Heading2 = styled(MediumText)`
  font-size: 29px;
  line-height: 34px;
`;

export const Heading3 = styled(MediumText)`
  font-size: 21px;
  line-height: 26px;
`;

export const ButtonLabel = styled(BoldText)`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;
`;

export const Body = styled(MediumText)`
  font-size: 16px;
  line-height: 22px;
`;
