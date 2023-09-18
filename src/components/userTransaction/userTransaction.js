import { Pagination, Cell, CellFirst } from './userTransition.styled';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useGetMyTransactionQuery } from 'services/transactionsApi';
import { useTranslation } from 'react-i18next';

const columns = [
  {
    id: 'amountToExchange',
    label: 'amountToExchange',
    minWidth: 170,
    format: value => value.toFixed(2),
  },
  {
    id: 'amountToReceive',
    label: 'amountToReceive',
    minWidth: 170,
    format: value => value.toFixed(2),
  },
  {
    id: 'currencyToExchange',
    label: 'currencyToExchange',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'currencyToReceive',
    label: 'currencyToReceive',
    minWidth: 170,
    align: 'center',
  },
];

const TransactionHistory = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data } = useGetMyTransactionQuery();
  const { t } = useTranslation();

  if (!data) {
    return;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', backgroundColor: 'transparent' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ backgroundColor: 'transparent' }}>
            <TableRow>
              <CellFirst align="center" colSpan={2} sx={{ backgroundColor: 'transparent' }}>
                {t('tableTransaction.amount')}
              </CellFirst>
              <CellFirst align="center" colSpan={3} sx={{ backgroundColor: 'transparent' }}>
                {t('tableTransaction.currency')}
              </CellFirst>
            </TableRow>
            <TableRow>
              <Cell style={{ top: 57 }} sx={{ backgroundColor: 'transparent' }}>
                {t('tableTransaction.amountToExchange')}
              </Cell>
              <Cell style={{ top: 57 }} sx={{ backgroundColor: 'transparent' }}>
                {t('tableTransaction.amountToReceive')}
              </Cell>
              <Cell style={{ top: 57 }} sx={{ backgroundColor: 'transparent' }}>
                {t('tableTransaction.currencyToReceive')}
              </Cell>
              <Cell style={{ top: 57 }} sx={{ backgroundColor: 'transparent' }}>
                {t('tableTransaction.currencyToExchange')}
              </Cell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <Cell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </Cell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default TransactionHistory;
