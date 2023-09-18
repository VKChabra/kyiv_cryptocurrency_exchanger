import { ProfileNav, ExitButton, ButtonWrapper, Text } from './buttonsMenu.styled';
import { Outlet } from 'react-router-dom';
import { Link } from './buttonsMenu.styled';
import Loader from 'components/loader/Loader';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { RiHome2Line, RiMacLine, RiLockUnlockLine, RiPriceTag3Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const ButtonsMenu = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <ProfileNav>
        <ButtonWrapper>
          <Link to="/user" name="private">
            <RiHome2Line />
            <Text>{t(`button.private`)}</Text>
          </Link>
          <Link to="/user/transactions" name="operation">
            <RiMacLine />
            <Text>{t(`button.operation`)}</Text>
          </Link>
          <Link to="/user/reviews" name="feedback">
            <RiPriceTag3Line />
            <Text>{t(`button.feedback`)}</Text>
          </Link>
        </ButtonWrapper>
        <ExitButton type="button" onClick={handleLogOut}>
          <RiLockUnlockLine />
          <Text>{t('button.exit')}</Text>
        </ExitButton>
      </ProfileNav>
      <div style={{ width: '100%' }}>
        <Suspense fallback={<Loader />} style={{ width: '100%' }}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default ButtonsMenu;
