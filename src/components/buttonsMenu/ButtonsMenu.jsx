import { useState } from 'react';
import { Button, ProfileNav, ExitButton, ButtonWrapper, ButtonActive } from './buttonsMenu.styled';
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

const ButtonsMenu = () => {
  const [typeButton, setTypeButton] = useState('');
  const handler = event => {
    const { name } = event.target;
    setTypeButton(name);
  };
  const { t } = useTranslation();

  return (
    <>
      <ProfileNav>
        <ButtonWrapper>
          <ButtonActive name="privat" onClick={handler} type="button">
            {t('userButtons.privat')}
          </ButtonActive>
          <Button name="operation" onClick={handler} type="button">
            {t('userButtons.operation')}
          </Button>
          <Button name="feedback" onClick={handler} type="button">
            {t('userButtons.feedback')}
          </Button>
        </ButtonWrapper>
        <ExitButton type="button">{t('userButtons.exit')}</ExitButton>
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
