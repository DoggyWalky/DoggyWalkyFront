import React from 'react';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import NaverLogin from 'pages/NaverLogin';
import AllPosts from '../pages/AllPosts';
import NewPost from '../pages/NewPost';
import PostDetail from '../pages/PostDetail';
import Profile from '../components/Profile';
import ModifyPost from '../pages/ModifyPost';
import ModifyProfile from '../pages/ModifyProfile';
import AddPet from '../pages/AddPet';
import PetRegister from '../pages/PetRegister';
import Chat from '../pages/Chat';
import ReviewInput from '../components/ReviewInput';
import PetcardDetail from '../components/PetcardDetail';
import PageWithLogin from '../pages/PageWithLogin';
import PageWithoutLogin from '../pages/PageWithoutLogin';
import MyPage from 'pages/MyPage';
import AppListOwn from 'components/AppListOwn';
import AppListPt from 'components/AppListPt';
import DeleteMember from 'components/DeleteMember';
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
      { path: '/NaverLogin', element: <NaverLogin /> },
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
      { path: '/ModifyPost', element: <ModifyPost /> },
      { path: '/ModifyProfile', element: <ModifyProfile /> },
      { path: '/AddPet', element: <AddPet /> },
      { path: '/PetRegister', element: <PetRegister /> },
      { path: '/WalkInquiry', element: <WalkInquiry /> },
    ],
  },
  {
    path: '/MyProfile',
    element: <MyPage />,
    withAuth: true,
    children: [
      { path: '/MyProfile', element: <Profile /> },
      { path: '/MyProfile/ApplyList', element: <AppListOwn/> },
      { path: '/MyProfile/RequestList', element: <AppListPt/>  },
      { path: '/MyProfile/DeleteMember', element: <DeleteMember/> }
    ]
  },
  { path: '/Chat', element: <Chat />, withAuth: true },
  { path: '/ReviewInput', element: <ReviewInput />, withAuth: true },
  { path: '/PetcardDetail', element: <PetcardDetail />, withAuth: true },
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
