import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = ({id}) => (
  <div className={styles.component}>
    <h2>{`Booking ${id}`}</h2>
  </div>
);

Booking.propTypes = {
  id: PropTypes.string,
};

export default Booking;
