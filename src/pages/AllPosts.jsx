import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Posts from '../components/Posts';
import PostFilter from '../components/PostFilter';
import PostRegion from '../components/PostRegion';
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  // URL에서 검색 키워드를 가져오기 위해 useParams 훅 사용
  const { keyword } = useParams();
  // 검색된 게시물을 저장하기 위한 상태
  const [searchedPosts, setSearchedPosts] = useState([]);
  // 정렬 상태 관리
  const [sortOption, setSortOption] = useState();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [DogKind, setDogKind] = useState([]);
  const [Status, setStatus] = useState([]);
  const [bCode, setbCode] = useState();
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // searchPosts에 대한 URL 생성
        const queryParams = new URLSearchParams();
        if (bCode) queryParams.append('bcode', bCode);
        if (keyword) queryParams.append('keyword', keyword);
        if (sortOption) queryParams.append('sortOption', sortOption);
        if (DogKind.length > 0) {
          DogKind.forEach(kind => queryParams.append('dogSize', kind));
        }
        if (Status.length > 0) {
          Status.forEach(status => queryParams.append('status', status));
        }
        const queryString = queryParams.toString();
        const url = `/api/job-post/search${queryString ? `?${queryString}` : ''}`;

        console.log(url)

        // API 호출
        const response = await fetch(url);
        const data = await response.json();
        setSearchedPosts(data);

        // 필터 적용
        let filteredData = [...data];
        if (DogKind.length > 0) {
          filteredData = filteredData.filter(post => DogKind.includes(post.DogKind));
        }
        if (Status.length > 0) {
          filteredData = filteredData.filter(post => Status.includes(post.Status));
        }

        // 정렬 적용
        if (sortOption === 'oldest') {
          filteredData.sort((a, b) => new Date(a.InsertDate) - new Date(b.InsertDate));
        } 

        setFilteredPosts(filteredData);

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [keyword, sortOption, DogKind, Status, bCode]);

 
  
  
  // 정렬 옵션 변경 핸들러
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (filters) => {
    setDogKind(filters.dogSize);
    setStatus(filters.status);

    // URL 변경
    const queryParams = new URLSearchParams();
    queryParams.append('keyword', keyword);
    queryParams.append('sortOption', sortOption);
    navigate(`?${queryParams.toString()}`);
  };

  
  
  const handleOpen = () => {
    setIsOpen(true); // 클릭 시 우편번호 검색 창을 엽니다.
  };

  const handleClose = () => {
    setIsOpen(false); // 우편번호 검색 창을 닫습니다.
  };
  
  const handleComplete = (data) => {
    // 우편번호 검색 완료 시 처리할 로직을 작성합니다.
    console.log(data.bcode);
    setIsOpen(false); // 검색이 완료되면 창을 닫습니다.
    setbCode(data.bcode);
  };

  return (
    <>
      <Search />
      <div>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="desc">최신순</option>
          <option value="asc">오래된순</option>
        </select>
      </div>
      <PostFilter handleFilterChange={handleFilterChange}/>
      <Posts posts={filteredPosts} />
      <button onClick={handleOpen}>클릭</button>
      {isOpen && (
        <div>
          <PostRegion onComplete={handleComplete}/>
          <button onClick={handleClose}>닫기</button> {/* 우편번호 검색 창 닫기 버튼 */}
        </div>
      )}
    </>
  );
}

