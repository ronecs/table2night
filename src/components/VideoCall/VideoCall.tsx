// This is ok because typescript doesn't know props of native components like WebRTC
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { Heading2 } from '@table2night/utils/theme/Texts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '@table2night/components/common/Button';
import { RTCView } from 'react-native-webrtc';
import WebRTC from '@table2night/utils/videoCallUtils';

const Wrapper = styled(KeyboardAwareScrollView)`
  flex: 1;
  margin-top: ${({ theme }) => theme.space.space16};
`;

const ButtonWrapper = styled.View`
  padding: ${({ theme }) => theme.space.space16} 0;
`;

const VideoWrapper = styled.View`
  padding: ${({ theme }) => theme.space.space16} 0;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyledVideo = styled(RTCView)`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.color.gray20};
`;

const VideoCall: FC = () => {
  const [streamUrl, setStreamUrl] = useState(null);
  const webRTC = new WebRTC();
  const onMakeCallPress = () => {
    webRTC.onRemoteStreamObtained = (stream: any) => {
      setStreamUrl(stream.toURL());
    };
    webRTC.connect();
  };

  const onEndCallPress = () => {
    setStreamUrl(null);
    webRTC.closeConnection();
  };

  return (
    <Wrapper>
      <Heading2>Call a friend</Heading2>
      <ButtonWrapper>
        <Button
          onPress={streamUrl ? onEndCallPress : onMakeCallPress}
          label={streamUrl ? 'End Call' : 'Start Call'}
        />
      </ButtonWrapper>
      <VideoWrapper>
        <StyledVideo streamURL={streamUrl} />
      </VideoWrapper>
    </Wrapper>
  );
};

export default VideoCall;
