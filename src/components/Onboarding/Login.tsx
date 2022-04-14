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
import { useMutation } from 'react-query';
import { loginUser } from '@table2night/api/user';
import { useUserInfo } from '@table2night/contexts/UserContext';
import { TBasicUserInfo } from '@table2night/types/TUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '@table2night/utils/storageUtils';

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
  const { setUserInfo } = useUserInfo();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutateAsync: loginUserMutation, isLoading, data } = useMutation(loginUser);

  const onSubmit = async () => {
    try {
      const formValues = {
        email,
        password,
      };
      await loginUserMutation(formValues);
      if (!isLoading && data?.data.items) {
        const user = data.data.items[0];
        // Set info into user context
        const userInfo: TBasicUserInfo = {
          id: user.id_users,
          name: user.user_name,
          image: user.user_image,
        };
        setUserInfo(userInfo);
        // Set info into AsyncStorage
        await AsyncStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(userInfo));
        // Navigate to homeScreen
        reset({ index: 0, routes: [{ name: ROUTES.HomeScreen }] });
      } else {
        Toast.show({
          type: 'error',
          text1: `Server couldn't handle request. Try again`,
          autoHide: true,
          position: 'bottom',
          visibilityTime: 1000,
        });
      }
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: e.message,
        autoHide: true,
        position: 'bottom',
      });
    }
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
