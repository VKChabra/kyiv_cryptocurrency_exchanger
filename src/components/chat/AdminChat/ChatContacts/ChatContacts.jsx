import { useAuth } from 'hooks';
import { Container, List, Item, AvatarWrap } from './ChatContacts.styled';
// import { useState, useEffect } from 'react';

const ChatContacts = ({ data }) => {
  const { user, isLoggedIn } = useAuth();
  // const { role, name } = user;
  // const [contacts, setContacts] = useState([]);
  // const [currentUser, setCurrentUser] = useState(isLoggedIn ? user : {});
  // const [currentSelected, setCurrentSelected] = useState(undefined);

  const filteredUsers = data.filter(message => message.owner.role === 'user');

  console.log(user);

  return (
    <Container>
      <List>
        {filteredUsers?.map(item => (
          <Item key={item.id}>
            {item.owner.role === 'user' && (
              <>
                <AvatarWrap>
                  <p>{item.owner?.name?.charAt(0).toUpperCase()}</p>
                </AvatarWrap>
                <div>
                  <p>{item.owner?.name}</p>
                </div>
              </>
            )}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ChatContacts;
