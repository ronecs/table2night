export type TRestaurantListItem = {
  id: string;
  name: string;
  image: string;
};

export type TRestaurantList = TRestaurantListItem[];

export type TRestaurantDetail = {
  id: string;
  name: string;
  image: string;
  description: string;
};
