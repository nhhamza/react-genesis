import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import InfiniteScroll from 'react-infinite-scroller';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  LinearProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import beerIcon from '../../assets/images/beer-icon.png';
import coffeeIcon from '../../assets/images/coffee-icon.png';
import cocktailIcon from '../../assets/images/cocktail-icon.png';
import milkshakeIcon from '../../assets/images/milkshake-icon.png';
import greenCommentIcon from '../../assets/images/comment-green.png';
import commentIcon from '../../assets/images/comment.png';
import styles from './style';
import t from '../../constants/translates';
import './style.scss';
import { getSearchData } from '../../Repository/SearchResult/SearchResult';

const TOTAL_ITEMS_COUNT = 8; // should be received from the api
const PAGE_SIZE = 2;
const PAGE_DEFAULT = 1;

const drinkTypes = {
  COCKTAILS: cocktailIcon,
  BEERS: beerIcon,
  COFFEES: coffeeIcon,
  MILKSHAKES: milkshakeIcon
};

const SearchResults = () => {
  const classes = makeStyles(styles)();
  const { query } = useParams();
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(PAGE_DEFAULT);
  const fetchData = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    setCurrentPage(currentPage + 1);

    getSearchData(query, currentPage, PAGE_SIZE).then(response => {
      if (currentPage === 1) {
        setDrinks(response.data);
      } else {
        const items = drinks.concat(response.data);
        setDrinks(...[items]);
      }
      setIsLoading(false);
    });
  };
  useEffect(() => {
    setDrinks([]);
    setCurrentPage(PAGE_DEFAULT);
  }, [query]);

  const next = () => {
    fetchData();
  };

  const printLoader = () => {
    return (
      <div className="progress__container">
        <LinearProgress />
      </div>
    );
  };

  const getCard = drink => (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {drink.title}
        </Typography>
        <Typography variant="h5" component="h2" />
        <Typography className={classes.pos} color="textSecondary">
          <img
            src={drink?.creator?.avatarUrl}
            alt=""
            className={classes.typeIcon}
          />
        </Typography>
        <Typography variant="body2" component="p">
          <img
            src={drinkTypes[drink.type]}
            alt={drink.type}
            className={classes.comment}
          />
          {drink.type}
        </Typography>
      </CardContent>
      <CardActions>
        <img
          src={drink?.comments.length > 0 ? greenCommentIcon : commentIcon}
          alt="comments"
          className={classes.comment}
        />

        {`comments (${drink?.comments.length})`}
      </CardActions>
    </Card>
  );
  return (
    <>
      <InfiniteScroll
        loadMore={next}
        hasMore={currentPage * PAGE_SIZE <= TOTAL_ITEMS_COUNT}
        loader={printLoader()}
        threshold={200}
      >
        <Grid container spacing={2} className={classes.resultsContainer}>
          <Grid item xs={12}>
            <div className="search-title">
              <p className="search-title__count">{TOTAL_ITEMS_COUNT}</p>
              <p className="search-title__text">{t.searchResults.results}</p>
              <p>{query}</p>
            </div>
          </Grid>
          {drinks.map(drink => getCard(drink))}
        </Grid>
      </InfiniteScroll>
    </>
  );
};

export default withRouter(SearchResults);
