
import ReactDOM from 'react-dom';
import { authRoutes } from './authRoutes';

const routes = authRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
