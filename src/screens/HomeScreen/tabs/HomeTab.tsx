import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import Button from '@table2night/components/common/Button';
import { Heading1 } from '@table2night/utils/theme/Texts';
import { TButtonVariant } from '@table2night/types/TButton';

const HomeTab: FC = () => (
  <SafeAreaPaddingScreen>
    <Heading1>Home Tab</Heading1>
    <Button variant={TButtonVariant.PRIMARY} onPress={() => undefined} label="Press me" />
  </SafeAreaPaddingScreen>
);

export default HomeTab;
