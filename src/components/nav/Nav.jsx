import { NavHeader, Link, Text, LineImg, TextWrapper, RegistrationWrapper } from './nav.styled';
import LanguageBtn from './Language';
import Info from './Info';
import Line from 'images/nav/line.svg';

const Nav = () => (
  <NavHeader>
    <Link to="/">
      {' '}
      <Text>Головна</Text>
    </Link>
    <LineImg src={Line} />
    <Link to="/exchangerates">
      {' '}
      <Text>Курси</Text>{' '}
    </Link>
    <LineImg src={Line} />
    <Link to="/news">
      {' '}
      <Text>Новини</Text>{' '}
    </Link>
    <LineImg src={Line} />
    <Info />
    <LineImg src={Line} />
    <LanguageBtn />
    <RegistrationWrapper>
      <Link to="/register">
        {' '}
        <Text>Реєстрація</Text>{' '}
      </Link>
      <Link to="/login">
        {' '}
        <TextWrapper>
          <Text>Увійти</Text>{' '}
        </TextWrapper>
      </Link>
    </RegistrationWrapper>
  </NavHeader>
);

export default Nav;
