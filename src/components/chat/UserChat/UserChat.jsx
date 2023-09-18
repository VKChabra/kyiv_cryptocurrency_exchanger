import {
  Container,
  ChatHeader,
  ChatTitle,
  LogoImg,
  MessageContainer,
  InputWrap,
} from './UserChat.styled';
import Logotype from '../../../images/logo.svg';
import ChatInput from '../AdminChat/ChatInput';
import { useState } from 'react';

const UserChat = () => {
  const [isOnline, setIsOnline] = useState(true);
  return (
    <Container>
      <ChatHeader>
        <ChatTitle>Questions? Chat with us</ChatTitle>
        <LogoImg src={Logotype} alt="Logo" />
        {isOnline ? <span>🟢</span> : <span>🔴</span>}
      </ChatHeader>
      <MessageContainer>Messages</MessageContainer>
      <InputWrap>
        <ChatInput />
      </InputWrap>
    </Container>
  );
};

export default UserChat;
