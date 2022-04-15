import { Heading3 } from '@table2night/utils/theme/Texts';
import React, { FC, useRef } from 'react';
import styled from 'styled-components/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import RightArrow from '@table2night/assets/img/rightArrow.svg';
import PeopleIcon from '@table2night/assets/img/people.svg';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Button from '@table2night/components/common/Button';
import { TButtonVariant } from '@table2night/types/TButton';
import useModalUtils from '@table2night/hooks/useModalUtils';
import { useMutation, useQueryClient } from 'react-query';
import { deleteBooking, editBooking } from '@table2night/api/booking';
import Toast from 'react-native-toast-message';
import BookingsModal from '@table2night/components/Bookings/BookingsModal';
import Loading from '@table2night/components/common/Loading';

dayjs.extend(relativeTime);

const Wrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.space32} ${({ theme }) => theme.space.space16};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.space.space16};
`;

const DateText = styled(Heading3)`
  color: ${({ theme }) => theme.color.gray80};
  padding-right: ${({ theme }) => theme.space.space16};
  text-align: center;
  flex: 0.9;
`;

const EndWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-right: ${({ theme }) => theme.space.space8};
`;

const ButtonWrapper = styled.View`
  padding: ${({ theme }) => theme.space.space8} ${({ theme }) => theme.space.space24};
`;

const StyledIcon = styled(PeopleIcon)`
  margin-right: ${({ theme }) => theme.space.space8};
`;

const StyledHeading = styled(Heading3)`
  flex: 1;
`;

type Props = {
  id: string;
  restaurantName: string;
  date: string;
  peopleCount: number;
  section: string;
};

const BookingItem: FC<Props> = ({ restaurantName, date, id, peopleCount, section }) => {
  const { renderBackdrop } = useModalUtils();
  const modalRef = useRef<BottomSheetModal>(null);
  const editModalRef = useRef<BottomSheetModal>(null);
  const { mutateAsync: editBookingMutation, isLoading: isLoadingBooking } =
    useMutation(editBooking);
  const queryClient = useQueryClient();
  const { mutateAsync: deleteBookingMutation } = useMutation(deleteBooking);
  const onDeletePress = async () => {
    modalRef.current?.dismiss();
    await deleteBookingMutation(id);
    await queryClient.invalidateQueries('query-bookings-list');
    Toast.show({
      type: 'success',
      text1: 'Booking successfully deleted',
      autoHide: true,
      position: 'bottom',
    });
  };

  const onEditPress = () => {
    modalRef.current?.dismiss();
    editModalRef.current?.present();
  };

  const onItemPress = () => {
    modalRef.current?.present();
  };

  const onSubmit = async (date: Date, peopleCount: number) => {
    try {
      const formData = {
        id,
        date_time: dayjs(date).format('YYYY-MM-DD HH:mm:00'),
        num_ppl: peopleCount,
      };
      await editBookingMutation(formData);
      await queryClient.invalidateQueries('query-bookings-list');
      Toast.show({
        type: 'success',
        text1: 'Successfully edited booking',
        autoHide: true,
        position: 'bottom',
      });
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Failed to edit',
        autoHide: true,
        position: 'bottom',
      });
    }
  };

  if (isLoadingBooking) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper onPress={onItemPress}>
      <StyledHeading>{restaurantName}</StyledHeading>
      <EndWrapper>
        <StyledIcon />
        <Heading3>{peopleCount}</Heading3>
      </EndWrapper>
      <EndWrapper>
        <DateText>{dayjs(date).fromNow()}</DateText>
        <RightArrow />
      </EndWrapper>

      <BottomSheetModal backdropComponent={renderBackdrop} ref={modalRef} snapPoints={[250]}>
        <ButtonWrapper>
          {section !== 'Past' && (
            <Button
              variant={TButtonVariant.SECONDARY}
              onPress={onEditPress}
              label="Edit this booking"
            />
          )}
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onPress={onDeletePress} label="Delete this booking" />
        </ButtonWrapper>
      </BottomSheetModal>
      <BookingsModal modalRef={editModalRef} onFinish={() => undefined} submit={onSubmit} />
    </Wrapper>
  );
};

export default BookingItem;
