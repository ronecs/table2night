import React, { FC } from 'react';
import { SafeAreaPaddingScreen } from '@table2night/utils/theme/ScreenWrappers';
import BookingsListContainer from '@table2night/components/Bookings/BookingsList.container';

const BookingsTab: FC = () => (
  <SafeAreaPaddingScreen edges={['top']}>
    <BookingsListContainer />
  </SafeAreaPaddingScreen>
);

export default BookingsTab;
