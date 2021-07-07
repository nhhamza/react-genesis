import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import style from './style.jsx';

const Spinner = ({ isLoading }) => {
  const classes = makeStyles(style)();
  return (
    <>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress className={classes.spinnerActive} size={200} />
      </Backdrop>
    </>
  );
};

Spinner.propTypes = {
  isLoading: PropTypes.bool
};

export default Spinner;
