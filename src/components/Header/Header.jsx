import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../Logo/Logo';
import InputSearch from '../InputSearch/InputSearch';
import styles from './style';

const Header = () => {
  const classes = makeStyles(styles)();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid
              item
              xs={10}
              sm={4}
              md={4}
              lg={4}
              className={classes.gridLogo}
            >
              <Logo />
            </Grid>
            <Grid
              item
              xs={false}
              sm={8}
              md={5}
              lg={4}
              className={classes.inputSearchHeader}
            >
              <InputSearch allowClear className={classes.inputSearch} />
            </Grid>
            <Grid item xs={2} sm={false} className={classes.gridSearch}>
              <IconButton
                id="icon-search-button"
                className={classes.searchButton}
                onClick={() => setShowSearch(!showSearch)}
              >
                {showSearch ? <ClearIcon /> : <SearchIcon />}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        {showSearch && (
          <Toolbar className={classes.searchToolbar} id="search-toolbar">
            <InputSearch className={classes.inputSearch} />
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
