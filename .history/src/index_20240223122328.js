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
import ModifyPost from './pages/ModifyPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/Posts', element: <AllPosts /> },
      { path: '/Posts/new', element: <NewPost /> },
      { path: '/Posts/:id', element: <PostDetail /> },
      { path: '/callback', element: <Profile /> },
      { path: '/ModifyPost/:id', element: <ModifyPost /> },
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
