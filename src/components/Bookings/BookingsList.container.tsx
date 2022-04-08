import React, { FC } from 'react';
import { bookingsList } from '@table2night/fixtures/fixtures';
import BookingsList from '@table2night/components/Bookings/BookingsList';
import dayjs from 'dayjs';
import { TBookingsList } from '@table2night/types/TBooking';

const BookingsListContainer: FC = () => {
  // ToDo - Actually fetch data here instead of importing fixtures
  const bookings = bookingsList;
  // Modify data into sections
  const date = dayjs();
  const activeBookings: TBookingsList = [];
  const pastBookings: TBookingsList = [];

  bookings.forEach((booking) => {
    if (dayjs(booking.date) < date) {
      pastBookings.push(booking);
    } else activeBookings.push(booking);
  });

  const sectionedBookings = [
    { title: 'Active', data: activeBookings },
    { title: 'Past', data: pastBookings },
  ];
  return <BookingsList bookings={sectionedBookings} />;
};

export default BookingsListContainer;
