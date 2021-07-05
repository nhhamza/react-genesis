// import Home from '../containers/Home/Home';
import SearchResults from '../containers/SearchResults/SearchResults';
import ROUTES_CONSTANTS from './route.constants';

const ROUTES = [
  { exact: true, path: ROUTES_CONSTANTS.research, component: SearchResults }
];

export default ROUTES;
