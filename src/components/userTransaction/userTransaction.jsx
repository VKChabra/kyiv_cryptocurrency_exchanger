import { Table, TableHead, RowColored, TableCol, Content, Link } from './userTransition.styled';
import { useGetMyTransactionQuery } from 'services/transactionsApi';
import { useTranslation } from 'react-i18next';

const Row = ({ amountToExchange, amountToReceive, currencyToReceive, currencyToExchange }) => {
  return (
    <RowColored>
      <TableCol>{amountToExchange}</TableCol>
      <TableCol>{amountToReceive}</TableCol>
      <TableCol>{currencyToReceive}</TableCol>
      <TableCol>{currencyToExchange}</TableCol>
    </RowColored>
  );
};

const TransactionHistory = () => {
  const { t } = useTranslation();
  const { data } = useGetMyTransactionQuery();

  if (!data) {
    return;
  }
  const { transactions } = data;

  return (
    <Content>
      {transactions ? (
        <Table>
          <thead>
            <RowColored>
              <TableHead>{t('tableTransaction.amountToExchange')}</TableHead>
              <TableHead>{t('tableTransaction.amountToReceive')}</TableHead>
              <TableHead>{t('tableTransaction.currencyToReceive')}</TableHead>
              <TableHead>{t('tableTransaction.currencyToExchange')}</TableHead>
            </RowColored>
          </thead>
          <tbody>
            {transactions.map(
              ({
                id,
                currencyToReceive,
                amountToExchange,
                amountToReceive,
                currencyToExchange,
              }) => (
                <Row
                  key={id}
                  currencyToReceive={currencyToReceive}
                  amountToExchange={amountToExchange}
                  amountToReceive={amountToReceive}
                  currencyToExchange={currencyToExchange}
                />
              )
            )}
          </tbody>
        </Table>
      ) : (
        <Content>
          <Link to="/exchange">{t('userData.link2')}</Link>
        </Content>
      )}
    </Content>
  );
};
export default TransactionHistory;
