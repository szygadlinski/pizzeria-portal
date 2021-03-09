import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';


const Waiter = ({id}) => (
  <div className={styles.component}>
    <h2>Waiter</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/${id}`}>{`Order ${id}`}</Link>
  </div>
);

Waiter.propTypes = {
  id: PropTypes.string,
};

export default Waiter;
