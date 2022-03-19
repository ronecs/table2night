import React, { FC, useState } from 'react';
import styled, { useTheme } from 'styled-components/native';

const StyledInput = styled.TextInput`
  flex-direction: row;
  border-radius: ${({ theme }) => theme.space.space8};
  padding: ${({ theme }) => theme.space.space16};
  border-color: ${({ theme }) => theme.color.gray100};
  border-width: 1px;
  margin-top: ${({ theme }) => theme.space.space4};
  width: 100%;
`;

type Props = {
  placeHolder?: string;
  onTextChange: (text: string) => void;
  isPassword?: boolean;
  isEmail?: boolean;
};

const Input: FC<Props> = ({ placeHolder, isPassword = false, onTextChange, isEmail = false }) => {
  const [inputValue, setInputValue] = useState('');
  const onTextChangeInternal = (text: string) => {
    setInputValue(text);
    onTextChange(text);
  };
  const theme = useTheme();
  return (
    <StyledInput
      value={inputValue}
      onChangeText={onTextChangeInternal}
      placeholder={placeHolder}
      placeholderTextColor={theme.color.gray80}
      secureTextEntry={isPassword}
      keyboardType={isEmail ? 'email-address' : undefined}
    />
  );
};

export default Input;
