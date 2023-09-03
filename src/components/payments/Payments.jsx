import { SiVisa, SiPaypal } from 'react-icons/si';
import { Wrap, Frame, Icon, Blue } from './Payments.styled';
import Maestro from 'images/maestro.svg';
import Webmoney from 'images/webmoney.svg';

const Payments = () => {
  return (
    <Wrap>
      <Frame>
        <SiVisa />
        <Icon src={Maestro} />
        <SiPaypal />
        <Icon src={Webmoney} />
      </Frame>
      <Blue />
    </Wrap>
  );
};

export default Payments;
