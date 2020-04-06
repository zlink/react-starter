import React, { lazy, Suspense } from 'react';
import Loading from '../components/loading';

const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props}></Component>
    </Suspense>
  );
};

const Home = lazy(() => import('../containers/home'));
const Counter = lazy(() => import('../containers/counter'));

const routes = [
  {
    path: '/',
    exact: true,
    component: SuspenseComponent(Home),
  },
  {
    path: '/Counter',
    component: SuspenseComponent(Counter),
  },
];

export default routes;
