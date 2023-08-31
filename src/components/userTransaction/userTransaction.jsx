import { Table, TableHead, RowColored, TableCol, Content } from './userTransition.styled';

const Row = ({ type, amount, currency }) => {
  return (
    <RowColored>
      <TableCol>{type}</TableCol>
      <TableCol>{amount}</TableCol>
      <TableCol>{currency}</TableCol>
    </RowColored>
  );
};

const TransactionHistory = ({ transactions }) => {
  return (
    <Content>
      <Table>
        <thead>
          <RowColored>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
          </RowColored>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <Row key={id} type={type} amount={amount} currency={currency} />
          ))}
        </tbody>
      </Table>
    </Content>
  );
};
export default TransactionHistory;
