import React, { FC, useRef, useState } from 'react';
import RestaurantDetail from '@table2night/components/Restaurant/RestaurantDetail';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BookingsModal from '@table2night/components/Bookings/BookingsModal';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchRestaurantDetail } from '@table2night/api/restaurant';
import Loading from '@table2night/components/common/Loading';
import Error from '@table2night/components/common/Error';
import { addBooking } from '@table2night/api/booking';
import { getApiToken } from '@table2night/utils/commonUtils';
import dayjs from 'dayjs';
import Toast from 'react-native-toast-message';
import { useUserInfo } from '@table2night/contexts/UserContext';

type Props = {
  id: string;
};

const RestaurantDetailContainer: FC<Props> = ({ id }) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const [showCallButton, setShowCallButton] = useState(false);
  const { userInfo } = useUserInfo();
  const { isLoading, isError, data, refetch } = useQuery('query-restaurant-detail', () =>
    fetchRestaurantDetail(id),
  );
  const queryClient = useQueryClient();

  const { mutateAsync: addBookingMutation, isLoading: isLoadingBooking } = useMutation(addBooking);

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

  const onSubmit = async (date: Date, peopleCount: number) => {
    try {
      const formData = {
        user_id: userInfo?.id || '',
        rest_id: id,
        date_time: dayjs(date).format('YYYY-MM-DD HH:mm:00'),
        num_ppl: peopleCount,
        dbs_psswd: getApiToken(),
      };
      await addBookingMutation(formData);
      await queryClient.invalidateQueries('query-bookings-list');
      Toast.show({
        type: 'success',
        text1: 'Successfully added booking',
        autoHide: true,
        position: 'bottom',
      });
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Failed to add booking',
        autoHide: true,
        position: 'bottom',
      });
    }
  };

  const onMakeCallPress = () => {
    // Go to contacts screen here
  };

  return (
    <>
      <RestaurantDetail
        isLoading={isLoadingBooking}
        name={detailData.restaurant_name}
        image={detailData.restaurant_image}
        description={detailData.description}
        onBookButtonPress={onBookButtonPress}
        showCallButton={showCallButton}
        onMakeCallPress={onMakeCallPress}
      />
      <BookingsModal modalRef={modalRef} onFinish={setShowCallButton} submit={onSubmit} />
    </>
  );
};

export default RestaurantDetailContainer;
