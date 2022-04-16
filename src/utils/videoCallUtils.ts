/* eslint-disable no-console */
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  mediaDevices,
} from 'react-native-webrtc';
import socketIO from 'socket.io-client';

import Constants from 'expo-constants';

const { manifest } = Constants;

const serverUrl =
  typeof manifest?.packagerOpts === `object` && manifest.packagerOpts.dev
    ? `http://${manifest?.debuggerHost?.split(`:`).shift()?.concat(`:9999`)}`
    : 'http://127.0.0.1:9999';

// Config variables: change them to point to your own servers
const SIGNALING_SERVER_URL = serverUrl;
const PC_CONFIG = {
  iceServers: [],
};

export default class WebRTC {
  onRemoteStreamObtained: any;

  socket: any;

  peerConnection: any;

  stream: any;

  constructor() {
    this.socket = socketIO(SIGNALING_SERVER_URL, {
      autoConnect: false,
      jsonp: false,
      transports: ['websocket'],
    } as any);
    this.socket.on('data', this.onData);
    this.socket.on('ready', this.onReady);
  }

  connect = () => {
    this.getLocalStream();
  };

  // Signaling methods
  onData = (data: any) => {
    this.handleSignalingData(data);
  };

  onReady = () => {
    this.createPeerConnection();
    this.sendOffer();
  };

  sendData = (data: any) => {
    this.socket.emit('data', data);
  };

  // WebRTC methods
  getLocalStream = () => {
    mediaDevices
      .getUserMedia({
        audio: true,
        video: { facingMode: 'user' },
      })
      .then((stream) => {
        this.stream = stream;
        this.socket.connect();
      })
      .catch((error) => {
        console.error('Stream not found: ', error);
      });
  };

  createPeerConnection = () => {
    try {
      this.peerConnection = new RTCPeerConnection(PC_CONFIG);
      this.peerConnection.onicecandidate = this.onIceCandidate;
      this.peerConnection.onaddstream = this.onAddStream;
      this.peerConnection.addStream(this.stream);
    } catch (error) {
      console.error('PeerConnection failed: ', error);
    }
  };

  closeConnection = () => {
    console.log('Closing connection');
    this.socket.close();
  };

  sendOffer = () => {
    console.log('Send offer');
    this.peerConnection.createOffer({}).then(this.setAndSendLocalDescription, (error: any) => {
      console.error('Send offer failed: ', error);
    });
  };

  sendAnswer = () => {
    console.log('Send answer');
    this.peerConnection.createAnswer().then(this.setAndSendLocalDescription, (error: any) => {
      console.error('Send answer failed: ', error);
    });
  };

  setAndSendLocalDescription = (sessionDescription: any) => {
    this.peerConnection.setLocalDescription(sessionDescription);
    console.log('Local description set');
    this.sendData(sessionDescription);
  };

  onIceCandidate = (event: any) => {
    if (event.candidate) {
      console.log('ICE candidate');
      this.sendData({
        type: 'candidate',
        candidate: event.candidate,
      });
    }
  };

  onAddStream = (event: any) => {
    console.log('Add stream');
    this.onRemoteStreamObtained(event.stream);
  };

  handleSignalingData = (data: any) => {
    // eslint-disable-next-line default-case
    switch (data.type) {
      case 'offer':
        this.createPeerConnection();
        this.peerConnection.setRemoteDescription(new RTCSessionDescription(data));
        this.sendAnswer();
        break;
      case 'answer':
        this.peerConnection.setRemoteDescription(new RTCSessionDescription(data));
        break;
      case 'candidate':
        this.peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
        break;
    }
  };
}
