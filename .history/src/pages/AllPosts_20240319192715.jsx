import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Posts from '../components/Posts';
import { useParams } from 'react-router-dom';
import * as api from '../api/api';

/*
게시글 상세 조회
api.searchPostDetail

{
  "memberId" : string,
  "Title" : string,
  "fileImage" : string,
  "Description" : string,
  "Status" : string,
  "StartPoint" : string,
  "EndPoint" : string,
  "InsertDate" : string,
  "DogKind" : string
}
*/

/*게시글 조회
api.searchPost

[
  {
    "memberId" : string,
    "Title" : string,
    "fileImage" : string,
    "Statue" : string,
    "DogKind" : string,
    "InsertDate" : date 
  },
  {
    "memberId" : string,
    "Title" : string,
    "fileImage" : string,
    "Statue" : string,
    "DogKind" : string,
    "InsertDate" : date 
  }
]
*/

export default function AllPosts() {
  // URL에서 검색 키워드를 가져오기 위해 useParams 훅 사용
  const { keyword } = useParams();
  // 검색된 게시물을 저장하기 위한 상태
  const [searchedPosts, setSearchedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!keyword) {
        // 검색 키워드가 없으면 검색된 게시물 상태 초기화
        setSearchedPosts([]);
        return;
      }
    };

    fetchPosts();
  }, [keyword]);

  return (
    <>
      <Search />
      {keyword &&
        searchedPosts.length === 0 && ( // 검색 키워드가 있고 검색된 게시물이 없을 경우 메시지 표시
          <p>존재하지 않는 게시물입니다.</p>
        )}{' '}
      <Posts />
    </>
  );
}
