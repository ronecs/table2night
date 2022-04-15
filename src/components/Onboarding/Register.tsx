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
import { getApiToken } from '@table2night/utils/commonUtils';

const IMAGE =
  'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=';

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

const Register: FC = () => {
  const { navigate } = useNavigation();
  // States for user values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const { mutateAsync: registerUserMutation, isLoading } = useMutation(registerUser);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.base64 ?? null);
    }
  };

  const onSubmit = async () => {
    try {
      const formData = {
        user_name: name,
        email,
        password,
        dbs_psswd: getApiToken(),
        // ToDo - fix this
        user_image: IMAGE || image,
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
      contentContainerStyle={{ alignItems: 'center' }}
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
              label="Add your profile Image"
            />
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
