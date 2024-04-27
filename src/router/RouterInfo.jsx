import Login from '../pages/Login';
import Home from '../pages/Home';
import Posts from '../pages/Profile';
import PageWithLogin from '../pages/PageWithLogin';
import PageWithoutLogin from '../pages/PageWithoutLogin';
import Layout from '../components/Layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
export const RouterInfo = [
  {
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
        withAuth: false,
        label: 'login',
      },
      {
        path: '/',
        element: <Home />,
        withAuth: false,
        label: 'Home',
      },
      {
        path: '/pageA',
        element: <Posts />,
        withAuth: true,
        label: 'Page A',
      },
    ],
  },
];

export const RouterObj = createBrowserRouter(
  RouterInfo.map(routerInfo => {
    return routerInfo.withAuth
      ? {
          path: routerInfo.path,
          element: <PageWithLogin>{routerInfo.element}</PageWithLogin>,
        }
      : {
          path: routerInfo.path,
          element: <PageWithoutLogin>{routerInfo.element}</PageWithoutLogin>,
        };
  })
);
