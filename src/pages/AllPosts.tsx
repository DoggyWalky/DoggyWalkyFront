import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Search from '../components/Search';
import Posts from '../components/Posts';
import PostFilter from '../components/PostFilter';
import PostRegion from '../components/PostRegion';
import axiosInstance from '../api/api';

interface Post {
  memberId: string;
  title: string;
  fileImage: string;
  insertDate: string;
  DogKind: string;
  status: string;
}

export default function AllPosts() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchedPosts, setSearchedPosts] = useState<Post[]>([]);
  const [sortOption, setSortOption] = useState<string>('desc');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [DogKind, setDogKind] = useState<string[]>([]);
  const [Status, setStatus] = useState<string[]>([]);
  const [bCode, setbCode] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);

        if (bCode) queryParams.set('bcode', bCode);
        if (searchText) queryParams.set('keyword', decodeURIComponent(searchText));
        if (sortOption) queryParams.set('sortOption', sortOption);
        if (DogKind.length > 0) {
          queryParams.delete('dogSize');
          DogKind.forEach(kind => queryParams.append('dogSize', kind));
        }
        if (Status.length > 0) {
          queryParams.delete('status');
          Status.forEach(status => queryParams.append('status', status));
        }

        navigate({
          pathname: location.pathname,
          search: queryParams.toString(),
        });

        const response = await axiosInstance.get(`/api/job-post/search${queryParams.toString() ? `?${queryParams.toString()}` : ''}`);
        const data = response.data;
        setSearchedPosts(data as Post[]);

        let filteredData = [...data] as Post[];
        if (DogKind.length > 0) {
          filteredData = filteredData.filter(post => DogKind.includes(post.DogKind));
        }
        if (Status.length > 0) {
          filteredData = filteredData.filter(post => Status.includes(post.status));
        }

        if (sortOption === 'asc') {
          filteredData.sort((a, b) => new Date(a.insertDate).getTime() - new Date(b.insertDate).getTime());
        } else if (sortOption === 'desc') {
          filteredData.sort((a, b) => new Date(b.insertDate).getTime() - new Date(a.insertDate).getTime());
        }

        setFilteredPosts(filteredData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [searchText, sortOption, DogKind, Status, bCode, location.search]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (filters: { dogSize: string[]; status: string[] }) => {
    setDogKind(filters.dogSize);
    setStatus(filters.status);
  };

  const handleFilterOpen = () => {
    setIsFilter(prev => !prev);
  };

  const handleFilterClose = () => {
    setIsFilter(false);
  };

  const handlePostOpen = () => {
    setIsOpen(true);
  };

  const handlePostClose = () => {
    setIsOpen(false);
  };

  const handleComplete = (bcode: string) => {
    setbCode(bcode);
    setIsOpen(false);
  };

  return (
    <>
      <Search onSearch={setSearchText} />
      <button onClick={handlePostOpen}>주소 설정</button>
      {isOpen && (
        <div>
          <PostRegion onComplete={handleComplete} />
          <button onClick={handlePostClose}>닫기</button>
        </div>
      )}
      <div className='flex justify-between relative'>
        <div>
          <button className='flex p-2 text-lg font-bold ml-4 text-text' onClick={handleFilterOpen}>
            <p>필터</p>
          </button>
          {isFilter && (
            <PostFilter handleFilterChange={handleFilterChange} closefilter={handleFilterClose} />
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
