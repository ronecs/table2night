import { FC } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { ButtonLabel } from '@table2night/utils/theme/Texts';
import { TButtonSize, TButtonStyle, TButtonVariant } from '@table2night/types/TButton';
import { stripPx, TTheme } from '@table2night/utils/theme/theme';

const Wrapper = styled.Pressable`
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.green50};
  padding: ${({ theme }) => theme.space.space16} ${({ theme }) => theme.space.space32};
  border-radius: ${({ theme }) => theme.space.space8};
`;

const Label = styled(ButtonLabel)`
  color: ${({ theme }) => theme.color.white};
`;

const getButtonStyles = (
  variant: TButtonVariant,
  size: TButtonSize,
  disabled: boolean,
  theme: TTheme,
): TButtonStyle => {
  let paddingHorizontal = stripPx(theme.space.space32);
  let paddingVertical = stripPx(theme.space.space16);
  let color = theme.color.green50;
  let textColor = theme.color.white;
  if (disabled) {
    color = theme.color.green30;
    textColor = theme.color.green80;
  }
  // eslint-disable-next-line default-case
  switch (size) {
    case TButtonSize.SMALL:
      paddingHorizontal = stripPx(theme.space.space16);
      paddingVertical = stripPx(theme.space.space8);
      break;
    case TButtonSize.LARGE:
      paddingHorizontal = stripPx(theme.space.space64);
      paddingVertical = stripPx(theme.space.space32);
  }
  // eslint-disable-next-line default-case
  switch (variant) {
    case TButtonVariant.SECONDARY:
      color = theme.color.green30;
      textColor = theme.color.green80;
      break;
  }

  return {
    paddingHorizontal,
    paddingVertical,
    textColor,
    color,
  };
};

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  label?: string;
  variant?: TButtonVariant;
  size?: TButtonSize;
};

const Button: FC<ButtonProps> = ({
  onPress,
  disabled = false,
  label,
  variant = TButtonVariant.PRIMARY,
  size = TButtonSize.DEFAULT,
}) => {
  const theme = useTheme();
  const buttonStyles = getButtonStyles(variant, size, disabled, theme);
  return (
    <Wrapper onPress={disabled ? undefined : onPress}>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Button;
