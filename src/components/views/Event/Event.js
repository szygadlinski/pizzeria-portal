import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.module.scss';

const Event = ({id}) => {
  if(!id){
    id = 'new';
    return(
      <div className={styles.component}>
        <h2>New event</h2>
      </div>
    );
  } else {
    return(
      <div className={styles.component}>
        <h2>{`Event ${id}`}</h2>
      </div>
    );
  }
};

Event.propTypes = {
  id: PropTypes.string,
};

export default Event;
