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

  useEffect(() => {
    setResults([]);
    setCurrentPage(PAGE_DEFAULT);
  }, [query]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const dataResults = await getSearchData(query, currentPage, PAGE_SIZE);
      setResults(dataResults?.data);

      setIsLoading(false);
    };
    getData();
  }, []);

  const getCard = card => (
    <div
      key={card.id}
      title="result__container__card"
      className="result__container__card"
    >
      <div>
        <img
          className="result__container__card__image"
          src={card?.creator?.avatarUrl}
          alt={card.title}
        />
      </div>
      <div className="result__container__card__body">
        <div className="result__container__card__body__title">
          {card?.creator.name}
        </div>
        <div className="result__container__card__body__phone">
          {card?.creator.phone}
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
      {results.map(result => getCard(result))}
    </>
  );
};

export default withRouter(SearchResults);
