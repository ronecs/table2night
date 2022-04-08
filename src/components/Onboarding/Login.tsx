import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { Heading2 } from '@table2night/utils/theme/Texts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '@table2night/components/common/Input';
import Button from '@table2night/components/common/Button';
import { KeyboardAvoidingView } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '@table2night/navigation/routes/routes';

export const Title = styled(Heading2)`
  align-self: flex-start;
`;

const ContentWrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.View`
  margin-top: ${({ theme }) => theme.space.space8};
`;

const InputsWrapper = styled.View`
  width: 100%;
  padding: 0 ${({ theme }) => theme.space.space32};
  padding-top: ${({ theme }) => theme.space.space32};
`;

const ButtonsWrapper = styled.View`
  flex-direction: row;
  padding: 0 ${({ theme }) => theme.space.space32};
  padding-top: ${({ theme }) => theme.space.space32};
`;

const Login: FC = () => {
  const { reset } = useNavigation();
  // ToDo: Add validation of fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
    try {
      // Do API call here instead of timeout
      await new Promise((r) => setTimeout(r, 2000));
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: e.message,
        autoHide: true,
        position: 'bottom',
      });
    }

    setIsLoading(false);
    reset({
      index: 0,
      routes: [{ name: ROUTES.HomeScreen }],
    });
  };
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <Title>Login</Title>
      <ContentWrapper>
        <InputsWrapper>
          <InputWrapper>
            <Input placeHolder="E-mail" onTextChange={setEmail} isEmail />
          </InputWrapper>
          <InputWrapper>
            <Input placeHolder="Password" onTextChange={setPassword} isPassword />
          </InputWrapper>
        </InputsWrapper>
        <KeyboardAvoidingView behavior="padding">
          <ButtonsWrapper>
            <Button loading={isLoading} onPress={onSubmit} label="Submit" />
          </ButtonsWrapper>
        </KeyboardAvoidingView>
      </ContentWrapper>
    </KeyboardAwareScrollView>
  );
};

export default Login;
