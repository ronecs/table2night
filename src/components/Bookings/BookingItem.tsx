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
};

const BookingItem: FC<Props> = ({ restaurantName, date, id, peopleCount }) => {
  const { renderBackdrop } = useModalUtils();
  const modalRef = useRef<BottomSheetModal>(null);
  const onDeletePress = () => {
    modalRef.current?.dismiss();
    // ToDo - take the ID and call delete mutation here
  };

  const onEditPress = () => {
    modalRef.current?.dismiss();
    // ToDo - take the ID and call edit mutation here
  };

  const onItemPress = () => {
    modalRef.current?.present();
  };

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
          <Button
            variant={TButtonVariant.SECONDARY}
            onPress={onEditPress}
            label="Edit this booking"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onPress={onDeletePress} label="Delete this booking" />
        </ButtonWrapper>
      </BottomSheetModal>
    </Wrapper>
  );
};

export default BookingItem;
