import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';
import './style.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { LinearProgress } from '@material-ui/core';
import { getSearchData } from '../../Repository/SearchResult/SearchResult';

const PAGE_SIZE = 2;
const PAGE_DEFAULT = 1;

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
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
        setResults(response.data);
      } else {
        const items = results.concat(response.data);
        setResults(...[items]);
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setResults([]);
    setCurrentPage(PAGE_DEFAULT);
  }, [query]);

  useEffect(() => {
    fetchData();
  }, []);

  const getCard = drink => (
    <div title="result__container__card" className="result__container__card">
      <div>
        <img
          className="result__container__card__image"
          src={drink?.creator?.avatarUrl}
          alt={drink.title}
        />
      </div>
      <div className="result__container__card__body">
        <div className="result__container__card__body__title">
          {drink?.creator.name}
        </div>
        <div className="result__container__card__body__phone">
          {drink?.creator.phone}
        </div>
      </div>
      <div className="result__container__card__navigation">
        <ArrowForwardIosIcon fontSize="small" />
      </div>
    </div>
  );
  return (
    <>
      {isLoading && <LinearProgress />}
      <div title="result__summary" className="result__summary"></div>
      {results.map(drink => getCard(drink))}
    </>
  );
};

export default withRouter(SearchResults);
