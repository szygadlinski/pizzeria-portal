import React from 'react';
import { Link } from 'react-router-dom';
import Paper      from '@material-ui/core/Paper';
import TextField  from '@material-ui/core/TextField';
import Table      from '@material-ui/core/Table';
import TableBody  from '@material-ui/core/TableBody';
import TableCell  from '@material-ui/core/TableCell';
import TableHead  from '@material-ui/core/TableHead';
import TableRow   from '@material-ui/core/TableRow';
import Button     from '@material-ui/core/Button';
import { baseUrl } from '../../../App';
import styles from './Tables.module.scss';

const demoContent = [
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

const startDate = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}T${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}`;

let intervals = [];
for(let i = 12; i < 24; i += 0.5){
  Number.isInteger(i) ? i = `${i}:00` : i = `${Math.floor(i)}:30`;
  intervals.push(i);
  const array = i.split(':');
  i = parseInt(array[0], 10) + parseInt(array[1], 10) / 60;
}

const setClassName = (hour, interval, duration) => {
  const arrayHour = hour.split(':');
  hour = parseInt(arrayHour[0], 10) + parseInt(arrayHour[1], 10) / 60;

  const arrayInterval = interval.split(':');
  interval = parseInt(arrayInterval[0], 10) + parseInt(arrayInterval[1], 10) / 60;

  if(hour === interval || (interval > hour && interval < hour + duration)){
    return true;
  } else {
    return false;
  }
};

const Tables = () => (
  <Paper className={styles.component} elevation={3}>
    <form className={styles.form}>
      <TextField
        id="datetime-local"
        label="Pick date and time"
        type="datetime-local"
        defaultValue={startDate}
        className={styles.dateInput}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Hours</TableCell>
          <TableCell align='right'>Table 1</TableCell>
          <TableCell align='right'>Table 2</TableCell>
          <TableCell align='right'>Table 3</TableCell>
          <TableCell align='right'>Table 4</TableCell>
          <TableCell align='right'>Table 5</TableCell>
          <TableCell align='right'>Table 6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          intervals.map(interval => (
            <TableRow key={intervals.indexOf(interval)}>
              <TableCell component='th' scope='row'>{interval}</TableCell>
              <TableCell align='right' className={styles.cell}>
                {row.tableId === '1' && setClassName(row.hour, interval, row.duration)
                  ?
                  <Button
                    component={Link}
                    to={`${baseUrl}/tables/${row.type}/${row.id}`}
                    className={styles.button}
                    variant="contained"
                    color="primary"
                  >
                    Reservation details
                  </Button>
                  :
                  ''
                }
              </TableCell>
              <TableCell align='right' className={styles.cell}>
                {row.tableId === '2' && setClassName(row.hour, interval, row.duration)
                  ?
                  <Button
                    component={Link}
                    to={`${baseUrl}/tables/${row.type}/${row.id}`}
                    className={styles.button}
                    variant="contained"
                    color="primary"
                  >
                    Reservation details
                  </Button>
                  :
                  ''
                }
              </TableCell>
              <TableCell align='right' className={styles.cell}>
                {row.tableId === '3' && setClassName(row.hour, interval, row.duration)
                  ?
                  <Button
                    component={Link}
                    to={`${baseUrl}/tables/${row.type}/${row.id}`}
                    className={styles.button}
                    variant="contained"
                    color="primary"
                  >
                    Reservation details
                  </Button>
                  :
                  ''
                }
              </TableCell>
              <TableCell align='right' className={styles.cell}>
                {row.tableId === '4' && setClassName(row.hour, interval, row.duration)
                  ?
                  <Button
                    component={Link}
                    to={`${baseUrl}/tables/${row.type}/${row.id}`}
                    className={styles.button}
                    variant="contained"
                    color="primary"
                  >
                    Reservation details
                  </Button>
                  :
                  ''
                }
              </TableCell>
              <TableCell align='right' className={styles.cell}>
                {row.tableId === '5' && setClassName(row.hour, interval, row.duration)
                  ?
                  <Button
                    component={Link}
                    to={`${baseUrl}/tables/${row.type}/${row.id}`}
                    className={styles.button}
                    variant="contained"
                    color="primary"
                  >
                    Reservation details
                  </Button>
                  :
                  ''
                }
              </TableCell>
              <TableCell align='right' className={styles.cell}>
                {row.tableId === '6' && setClassName(row.hour, interval, row.duration)
                  ?
                  <Button
                    component={Link}
                    to={`${baseUrl}/tables/${row.type}/${row.id}`}
                    className={styles.button}
                    variant="contained"
                    color="primary"
                  >
                    Reservation details
                  </Button>
                  :
                  ''
                }
              </TableCell>
            </TableRow>
          ))
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
