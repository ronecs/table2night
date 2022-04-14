import React, { FC, useRef, useState } from 'react';
import RestaurantDetail from '@table2night/components/Restaurant/RestaurantDetail';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BookingsModal from '@table2night/components/Bookings/BookingsModal';
import { useQuery } from 'react-query';
import { fetchRestaurantDetail } from '@table2night/api/restaurant';
import Loading from '@table2night/components/common/Loading';
import Error from '@table2night/components/common/Error';

type Props = {
  id: string;
};

const RestaurantDetailContainer: FC<Props> = ({ id }) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const [showCallButton, setShowCallButton] = useState(false);

  const { isLoading, isError, data, refetch } = useQuery('query-restaurant-detail', () =>
    fetchRestaurantDetail(id),
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error onRetryPress={refetch} />;
  }

  const detailData = data?.data.items[0];

  const onBookButtonPress = () => {
    modalRef.current?.present();
  };

  const onSubmit = () => {
    // Send data to server
  };

  const onMakeCallPress = () => {
    // Go to contacts screen here
  };

  return (
    <>
      <RestaurantDetail
        name={detailData.restaurant_name}
        image={detailData.restaurant_image}
        description={detailData.description}
        onBookButtonPress={onBookButtonPress}
        showCallButton={showCallButton}
        onMakeCallPress={onMakeCallPress}
      />
      <BookingsModal modalRef={modalRef} onFinish={setShowCallButton} userId="" submit={onSubmit} />
    </>
  );
};

export default RestaurantDetailContainer;
