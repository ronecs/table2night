import { FC } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { ButtonLabel } from '@table2night/utils/theme/Texts';
import { TButtonSize, TButtonStyle, TButtonVariant } from '@table2night/types/TButton';
import { stripPx, TTheme } from '@table2night/utils/theme/theme';

const Wrapper = styled.Pressable<{
  backgroundColor: string;
  paddingHorizontal: number;
  paddingVertical: number;
}>`
  flex-direction: row;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ paddingVertical }) => paddingVertical}px
    ${({ paddingHorizontal }) => paddingHorizontal}px;
  border-radius: ${({ theme }) => theme.space.space8};
`;

const Label = styled(ButtonLabel)<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
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

  // eslint-disable-next-line default-case
  switch (size) {
    case TButtonSize.SMALL:
      paddingHorizontal = stripPx(theme.space.space16);
      paddingVertical = stripPx(theme.space.space8);
      break;
    case TButtonSize.LARGE:
      paddingHorizontal = stripPx(theme.space.space64);
      paddingVertical = stripPx(theme.space.space32);
      break;
  }

  // eslint-disable-next-line default-case
  switch (variant) {
    case TButtonVariant.SECONDARY:
      color = theme.color.green30;
      textColor = theme.color.green80;
      break;
  }

  if (disabled) {
    color = theme.color.gray20;
    textColor = theme.color.gray80;
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
    <Wrapper
      backgroundColor={buttonStyles.color}
      paddingHorizontal={buttonStyles.paddingHorizontal}
      paddingVertical={buttonStyles.paddingVertical}
      onPress={disabled ? undefined : onPress}
    >
      <Label textColor={buttonStyles.textColor}>{label}</Label>
    </Wrapper>
  );
};

export default Button;
