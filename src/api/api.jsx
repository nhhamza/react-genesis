import axios from 'axios';
import { API_ROOT } from './api.conf';
import { API_ROUTES } from './apiRoutes';

export function downLoadFile(link) {
  return axios.get(link, { responseType: 'blob' });
}

class API {
  http;

  constructor() {
    axios.defaults.baseURL = API_ROOT;
    this.http = axios;
  }

  getSearchResult = (query, currentPage, pageSize) =>
    this.http.get(
      `${API_ROUTES.searchResults}?&search=${query}&page=${currentPage}&pageSize=${pageSize}`
    );
}

export default new API();
