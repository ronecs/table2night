import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeAreaPaddingScreen = styled(SafeAreaView)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.space.space16};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;
