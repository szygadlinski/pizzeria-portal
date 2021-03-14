import React from 'react';
import { Link } from 'react-router-dom';
import Paper      from '@material-ui/core/Paper';
import TextField  from '@material-ui/core/TextField';
import Button     from '@material-ui/core/Button';
import { routes } from '../../../App';
import styles from './Login.module.scss';

const Login = () => (
  <Paper className={styles.component} elevation={3}>
    <form className={styles.form}>
      <TextField className={styles.input} id="outlined-basic" label="Login" variant="outlined" />
      <TextField className={styles.input} id="outlined-basic" label="Password" type="password" variant="outlined" />
      <Button
        component={Link}
        to={routes.dashboard}
        className={styles.input}
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>
    </form>
  </Paper>
);

export default Login;
