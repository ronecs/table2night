import React, { FC } from 'react';
import { ListRenderItemInfo, SectionList } from 'react-native';
import styled from 'styled-components/native';
import { Heading2 } from '@table2night/utils/theme/Texts';
import BookingItem from '@table2night/components/Bookings/BookingItem';
import { TBookingListItem, TSectionedBookings } from '@table2night/types/TBooking';

const Header = styled(Heading2)`
  width: 60%;
  padding: ${({ theme }) => theme.space.space16} 0;
`;

const SectionHeaderWrapper = styled.View`
  padding: ${({ theme }) => theme.space.space24} 0;
`;

const Divider = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.space.space16};
`;

const renderItem = ({ item }: ListRenderItemInfo<TBookingListItem>) => (
  <BookingItem
    restaurantName={item.restaurantName}
    id={item.id}
    date={item.date}
    peopleCount={+item.peopleCount}
  />
);

const renderHeader = () => <Header>Bookings</Header>;

const renderTitle = ({ section }: any) => (
  <SectionHeaderWrapper>
    <Heading2>{section.title}</Heading2>
  </SectionHeaderWrapper>
);

type Props = {
  bookings: TSectionedBookings;
};

const BookingsList: FC<Props> = ({ bookings }) => (
  <SectionList
    sections={bookings}
    renderItem={renderItem}
    renderSectionHeader={renderTitle}
    ListHeaderComponent={renderHeader}
    ItemSeparatorComponent={Divider}
    showsVerticalScrollIndicator={false}
    stickySectionHeadersEnabled={false}
  />
);

export default BookingsList;
