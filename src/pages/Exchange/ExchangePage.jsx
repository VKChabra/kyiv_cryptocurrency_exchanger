import { useSelector } from 'react-redux';
import Exchange from 'components/exchange';
import Registration from 'components/registration';
import Calculator from 'components/calculator';
import authSelectors from 'redux/auth/authSelectors';
import { Wrap } from './ExchangePage.styled';

const ExchangePage = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Wrap>
      <Calculator showSubmitButton={false} />
      {!isLoggedIn && <Registration showSubmitButton={false} posCentre={false} />}
      <Exchange />
    </Wrap>
  );
};

export default ExchangePage;
