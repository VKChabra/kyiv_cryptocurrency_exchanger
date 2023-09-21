import {
  Container,
  CurrentUserWrap,
  UserAvatarWrap,
  UserNameWrap,
  MessageContainer,
  InputContainer,
} from './ChatMessages.styled';
import { useEffect, useState, useRef } from 'react';
import ChatInput from '../ChatInput';
import { sendMessageRoute, recieveMessageRoute } from '../../../../services/chatApi';

const ChatMessages = ({ data }) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const handleSendMsg = async msg => {
    console.log(msg);
    //   const data = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
    //   socket.current.emit('send-msg', {
    //     to: currentChat._id,
    //     from: data._id,
    //     msg,
    //   });
    //   await axios.post(sendMessageRoute, {
    //     from: data._id,
    //     to: currentChat._id,
    //     message: msg,
    //   });
    //   const msgs = [...messages];
    //   msgs.push({ fromSelf: true, message: msg });
    //   setMessages(msgs);
  };

  return (
    <Container>
      <CurrentUserWrap>
        <UserAvatarWrap>
          <p>O</p>
        </UserAvatarWrap>
        <UserNameWrap>
          <p>Оля</p>
        </UserNameWrap>
      </CurrentUserWrap>
      <MessageContainer>Messages</MessageContainer>
      <InputContainer>
        <ChatInput handleSendMsg={handleSendMsg} />
      </InputContainer>
    </Container>
  );
};

export default ChatMessages;
