import { NavHeader, Link, Text } from './nav.styled';

const Nav = () => (
  <NavHeader>
    <Link to="/">
      {' '}
      <Text>Головна</Text>
    </Link>
    <Link to="/exchangerates">
      {' '}
      <Text>Курси</Text>{' '}
    </Link>
    <Link to="/news">
      {' '}
      <Text>Новини</Text>{' '}
    </Link>
    <Link to="/partnership">
      {' '}
      <Text>Партнерська програма</Text>
    </Link>
    <Link to="/reviews">
      {' '}
      <Text>Відгуки</Text>{' '}
    </Link>
    <Link to="/faq">
      {' '}
      <Text>Часті запитання</Text>{' '}
    </Link>
    <Link to="#contacts">
      {' '}
      <Text>Контакти</Text>{' '}
    </Link>
    <Link to="/login">
      {' '}
      <Text>Увійти</Text>{' '}
    </Link>
    <Link to="/register">
      {' '}
      <Text>Регістрація</Text>{' '}
    </Link>
  </NavHeader>
);

export default Nav;
