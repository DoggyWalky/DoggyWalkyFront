import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Search from '../components/Search';
import Posts from '../components/Posts';
import PostFilter from '../components/PostFilter';
import PostRegion from 'components/PostRegion';
import axiosInstance from '../api/api';
import RegionMap from 'components/RegionMap';
import useScrollFadeIn from '../hooks/useScrollFadeIn'; // 애니메이션 훅 가져오기

interface Post {
  memberId: string;
  title: string;
  fileImage: string;
  insertDate: string;
  dogSize: string;
  status: string;
}

export default function AllPosts() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchedPosts, setSearchedPosts] = useState<Post[]>([]);
  const [sortOption, setSortOption] = useState<string>('desc'); // Adjust type as needed
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [DogKind, setDogKind] = useState<string[]>([]); // Adjust type as needed
  const [Status, setStatus] = useState<string[]>([]); // Adjust type as needed
  const [bCode, setbCode] = useState<string>('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get('keyword') || '';
    const sort = queryParams.get('sortOption') || 'desc';
    const dogKinds = queryParams.getAll('dogSize');
    const statuses = queryParams.getAll('status');
    const bcode = queryParams.get('bcode') || '';

    setSearchText(keyword);
    setSortOption(sort);
    setDogKind(dogKinds);
    setStatus(statuses);
    setbCode(bcode);

    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get(`/api/job-post/search${queryParams.toString() ? `?${queryParams.toString()}` : ''}`);
        const data = response.data;
        setSearchedPosts(data as Post[]);

        let filteredData = [...data] as Post[];
        if (dogKinds.length > 0) {
          filteredData = filteredData.filter(post => dogKinds.includes(post.dogSize));
        }
        if (statuses.length > 0) {
          filteredData = filteredData.filter(post => statuses.includes(post.status));
        }

        if (sort === 'asc') {
          filteredData.sort((a, b) => new Date(a.insertDate).getTime() - new Date(b.insertDate).getTime());
        } else if (sort === 'desc') {
          filteredData.sort((a, b) => new Date(b.insertDate).getTime() - new Date(a.insertDate).getTime());
        }

        setFilteredPosts(filteredData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('sortOption', newSortOption);
    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  };

  const handleFilterChange = (filters: { dogSize: string[]; status: string[] }) => {
    setDogKind(filters.dogSize);
    setStatus(filters.status);
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete('dogSize');
    queryParams.delete('status');
    filters.dogSize.forEach(dogSize => queryParams.append('dogSize', dogSize));
    filters.status.forEach(status => queryParams.append('status', status));
    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  };

  const handleFilterOpen = () => {
    setIsFilter(prev => !prev);
  };

  const handleFilterClose = () => {
    setIsFilter(false);
  };


  const handleComplete = (bcode: string) => {
    setbCode(bcode);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('bcode', bcode);
    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  };
  const animatedItem = useScrollFadeIn('up', 1, 0.3); // 애니메이션
  return (
    <>
      <Search onSearch={setSearchText} />
        <div>
          <PostRegion onComplete={handleComplete} />
        </div>
      <div className='flex justify-end items-center relative border-b-2 border-blue pb-2' {...animatedItem}>
        <div className='mr-8'>
            <button className='text-lg font-bold ml-4 rounded-lg bg-tranceparent text-blue py-1 px-3 hover:drop-shadow-md ' onClick={handleFilterOpen}>
              <p>FILTER</p>
            </button>
            {isFilter && (
              <PostFilter handleFilterChange={handleFilterChange} closefilter={handleFilterClose} />
            )}
          </div>
        <div>
          <select className='focus:outline-none text-blue font-bold shadow-slate-300 p-2 cursor-pointer' value={sortOption} onChange={handleSortChange}>
            <option className='text-text' value="desc">최신순</option>
            <option className='text-text' value="asc">오래된순</option>
          </select>
        </div>
      </div>
      <div className='mx-auto py-16'>
        <Posts posts={filteredPosts} />
      </div>
    </>
  );
}
