import api from '../../api/api';

export const getSearchData = (query, currentPage, pageSize) =>
  api.getSearchResult(query, currentPage, pageSize);
