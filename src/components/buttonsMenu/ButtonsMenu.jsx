import { useState, useEffect } from 'react';
import { Button, ProfileNav, ExitButton, ButtonWrapper, Text, Icon } from './buttonsMenu.styled';
import TransactionHistory from '../../components/userTransaction';
import UserData from '../../components/userData';
import Feedback from '../../components/feedback';
import { useTranslation } from 'react-i18next';
import '../../layouts/i18n/i18next';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

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

  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

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
              <Icon nameBtn={nameBtn} />
              <Text>{t(`arrayUserButtons.${index}`)}</Text>
            </Button>
          ))}
        </ButtonWrapper>
        <ExitButton type="button" onClick={handleLogOut}>
          <Icon />
          <Text>{t('exitButton.exit')}</Text>
        </ExitButton>
      </ProfileNav>
      <>
        {nameButton === 'privat' && <UserData />}
        {nameButton === 'operation' && <TransactionHistory />}
        {nameButton === 'feedback' && <Feedback />}
      </>
    </>
  );
};

export default ButtonsMenu;
