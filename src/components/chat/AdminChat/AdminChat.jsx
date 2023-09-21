import { ChatContainer } from './AdminChat.styled';
// import WellcomWrap from './ChatMessages/WellcomWrap';
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { getAllUsers, chatHost } from '../../../services/chatApi';
import { useAuth } from '../../../hooks/';
import { useNavigate } from 'react-router-dom';
import ChatContacts from './ChatContacts/ChatContacts';
import ChatMessages from './ChatMessages/ChatMessages';

const AdminChat = () => {
  const socket = useRef();
  const { user, isLoggedIn } = useAuth();
  const { role, name, id } = user;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({});

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await getAllUsers();
      if (data) {
        const { items } = data;
        setContacts(items);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setCurrentUser(user);
    }
  }, [user]);

  useEffect(() => {
    if (currentUser) {
      loadData();
    } else {
      navigate('/login');
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(chatHost);
      socket.current.emit('add-user', currentUser.id);
    } else {
      navigate('/login');
    }
  }, [currentUser]);

  const handleChatChange = chat => {
    setCurrentChat(chat);
  };

  return (
    <ChatContainer>
      <ChatContacts data={contacts} changeChat={handleChatChange} />
      {/* {currentChat === undefined ? <WellcomWrap /> : <ChatMessages currentChat={currentChat} />} */}
      <ChatMessages currentChat={currentChat} />
    </ChatContainer>
  );
};

export default AdminChat;
