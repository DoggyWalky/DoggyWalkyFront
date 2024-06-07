import React from 'react';
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

      fetchPosts();
    }, [keyword]);}
  
  return (
    <>
      <Search />
      {keyword ? `${keyword}` : '검색한 게시물을 찾을 수 없습니다.'}
      <Posts />
    </>
  );
}
