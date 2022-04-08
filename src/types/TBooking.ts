export type TBookingListItem = {
  id: string;
  restaurantName: string;
  date: string;
  peopleCount: string;
};

export type TBookingsList = TBookingListItem[];

export type TSectionedBookings = { title: string; data: TBookingsList }[];
