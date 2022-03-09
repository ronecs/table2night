import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import Button from '@table2night/components/common/Button';
import { Heading1 } from '@table2night/utils/theme/Texts';

const HomeTab: FC = () => (
  <SafeAreaPaddingScreen>
    <Heading1>Home Tab</Heading1>
    <Button disabled onPress={() => undefined} label="Press me" />
  </SafeAreaPaddingScreen>
);

export default HomeTab;
