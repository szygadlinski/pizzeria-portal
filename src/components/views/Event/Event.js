import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.module.scss';

const Event = ({id}) => (
  <div className={styles.component}>
    <h2>{`Event ${id}`}</h2>
  </div>
);

Event.propTypes = {
  id: PropTypes.string,
};

export default Event;
