import { ChatContainer } from './AdminChat.styled';
import ChatContacts from './ChatContacts/ChatContacts';
import ChatMessages from './ChatMessages/ChatMessages';
import messages from './messageJson';

const AdminChat = () => {
  return (
    <ChatContainer>
      <ChatContacts data={messages} />
      <ChatMessages data={messages} />
    </ChatContainer>
  );
};

export default AdminChat;
