import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper        from '@material-ui/core/Paper';
import Table        from '@material-ui/core/Table';
import TableBody    from '@material-ui/core/TableBody';
import TableCell    from '@material-ui/core/TableCell';
import TableHead    from '@material-ui/core/TableHead';
import TableRow     from '@material-ui/core/TableRow';
import InputLabel   from '@material-ui/core/InputLabel';
import MenuItem     from '@material-ui/core/MenuItem';
import FormControl  from '@material-ui/core/FormControl';
import Select       from '@material-ui/core/Select';
import TextField    from '@material-ui/core/TextField';
import Typography   from '@material-ui/core/Typography';
import Slider       from '@material-ui/core/Slider';
import Button       from '@material-ui/core/Button';
import { routes } from '../../../App';
import styles from './Booking.module.scss';

const demoContent = [
  {
    id: '4',
    date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    hour: '13:00',
    tableId: '2',
    duration: 4,
  },
  {
    id: '5',
    date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    hour: '18:00',
    tableId: '4',
    duration: 2,
  },
  {
    id: '6',
    date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    hour: '16:00',
    tableId: '6',
    duration: 3,
  },
];

const calculateEndHour = (startHour, duration) => {
  const arrayHour = startHour.split(':');
  const startHourInt = parseInt(arrayHour[0], 10) + parseInt(arrayHour[1], 10) / 60;
  const endHourInt = startHourInt + duration;
  return Number.isInteger(endHourInt) ? `${endHourInt}:00` : `${Math.floor(endHourInt)}:30`;
};

const Booking = props => {
  const [table, setTable] = React.useState('');
  const handleTableChange = event => (
    setTable(event.target.value)
  );

  const startDate = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}T${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}`;

  const marks = [
    {
      value: 0.5,
      label: 0.5,
    },
    {
      value: 6,
      label: 6,
    },
  ];

  return(
    <Paper className={styles.component} elevation={3}>
      {props.match.params.id === 'new'
        ?
        <form className={styles.form}>
          <FormControl className={styles.formControl}>
            <InputLabel id='table-label'>Table</InputLabel>
            <Select
              labelId='table-label'
              id='table'
              value={table}
              onChange={handleTableChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={styles.formControl}>
            <TextField
              id="datetime-local"
              label="Pick date and time"
              type="datetime-local"
              defaultValue={startDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          <FormControl className={styles.formControl}>
            <Typography id="duration-slider" gutterBottom>Duration</Typography>
            <Slider
              defaultValue={3}
              min={0.5}
              max={6}
              aria-labelledby="duration-slider"
              step={0.5}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </FormControl>

          <FormControl className={styles.formControl}>
            <Button
              component={Link}
              to={routes.dashboard}
              className={styles.button}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </FormControl>
        </form>
        :
        demoContent.map(row => (
          row.id === props.match.params.id
            ?
            <Table key={row.id}>
              <TableHead>
                <TableRow>
                  <TableCell>Booking number</TableCell>
                  <TableCell align='right'>Date</TableCell>
                  <TableCell align='right'>Table</TableCell>
                  <TableCell align='right'>Start hour</TableCell>
                  <TableCell align='right'>End hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell align='right'>{row.date}</TableCell>
                  <TableCell align='right'>{row.tableId}</TableCell>
                  <TableCell align='right'>{row.hour}</TableCell>
                  <TableCell align='right'>{calculateEndHour(row.hour, row.duration)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            :
            ''
        ))
      }
    </Paper>
  );
};

Booking.propTypes = {
  match: PropTypes.object,
};

export default Booking;
