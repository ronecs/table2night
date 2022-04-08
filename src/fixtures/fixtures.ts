import { TRestaurantDetail, TRestaurantList } from '@table2night/types/TRestaurant';
import { TBookingsList } from '@table2night/types/TBooking';
import { TBasicUserInfo } from '@table2night/types/TUser';

export const restaurantsList: TRestaurantList = [
  {
    id: '1',
    name: 'Some Restaurant 1',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '2',
    name: 'Some Restaurant 2',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '3',
    name: 'Some Restaurant 3',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

export const bookingsList: TBookingsList = [
  {
    id: '1',
    restaurantName: 'Some Restaurant 1',
    date: '2022-01-30T14:51:46.895Z',
    peopleCount: '2',
  },
  {
    id: '2',
    restaurantName: 'Some Restaurant 2',
    date: '2021-03-30T14:51:46.895Z',
    peopleCount: '2',
  },
  {
    id: '3',
    restaurantName: 'Some Restaurant 3',
    date: '2020-03-30T14:51:46.895Z',
    peopleCount: '2',
  },
  {
    id: '5',
    restaurantName: 'Some Restaurant 2',
    date: '2022-04-03T14:51:46.895Z',
    peopleCount: '2',
  },
  {
    id: '4',
    restaurantName: 'Some Restaurant 4',
    date: '2022-04-30T14:51:46.895Z',
    peopleCount: '2',
  },
];

export const restaurantDetail: TRestaurantDetail = {
  id: '1',
  name: 'Some restaurant 33',
  image:
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  description:
    'This is some great restaurant with great great food. Just come here and feel happy for rest of your life because this will be the best experience you ever had.',
};

export const userProfile: TBasicUserInfo = {
  id: '2',
  name: 'Andrew',
  image:
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};
