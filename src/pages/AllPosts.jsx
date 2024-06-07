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
    "insertDate" : date 
  }
]
*/
export default function AllPosts() {
  const navigate = useNavigate();
  // 검색된 게시물을 저장하기 위한 상태
  const [searchedPosts, setSearchedPosts] = useState([]);
  // 정렬 상태 관리
  const [sortOption, setSortOption] = useState();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [searchText, setSearchText] = useState();
  const [DogKind, setDogKind] = useState([]);
  const [Status, setStatus] = useState([]);
  const [bCode, setbCode] = useState();
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // searchPosts에 대한 URL 생성
        const queryParams = new URLSearchParams();
        if (bCode) queryParams.append('bcode', bCode);
        if (searchText) queryParams.append('keyword', encodeURIComponent(searchText));
        if (sortOption) queryParams.append('sortOption', sortOption);
        if (DogKind.length > 0) {
          DogKind.forEach(kind => queryParams.append('dogSize', kind));
        } else if(DogKind.length === 0) {
          queryParams.append('dogSize', null);
        }
        if (Status.length > 0) {
          Status.forEach(status => queryParams.append('status', status));
        } else if(Status.length === 0) {
          queryParams.append('status', null);
        }
        const queryString = queryParams.toString();
        const url = `http://localhost:8080/api/job-post/search${queryString ? `?${queryString}` : ''}`;

        console.log(url)
        console.log(searchText)

        // API 호출
        const response = await fetch(url);
        console.log(response)
        const data = await response.json();
        setSearchedPosts(data);
        console.log(data[0]);
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
  }, [searchText, sortOption, DogKind, Status, bCode]);

  
  // 정렬 옵션 변경 핸들러
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (filters) => {
    const newDogKind = filters.dogSize.length > 0 ? filters.dogSize : null;
    const newStatus = filters.status.length > 0 ? filters.status : null;
    setDogKind(newDogKind);
    setStatus(newStatus);
  };

  const handleFilterOpen = () => {
    setIsFilter(prev => ! prev); // 클릭 시 필터 옵션 창 열림.
  } 
  const handleFilterClose = () => {
    setIsFilter(false); // 필터 옵션 창 닫힘.
  } 

  const handlePostOpen = () => {
    setIsOpen(true); // 클릭 시 우편번호 검색 창을 엽니다.
  };
  const handlePostClose = () => {
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
      <Search onSearch={setSearchText}/>
      <button onClick={handlePostOpen}>주소 설정</button>
      {isOpen && (
        <div>
          <PostRegion onComplete={handleComplete}/>
          <button onClick={handlePostClose}>닫기</button> {/* 우편번호 검색 창 닫기 버튼 */}
        </div>
      )}
      <div Class='flex justify-between relative'>
        <div>
          <button className='flex p-2 text-lg font-bold ml-4 text-text' onClick={handleFilterOpen}>
            <p>필터</p>
          </button>
          {isFilter && (
            <PostFilter  handleFilterChange={handleFilterChange} closefilter={handleFilterClose}/>
          )}
        </div>
        <div>
          <select className='focus:outline-none text-[#00d7c0] font-bold border border-[#00d7c0] shadow-slate-300 rounded-xl p-2' value={sortOption} onChange={handleSortChange}>
            <option value="desc">최신순</option>
            <option value="asc">오래된순</option>
          </select>
        </div>
      </div>
      <Posts posts={filteredPosts} />
    </>
  );
}

