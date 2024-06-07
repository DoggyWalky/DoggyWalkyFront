import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import AllPosts from './pages/AllPosts';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';
import LoginDetail from './pages/LoginDetail';
import RegisterDetail from './pages/RegisterDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/callback', element: <AllPosts /> },
      { path: '/Posts/new', element: <NewPost /> },
      { path: '/Posts/:id', element: <PostDetail /> },
      { path: '/Profile', element: <Profile /> },
      {
        path: '/Login',
        element: <LoginDetail />,
      },
      {
        path: '/Register',
        element: <RegisterDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
