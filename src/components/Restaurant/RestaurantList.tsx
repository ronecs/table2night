import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { TRestaurantList, TRestaurantListItem } from '@table2night/types/TRestaurant';
import RestaurantItem from '@table2night/components/Restaurant/RestaurantItem';
import styled from 'styled-components/native';
import { Heading2 } from '@table2night/utils/theme/Texts';

const Header = styled(Heading2)`
  width: 60%;
  padding: ${({ theme }) => theme.space.space16} 0;
`;

const Divider = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.space.space16};
`;

const renderItem = ({ item }: ListRenderItemInfo<TRestaurantListItem>) => (
  <RestaurantItem name={item.name} image={item.image} key={item.id} />
);

const renderHeader = () => <Header>Top restaurants for you</Header>;

type Props = {
  restaurants: TRestaurantList;
};

const RestaurantList: FC<Props> = ({ restaurants }) => (
  <FlatList
    data={restaurants}
    renderItem={renderItem}
    ListHeaderComponent={renderHeader}
    ItemSeparatorComponent={Divider}
    showsVerticalScrollIndicator={false}
  />
);

export default RestaurantList;
