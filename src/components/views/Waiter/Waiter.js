import React from 'react';
import { Link } from 'react-router-dom';
import Table      from '@material-ui/core/Table';
import TableBody  from '@material-ui/core/TableBody';
import TableCell  from '@material-ui/core/TableCell';
import TableHead  from '@material-ui/core/TableHead';
import TableRow   from '@material-ui/core/TableRow';
import Paper      from '@material-ui/core/Paper';
import Button     from '@material-ui/core/Button';
import { baseUrl } from '../../../App';
import styles from './Waiter.module.scss';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 103},
  {id: '4', status: 'prepared', order: 106},
  {id: '5', status: 'delivered', order: 104},
  {id: '6', status: 'paid', order: 105},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Paper className={styles.component} elevation={3}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell align='right'>Status</TableCell>
          <TableCell align='right'>Order</TableCell>
          <TableCell align='right'>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component='th' scope='row'>
              {row.id}
            </TableCell>
            <TableCell align='right'>
              {row.status}
            </TableCell>
            <TableCell align='right'>
              {row.order && (
                <Button component={Link} to={`${baseUrl}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell align='right'>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Waiter;
