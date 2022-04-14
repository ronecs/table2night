export type TRestaurantListItem = {
  id_restaurants: string;
  restaurant_name: string;
  restaurant_image: string;
};

export type TRestaurantList = TRestaurantListItem[];

export type TRestaurantDetail = {
  id_restaurants: string;
  restaurant_name: string;
  restaurant_image: string;
  description: string;
};
