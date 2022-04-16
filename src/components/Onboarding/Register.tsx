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
import { registerUser } from '@table2night/api/user';
import * as ImagePicker from 'expo-image-picker';

import { TButtonVariant } from '@table2night/types/TButton';
import { getApiToken, getImageUri } from '@table2night/utils/commonUtils';
import { stripPx } from '@table2night/utils/theme/theme';

const emailRegex = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
);

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
  padding-top: ${({ theme }) => theme.space.space48};
`;

const StyledImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.space.space16};
  margin-top: ${({ theme }) => theme.space.space8};
`;

const Register: FC = () => {
  const { navigate } = useNavigation();
  // States for user values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const { mutateAsync: registerUserMutation, isLoading, error } = useMutation(registerUser);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.2,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.base64 ?? null);
    }
  };

  const onSubmit = async () => {
    if (name.length < 1 || email.length < 1 || password.length < 1) {
      Toast.show({
        type: 'error',
        text1: 'Please fill out all fields',
        autoHide: true,
        position: 'bottom',
      });
      return;
    }
    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Please enter valid email address',
        autoHide: true,
        position: 'bottom',
      });
      return;
    }
    if (!image) {
      Toast.show({
        type: 'error',
        text1: 'Please add profile image',
        autoHide: true,
        position: 'bottom',
      });
      return;
    }
    try {
      const formData = {
        user_name: name,
        email,
        password,
        dbs_psswd: getApiToken(),
        user_image: image,
      };
      await registerUserMutation(formData);
      Toast.show({
        type: 'success',
        text1: 'Successfully registered',
        autoHide: true,
      });
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Failed to register',
        autoHide: true,
        position: 'bottom',
      });
    }
    navigate(ROUTES.IntroductionScreen);
  };
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center', paddingBottom: 32 }}
    >
      <Title>Register</Title>
      <ContentWrapper>
        <InputsWrapper>
          <InputWrapper>
            <Input placeHolder="Name" onTextChange={setName} />
          </InputWrapper>
          <InputWrapper>
            <Input placeHolder="E-mail" onTextChange={setEmail} isEmail />
          </InputWrapper>
          <InputWrapper>
            <Input placeHolder="Password" onTextChange={setPassword} isPassword />
          </InputWrapper>
          <InputWrapper>
            <Button
              onPress={pickImage}
              variant={TButtonVariant.SECONDARY}
              label={`${image ? 'Change' : 'Add'} your profile Image`}
            />
            {image && <StyledImage source={{ uri: getImageUri(image) }} />}
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

export default Register;
