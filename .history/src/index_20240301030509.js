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
import Chat from './pages/Chat';
import ReviewInput from './components/ReviewInput';
import PetcardDetail from './components/PetcardDetail';
import ModifyProfile from './pages/ModifyProfile';
import ModifyPet from './pages/ModifyPet';
import PetRegister from './pages/PetRegister';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/Posts', element: <AllPosts /> },
      { path: '/Posts/new', element: <NewPost /> },
      { path: '/Posts/id', element: <PostDetail /> },
      { path: '/Profile', element: <Profile /> },
      { path: '/ModifyPost', element: <ModifyPost /> },
      { path: '/ModifyProfile', element: <ModifyProfile /> },
      { path: '/ModifyPet', element: <ModifyPet /> },
      { path: '/PetRegister', element: <PetRegister /> },
    ],
  },
  { path: '/Chat', element: <Chat /> },
  { path: '/ReviewInput', element: <ReviewInput /> },
  { path: '/PetcardDetail', element: <PetcardDetail /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
