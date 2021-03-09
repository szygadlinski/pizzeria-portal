import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({id}) => {
  if(!id){
    id = 'new';
    return(
      <div className={styles.component}>
        <h2>New order</h2>
      </div>
    );
  } else {
    return(
      <div className={styles.component}>
        <h2>{`Order ${id}`}</h2>
      </div>
    );
  }
};

Order.propTypes = {
  id: PropTypes.string,
};

export default Order;
