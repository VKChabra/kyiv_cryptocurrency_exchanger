import { useAuth } from 'hooks';
import { Container, List, Item, AvatarWrap } from './ChatContacts.styled';
// import { useState, useEffect } from 'react';

const ChatContacts = ({ data, changeChat }) => {
  //   const { user, isLoggedIn } = useAuth();
  //   const { role, name } = user;
  //   const [currentUser, setCurrentUser] = useState(isLoggedIn ? user : {});
  const [currentSelected, setCurrentSelected] = useState(0);

  const changeCurrentChat = (index, item) => {
    setCurrentSelected(index);
    console.log(currentSelected, index);
    changeChat(item);
  };

  const filteredUsers = data?.filter(item => item.role === 'user');

  return (
    <Container>
      <List>
        {filteredUsers?.map((item, index) => (
          <Item
            key={item._id}
            className={index === currentSelected ? 'selected' : 'none'}
            onClick={() => changeCurrentChat(index, item)}
          >
            <AvatarWrap>
              <p>{item.name?.charAt(0).toUpperCase()}</p>
            </AvatarWrap>
            <div>
              <p>{item.name}</p>
            </div>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ChatContacts;
