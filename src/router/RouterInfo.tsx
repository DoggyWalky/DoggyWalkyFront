import React from 'react';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AllPosts from '../pages/AllPosts';
import NewPost from '../pages/NewPost';
import PostDetail from '../pages/PostDetail';
import Profile from '../pages/Profile';
import ModifyPost from '../pages/ModifyPost';
import ModifyProfile from '../pages/ModifyProfile';
import AddPet from '../pages/AddPet';
import PetRegister from '../pages/PetRegister';
import Chat from '../pages/Chat';
import NaverLogin from 'pages/NaverLogin';
import ReviewInput from '../components/ReviewInput';
import PetcardDetail from '../components/PetcardDetail';
import PageWithLogin from '../pages/PageWithLogin';
import PageWithoutLogin from '../pages/PageWithoutLogin';
import WalkInquiry from '../pages/WalkInquiry';

import { createBrowserRouter } from 'react-router-dom';

export interface RouterItem {
  path: string;
  element: React.ReactNode;
  withAuth: boolean;
  errorElement?: React.ReactNode;
  children?: ChildItem[];
}
export interface ChildItem {
  path: string;
  index?: boolean;
  element: React.ReactNode;
}

export const RouterInfo: RouterItem[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    withAuth: false,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/callback', element: <Login /> },
    ],
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    withAuth: true,
    children: [
      { path: '/Posts', element: <AllPosts /> },
      { path: '/Posts/new', element: <NewPost /> },
      { path: '/Posts/id', element: <PostDetail /> },
      { path: '/Profile', element: <Profile /> },
      { path: '/ModifyPost', element: <ModifyPost /> },
      { path: '/ModifyProfile', element: <ModifyProfile /> },
      { path: '/AddPet', element: <AddPet /> },
      { path: '/PetRegister', element: <PetRegister /> },
      { path: '/WalkInquiry', element: <WalkInquiry /> },
    ],
  },
  { path: '/Chat', element: <Chat />, withAuth: true },
  { path: '/ReviewInput', element: <ReviewInput />, withAuth: true },
  { path: '/PetcardDetail', element: <PetcardDetail />, withAuth: true },

  { path: '/NaverLogin', element: <NaverLogin />, withAuth: true },
];

export const RouterObj = createBrowserRouter(
  RouterInfo.map((routerInfo) => {
    return routerInfo.withAuth
      ? {
          path: routerInfo.path,
          element: <PageWithLogin>{routerInfo.element}</PageWithLogin>,
          children: routerInfo.children,
        }
      : {
          path: routerInfo.path,
          element: <PageWithoutLogin>{routerInfo.element}</PageWithoutLogin>,
          children: routerInfo.children,
        };
  })
);
