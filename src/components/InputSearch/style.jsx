const styles = theme => ({
  input: {
    width: '100%'
  },
  button: {
    width: '100%',
    minWidth: '40px'
  },
  searchIcon: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
});

export default styles;
