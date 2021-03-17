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

  renderActions(status){
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
              {tables.map(row => (
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
                    {this.renderActions(row.status)}
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
