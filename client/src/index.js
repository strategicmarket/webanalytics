
import ReactDOM from 'react-dom';
import { authRoutes } from './authRoutes';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import '../scss/style.scss'
import '../scss/core/_dropdown-menu-right.scss'


const routes = authRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
