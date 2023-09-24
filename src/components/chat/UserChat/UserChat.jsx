import {
  Container,
  ChatHeader,
  ChatTitle,
  LogoImg,
  MessageContainer,
  InputWrap,
} from './UserChat.styled';
import Logotype from 'images/logo.svg';
import { useAuth } from 'hooks/';
import ChatInput from '../AdminChat/ChatInput';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UserChat = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [adminId, setAdminId] = useState(undefined);
  const [userId, setUserId] = useState(undefined);
  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    if (user.role === 'admin' && isLoggedIn) {
      setIsOnline(true);
      setAdminId(user.id);
    }
  }, [isLoggedIn, user]);

  useEffect(() => {
    if (isLoggedIn && user?.role === 'user') {
      setUserId(user.id);
    } else {
      const inkognitoId = uuidv4();
      setUserId(inkognitoId);
    }
  }, [isLoggedIn, user]);
  console.log('adminId: ', adminId, 'userId: ', userId);

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
