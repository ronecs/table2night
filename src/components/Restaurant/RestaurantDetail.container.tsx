/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC, useRef, useState } from 'react';
import RestaurantDetail from '@table2night/components/Restaurant/RestaurantDetail';
import { restaurantDetail } from '@table2night/fixtures/fixtures';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import useModalUtils from '@table2night/hooks/useModalUtils';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled, { useTheme } from 'styled-components/native';
import { Heading3, ButtonLabel } from '@table2night/utils/theme/Texts';
import { Dimensions } from 'react-native';
import { stripPx } from '@table2night/utils/theme/theme';
import Button from '@table2night/components/common/Button';

const ModalWrapper = styled.View`
  flex: 1;
  align-items: center;
  padding: ${({ theme }) => theme.space.space16};
  padding-bottom: ${({ theme }) => theme.space.space64};
`;

const TopModalWrapper = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
`;
const StyledDateTimePicker = styled(DateTimePicker)`
  display: flex;
  width: 50%;
`;

const DatePickerWrapper = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.space.space24};
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PeopleNumberButton = styled.Pressable<{ isSelected: boolean }>`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.gray100 : theme.color.gray80};
  border-radius: ${({ theme }) => theme.space.space80};
  padding: ${({ theme }) => theme.space.space8};
  width: ${({ theme }) => theme.space.space48};
  height: ${({ theme }) => theme.space.space48};
  align-items: center;
  justify-content: center;
`;

const StyledButtonNum = styled(ButtonLabel)`
  color: ${({ theme }) => theme.color.white};
`;

const RestaurantDetailContainer: FC = () => {
  const data = restaurantDetail;
  const { renderBackdrop } = useModalUtils();
  const modalRef = useRef<BottomSheetModal>(null);
  const dateNow = new Date();
  const [peopleCount, setPeopleCount] = useState(1);
  const [dateTimeValue, setDateTimeValue] = useState(dateNow);
  const [showCallButton, setShowCallButton] = useState(false);
  const theme = useTheme();

  const windowHeight = Dimensions.get('window').height - stripPx(theme.space.space64);

  const onBookButtonPress = () => {
    modalRef.current?.present();
    // open modal to select dates
    // take data.id here and make API call to book time in restaurant
  };

  const onSubmit = () => {
    modalRef.current?.dismiss();
    setShowCallButton(true);
    // take people num and userID and date and submit to server
  };

  const onPeopleNumberPress = (peopleNum: number) => () => {
    setPeopleCount(peopleNum);
  };

  const onMakeCallPress = () => {
    // Go to contacts screen here
  };

  return (
    <>
      <RestaurantDetail
        name={data.name}
        image={data.image}
        description={data.description}
        onBookButtonPress={onBookButtonPress}
        showCallButton={showCallButton}
        onMakeCallPress={onMakeCallPress}
      />
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        ref={modalRef}
        snapPoints={[windowHeight]}
      >
        <ModalWrapper>
          <TopModalWrapper>
            <DatePickerWrapper>
              <Heading3>Select number of people</Heading3>
              <PeopleNumberButton onPress={onPeopleNumberPress(1)} isSelected={peopleCount === 1}>
                <StyledButtonNum>1</StyledButtonNum>
              </PeopleNumberButton>
              <PeopleNumberButton onPress={onPeopleNumberPress(2)} isSelected={peopleCount === 2}>
                <StyledButtonNum>2</StyledButtonNum>
              </PeopleNumberButton>
              <PeopleNumberButton onPress={onPeopleNumberPress(3)} isSelected={peopleCount === 3}>
                <StyledButtonNum>3</StyledButtonNum>
              </PeopleNumberButton>
              <PeopleNumberButton onPress={onPeopleNumberPress(4)} isSelected={peopleCount === 4}>
                <StyledButtonNum>4</StyledButtonNum>
              </PeopleNumberButton>
            </DatePickerWrapper>
            <DatePickerWrapper>
              <Heading3>Pick date</Heading3>
              <StyledDateTimePicker
                value={dateTimeValue}
                onChange={(event: any, date: any) => setDateTimeValue(date)}
                // @ts-ignore
                mode="datetime"
              />
            </DatePickerWrapper>
          </TopModalWrapper>
          <Button onPress={onSubmit} label="Submit" />
        </ModalWrapper>
      </BottomSheetModal>
    </>
  );
};

export default RestaurantDetailContainer;
