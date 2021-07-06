// import Home from '../containers/Home/Home';
import SearchResults from '../containers/SearchResults/SearchResults';
import Search from '../containers/Search/Search';
import ROUTES_CONSTANTS from './route.constants';

const ROUTES = [
  { exact: true, path: ROUTES_CONSTANTS.research, component: SearchResults },
  { exact: true, path: ROUTES_CONSTANTS.researchBase, component: Search }
];

export default ROUTES;
