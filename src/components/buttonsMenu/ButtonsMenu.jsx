import { useState, useEffect } from 'react';
import { Button, ProfileNav, ExitButton, ButtonWrapper } from './buttonsMenu.styled';
import TransactionHistory from '../../components/userTransaction';
import UserData from '../../components/userData';
import Feedback from '../../components/feedback';
import { useTranslation } from 'react-i18next';
import '../../layouts/i18n/i18next';

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

const buttonsListUser = [{ nameBtn: 'privat' }, { nameBtn: 'operation' }, { nameBtn: 'feedback' }];
const ButtonsMenu = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [nameButton, setNameButton] = useState('privat');

  useEffect(() => {
    setNameButton(buttonsListUser[activeButton].nameBtn);
  }, [activeButton, nameButton]);

  const selectedBtn = index => {
    setActiveButton(index);
  };
  const setClassName = index => {
    return index === activeButton ? 'active' : '';
  };

  const { t } = useTranslation();

  return (
    <>
      <ProfileNav>
        <ButtonWrapper>
          {buttonsListUser.map(({ nameBtn }, index) => (
            <Button
              key={index}
              className={setClassName(index)}
              name={nameBtn}
              onClick={() => selectedBtn(index)}
              type="button"
            >
              {t(`arrayUserButtons.${index}`)}
            </Button>
          ))}
        </ButtonWrapper>
        <ExitButton type="button">{t('exitButton.exit')}</ExitButton>
      </ProfileNav>
      <>
        {nameButton === 'privat' && <UserData />}
        {nameButton === 'operation' && <TransactionHistory transactions={transactions} />}
        {nameButton === 'feedback' && <Feedback />}
      </>
    </>
  );
};

export default ButtonsMenu;
