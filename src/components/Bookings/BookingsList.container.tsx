import React, { FC } from 'react';
import BookingsList from '@table2night/components/Bookings/BookingsList';
import dayjs from 'dayjs';
import { TBookingsList } from '@table2night/types/TBooking';
import { useQuery } from 'react-query';
import { getUserBookings } from '@table2night/api/booking';
import { useUserInfo } from '@table2night/contexts/UserContext';
import Loading from '@table2night/components/common/Loading';
import Error from '@table2night/components/common/Error';

const BookingsListContainer: FC = () => {
  const { userInfo } = useUserInfo();

  const { data, isLoading, isError, refetch } = useQuery(
    'query-bookings-list',
    () => getUserBookings(userInfo?.id || ''),
    {
      refetchOnWindowFocus: true,
    },
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error onRetryPress={refetch} />;
  }

  const bookings = data?.data.items;

  // Modify data into sections
  const date = dayjs();
  const activeBookings: TBookingsList = [];
  const pastBookings: TBookingsList = [];

  bookings.forEach((booking: any) => {
    if (dayjs(booking.date_time) < date) {
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
