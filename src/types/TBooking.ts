export type TBookingListItem = {
  id_bookings: string;
  rest_id__restaurant_name: string;
  date_time: string;
  num_ppl: string;
};

export type TBookingsList = TBookingListItem[];

export type TSectionedBookings = { title: string; data: TBookingsList }[];
