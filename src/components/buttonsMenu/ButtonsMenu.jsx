import { useState } from 'react';
import { Button, ProfileNav, ExitButton, ButtonWrapper, ButtonActive } from './buttonsMenu.styled';
import TransactionHistory from '../../components/userTransaction';
import UserData from '../../components/userData';
import Feedback from '../../components/feedback';
const transactions = [
  {
    id: '1e0700a2-5183-4291-85cc-2065a036a683',
    type: 'invoice',
    amount: '964.82',
    currency: 'LRD',
  },
  {
    id: 'a30f821b-4d25-4ff0-abdd-e340b3f0dd2b',
    type: 'payment',
    amount: '686.50',
    currency: 'WST',
  },
];
const ButtonsMenu = () => {
  const [typeButton, setTypeButton] = useState('');
  const handler = event => {
    const { name } = event.target;
    setTypeButton(name);
  };

  return (
    <>
      <ProfileNav>
        <ButtonWrapper>
          <ButtonActive name="privat" onClick={handler} type="button">
            Личный кабинет
          </ButtonActive>
          <Button name="operation" onClick={handler} type="button">
            Ваши оперпации
          </Button>
          <Button name="feedback" onClick={handler} type="button">
            Відгуки
          </Button>
        </ButtonWrapper>
        <ExitButton type="button">Выход</ExitButton>
      </ProfileNav>
      <>
        {typeButton === 'privat' && <UserData />}
        {typeButton === 'operation' && <TransactionHistory transactions={transactions} />}
        {typeButton === 'feedback' && <Feedback />}
      </>
    </>
  );
};

export default ButtonsMenu;
