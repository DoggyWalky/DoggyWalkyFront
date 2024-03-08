import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Posts from '../components/Posts';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function AllPosts() {
  const { keyword } = useParams();
  const [searchedPosts, setSearchedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!keyword) {
        setSearchedPosts([]);
        return;
      }
    };

    fetchPosts();
  }, [keyword]);

  return (
    <>
      <Search />
      {keyword && searchedPosts.length === 0 && (
        <p>존재하지 않는 게시물입니다.</p>
      )}
      {searchedPosts.length > 0 && <Posts posts={searchedPosts} />}
      <Posts />
    </>
  );
}
