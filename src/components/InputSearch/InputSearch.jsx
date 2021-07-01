import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../Input/Input';
import styles from './style';
import ROUTES_CONSTANTS from '../../constants/route.constants';
import text from '../../constants/translates';
import './style.scss';

const InputSearch = ({ history, className, allowClear }) => {
  const classes = makeStyles(styles)();
  const [searchField, setSearchField] = useState('');

  const handleSearch = () => {
    history.push(`${ROUTES_CONSTANTS.researchBase}${searchField}`);
  };
  return (
    <Grid container spacing={2} className={className}>
      <Grid item xs={9} sm={8}>
        <Input
          className={classes.input}
          onChange={field => setSearchField(field)}
          allowClear={allowClear}
        />
      </Grid>
      <Grid item xs={3} sm={4} className={classes.gridSearch}>
        <Button
          id="button-icon-search"
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => handleSearch()}
        >
          <span className="search__text">{text.home.search}</span>
          <SearchIcon className={classes.searchIcon} />
        </Button>
      </Grid>
    </Grid>
  );
};

InputSearch.propTypes = {
  history: PropTypes.func,
  className: PropTypes.func,
  allowClear: PropTypes.bool
};

export default withRouter(InputSearch);
