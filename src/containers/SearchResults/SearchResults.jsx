import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import './style.scss';
import { LinearProgress } from '@material-ui/core';
import { getSearchData } from '../../Repository/SearchResult/SearchResult';
import CardPrisioner from '../../components/PrisonerCard/PrisionerCard';

const PAGE_SIZE = 2;
const PAGE_DEFAULT = 1;
let shouldAskForMore = false;
let query = '';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage] = useState(PAGE_DEFAULT);

  const fetchData = () => {
    const getData = async () => {
      setIsLoading(true);
      const dataResults = await getSearchData(query, currentPage, PAGE_SIZE);
      setResults(dataResults?.data);
      setIsLoading(false);
      if (shouldAskForMore) {
        shouldAskForMore = false;
        fetchData();
      }
    };
    getData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchInputChange = event => {
    query = event.target.value;
    if (!isLoading) {
      fetchData();
    } else {
      shouldAskForMore = true;
    }
  };
  return (
    <>
      <div title="result__summary" className="result__summary">
        <div className="search__input__container">
          <input onChange={handleSearchInputChange} />
        </div>
        {isLoading && <LinearProgress />}

        {results.map(result => (
          <CardPrisioner key={result.id} card={result} />
        ))}
      </div>
    </>
  );
};

export default withRouter(SearchResults);
