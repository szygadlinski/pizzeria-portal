import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = ({id}) => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}>{`Booking ${id}`}</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/new`}>New Event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/${id}`}>{`Event ${id}`}</Link>
  </div>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
