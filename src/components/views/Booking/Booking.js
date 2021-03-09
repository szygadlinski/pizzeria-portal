import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = ({id}) => {
  if(!id){
    id = 'new';
    return(
      <div className={styles.component}>
        <h2>New Booking</h2>
      </div>
    );
  } else {
    return(
      <div className={styles.component}>
        <h2>{`Booking ${id}`}</h2>
      </div>
    );
  }
};

Booking.propTypes = {
  id: PropTypes.string,
};

export default Booking;
