import React from 'react';
import PropTypes from 'prop-types';
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

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    changeStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(table){
    const { changeStatus } = this.props;
    switch (table.status) {
      case 'free':
        return (
          <>
            <Button onClick={() => changeStatus(table.id, 'thinking')}>thinking</Button>
            <Button
              onClick={() => changeStatus(table.id, 'ordered')}
              component={Link}
              to={`${baseUrl}/waiter/order/new`}
            >
              new order
            </Button>
          </>
        );
      case 'thinking':
        return (
          <Button
            onClick={() => changeStatus(table.id, 'ordered')}
            component={Link}
            to={`${baseUrl}/waiter/order/new`}
          >
              new order
          </Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => changeStatus(table.id, 'prepared')}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => changeStatus(table.id, 'delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => changeStatus(table.id, 'paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => changeStatus(table.id, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }

  render(){
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component} elevation={3}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error){
      return (
        <Paper className={styles.component} elevation={3}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return(
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
              {tables.map(table => (
                <TableRow key={table.id}>
                  <TableCell component='th' scope='row'>
                    {table.id}
                  </TableCell>
                  <TableCell align='right'>
                    {table.status}
                  </TableCell>
                  <TableCell align='right'>
                    <Button component={Link} to={`${baseUrl}/waiter/order/${table.order}`}>
                      {table.order}
                    </Button>
                  </TableCell>
                  <TableCell align='right'>
                    {this.renderActions(table)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
