/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC, useState } from 'react';
import { ButtonLabel, Heading3 } from '@table2night/utils/theme/Texts';
import Button from '@table2night/components/common/Button';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import useModalUtils from '@table2night/hooks/useModalUtils';
import { Dimensions } from 'react-native';
import { stripPx } from '@table2night/utils/theme/theme';
import styled, { useTheme } from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ModalWrapper = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space.space16};
  padding-bottom: ${({ theme }) => theme.space.space64};
`;

const TopModalWrapper = styled.View`
  align-items: center;
  width: 100%;
  flex: 1;
`;
const StyledDateTimePicker = styled(DateTimePicker)`
  display: flex;
  width: 50%;
`;

const DatePickerWrapper = styled.View`
  margin-top: ${({ theme }) => theme.space.space24};
  width: 100%;
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
  margin: ${({ theme }) => theme.space.space4};
`;

const StyledButtonNum = styled(ButtonLabel)`
  color: ${({ theme }) => theme.color.white};
`;

const NumbersWrapper = styled.View`
  flex-direction: row;
`;

type Props = {
  modalRef: any;
  onFinish: (arg: boolean) => void;
  submit: (date: Date, peopleCount: number) => void;
};
const BookingsModal: FC<Props> = ({ modalRef, onFinish, submit }) => {
  const { renderBackdrop } = useModalUtils();
  const theme = useTheme();
  const windowHeight = Dimensions.get('window').height - stripPx(theme.space.space64);
  const dateNow = new Date();
  const [peopleCount, setPeopleCount] = useState(1);
  const [dateTimeValue, setDateTimeValue] = useState(dateNow);

  const onSubmit = () => {
    modalRef.current?.dismiss();
    // take data userID and date and submit to server
    submit(dateTimeValue, peopleCount);
    onFinish(true);
  };

  const onPeopleNumberPress = (peopleNum: number) => () => {
    setPeopleCount(peopleNum);
  };
  return (
    <>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        ref={modalRef}
        snapPoints={[windowHeight]}
      >
        <ModalWrapper>
          <TopModalWrapper>
            <DatePickerWrapper>
              <Heading3>Select number of people</Heading3>
              <NumbersWrapper>
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
              </NumbersWrapper>
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

export default BookingsModal;
