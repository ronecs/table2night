import styled from 'styled-components/native';

const RegularText = styled.Text`
  font-family: 'SF-Regular';
`;

const MediumText = styled.Text`
  font-family: 'SF-Medium';
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

export const ButtonLabel = styled(MediumText)`
  font-size: 14px;
  line-height: 17px;
`;

export const Body = styled(RegularText)`
  font-size: 16px;
  line-height: 22px;
`;
