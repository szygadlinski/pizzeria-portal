import React from 'react';
import Paper      from '@material-ui/core/Paper';
import Table      from '@material-ui/core/Table';
import TableBody  from '@material-ui/core/TableBody';
import TableCell  from '@material-ui/core/TableCell';
import TableHead  from '@material-ui/core/TableHead';
import TableRow   from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import styles from './Dashboard.module.scss';

const demoOrdersStats = [
  {
    id: '1',
    tableId: '3',
    orderId: '103',
    onlineId: '',
    productId: 'pizza',
    productParams: ['tomato sauce', 'mushrooms', 'salami', 'cheese crust'],
  },
  {
    id: '2',
    tableId: '5',
    orderId: '104',
    onlineId: '',
    productId: 'cake',
    productParams: [],
  },
  {
    id: '3',
    tableId: '4',
    orderId: '106',
    onlineId: '',
    productId: 'breakfast',
    productParams: ['latte'],
  },
  {
    id: '4',
    tableId: '',
    orderId: '',
    onlineId: '1001',
    productId: 'salad',
    productParams: ['cucumber', 'feta', 'pepper'],
  },
  {
    id: '5',
    tableId: '6',
    orderId: '105',
    onlineId: '',
    productId: 'cake',
    productParams: [],
  },
  {
    id: '6',
    tableId: '',
    orderId: '',
    onlineId: '1002',
    productId: 'pizza',
    productParams: ['cream sauce', 'olives', 'mushrooms', 'basil', 'gluten crust'],
  },
];

const demoReservationsStats = [
  {
    id: '1',
    date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    hour: '12:30',
    tableId: '1',
    duration: 4,
    type: 'event',
  },
  {
    id: '2',
    date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    hour: '16:00',
    tableId: '3',
    duration: 2,
    type: 'event',
  },
  {
    id: '3',
    date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    hour: '12:00',
    tableId: '5',
    duration: 2,
    type: 'event',
  },
  {
    id: '4',
    date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    hour: '13:00',
    tableId: '2',
    duration: 4,
    type: 'booking',
  },
  {
    id: '5',
    date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    hour: '18:00',
    tableId: '4',
    duration: 2,
    type: 'booking',
  },
  {
    id: '6',
    date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    hour: '16:00',
    tableId: '6',
    duration: 3,
    type: 'booking',
  },
];

const calculateEndHour = (startHour, duration) => {
  const arrayHour = startHour.split(':');
  const startHourInt = parseInt(arrayHour[0], 10) + parseInt(arrayHour[1], 10) / 60;
  const endHourInt = startHourInt + duration;
  return Number.isInteger(endHourInt) ? `${endHourInt}:00` : `${Math.floor(endHourInt)}:30`;
};

const Dashboard = () => (
  <Paper className={styles.component} elevation={3}>
    <Typography className={styles.title} variant="h6" id="tableOrdersTitle" component="div">{'Today\'s orders'}</Typography>
    <Table aria-labelledby="tableOrdersTitle">
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Online</TableCell>
          <TableCell align='right'>Ordered product</TableCell>
          <TableCell align='right'>Product params</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoOrdersStats.map(row => (
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
          </TableRow>
        ))}
      </TableBody>
    </Table>

    <Typography className={styles.title} variant="h6" id="tableReservationsTitle" component="div">{'Today\'s reservations'}</Typography>
    <Table aria-labelledby="tableReservationsTitle">
      <TableHead>
        <TableRow>
          <TableCell>Reservation number</TableCell>
          <TableCell align='right'>Reservation type</TableCell>
          <TableCell align='right'>Table</TableCell>
          <TableCell align='right'>Start hour</TableCell>
          <TableCell align='right'>End hour</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoReservationsStats.map(row => (
          <TableRow key={row.id}>
            <TableCell component='th' scope='row'>{row.id}</TableCell>
            <TableCell align='right'>{row.type}</TableCell>
            <TableCell align='right'>{row.tableId}</TableCell>
            <TableCell align='right'>{row.hour}</TableCell>
            <TableCell align='right'>{calculateEndHour(row.hour, row.duration)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Dashboard;
