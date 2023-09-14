import { Container, ChatButton, ChatPanel } from './ChatButtons.styled';
import { IoChatboxEllipses } from 'react-icons/io5';
import { BsXCircleFill } from 'react-icons/bs';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import UserChat from '../UserChat';

const ChatButtons = () => {
  const [expanded, setExpanded] = useState(false);
  const [chatOpened, setChatOpened] = useState(false);

  const handleChatsPanel = () => {
    setExpanded(expanded ? false : true);
    setChatOpened(false);
  };

  const handleChatOpen = () => {
    setExpanded(false);
    setChatOpened(true);
  };

  return (
    <Container>
      <ChatButton type="button" onClick={handleChatsPanel}>
        {expanded === true || chatOpened === true ? (
          <BsXCircleFill
            size={40}
            style={{
              color: 'white',
              position: 'absolute',
              top: '10px',
              left: '9px',
            }}
          />
        ) : (
          <IoChatboxEllipses
            size={40}
            style={{
              color: 'white',
              position: 'absolute',
              top: '11px',
              left: '10px',
            }}
          />
        )}
      </ChatButton>
      {expanded && (
        <ChatPanel expanded={expanded}>
          <li>
            <FaTelegram
              size={60}
              style={{
                color: '#0088cc',
              }}
            />
          </li>
          <li>
            <FaWhatsapp
              size={60}
              style={{
                color: '#28D146',
              }}
            />
          </li>
          <li>
            <button type="button" onClick={handleChatOpen}>
              <IoChatboxEllipses
                size={60}
                style={{
                  color: '#3e45c3',
                }}
              />
            </button>
          </li>
        </ChatPanel>
      )}
      {chatOpened && <UserChat />}
    </Container>
  );
};

export default ChatButtons;