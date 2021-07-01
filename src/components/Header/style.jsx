const styles = theme => ({
  searchButton: {
    color: '#C82832'
  },
  gridLogo: {
    display: 'flex',
    alignItems: 'center'
  },
  gridSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  inputSearchHeader: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  searchToolbar: {
    borderTop: 'outset',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  inputSearch: {
    margin: '8px'
  }
});

export default styles;
