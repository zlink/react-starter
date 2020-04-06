import Home from '../containers/home';
import Counter from '../containers/counter';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/Counter',
    component: Counter,
  },
];

export default routes;
