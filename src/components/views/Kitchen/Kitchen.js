import React from 'react';
import Button     from '@material-ui/core/Button';
import Paper      from '@material-ui/core/Paper';
import Table      from '@material-ui/core/Table';
import TableBody  from '@material-ui/core/TableBody';
import TableCell  from '@material-ui/core/TableCell';
import TableHead  from '@material-ui/core/TableHead';
import TableRow   from '@material-ui/core/TableRow';
import styles from './Kitchen.module.scss';

const demoContent = [
  {
    id: '1',
    tableId: '3',
    orderId: '103',
    onlineId: '',
    productId: 'pizza',
    productParams: ['tomato sauce', 'mushrooms', 'salami', 'cheese crust'],
    status: 'prepared',
  },
  {
    id: '2',
    tableId: '5',
    orderId: '104',
    onlineId: '',
    productId: 'cake',
    productParams: [],
    status: 'prepared',
  },
  {
    id: '3',
    tableId: '4',
    orderId: '106',
    onlineId: '',
    productId: 'breakfast',
    productParams: ['latte'],
    status: 'ordered',
  },
  {
    id: '4',
    tableId: '',
    orderId: '',
    onlineId: '1001',
    productId: 'salad',
    productParams: ['cucumber', 'feta', 'pepper'],
    status: 'ordered',
  },
  {
    id: '5',
    tableId: '6',
    orderId: '105',
    onlineId: '',
    productId: 'cake',
    productParams: [],
    status: 'ordered',
  },
  {
    id: '6',
    tableId: '',
    orderId: '',
    onlineId: '1002',
    productId: 'pizza',
    productParams: ['cream sauce', 'olives', 'mushrooms', 'basil', 'gluten crust'],
    status: 'ordered',
  },
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return <Button>prepared</Button>;
    case 'prepared':
      return <Button disabled>prepared</Button>;
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component} elevation={3}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Online</TableCell>
          <TableCell align='right'>Ordered product</TableCell>
          <TableCell align='right'>Product params</TableCell>
          <TableCell align='right'>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component='th' scope='row'>{row.tableId}</TableCell>
            <TableCell>{row.orderId}</TableCell>
            <TableCell>{row.onlineId}</TableCell>
            <TableCell align='right'>{row.productId}</TableCell>
            <TableCell align='right'>
              {row.productParams.map(param => (
                row.productParams.indexOf(param) === row.productParams.length - 1 ? param : param + ', '
              ))}
            </TableCell>
            <TableCell align='right'>{renderActions(row.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
