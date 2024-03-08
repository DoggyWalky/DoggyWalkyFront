import React from 'react';
import Search from '../components/Search';
import Posts from '../components/Posts';
import { useParams } from 'react-router-dom';

export default function AllPosts() {
  const { keyword } = useParams();
  return (
    <>
      <Search />
      {keyword ? `${keyword}` : 'x'}
      <Posts />
    </>
  );
}
