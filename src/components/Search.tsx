import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import useScrollFadeIn from '../hooks/useScrollFadeIn'; // 애니메이션 훅 가져오기

interface SearchProps {
  onSearch: (searchText: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get('keyword') || '';
    setText(keyword);
  }, [location.search]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSearchClick = () => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('keyword', text);
    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
    onSearch(text); // 검색어가 업데이트되면 부모 컴포넌트에 알림
  };

  const animatedItem = useScrollFadeIn('up', 1, 0.3); // 애니메이션

  return (
    <section className='relative'>
      <div className='relative text-center mx-auto mt-28 max-w-2xl z-20 opacity-90'>
        <img
          className='w-full rounded-md'
          src='images/Search.jpg'
          alt='Search'
        />
      </div>
      <div className='relative h-96 -top-40 z-10 bg-blue rounded-2xl'>
        <div
          className='relative shadow-blue-color w-full max-w-3xl mx-auto -bottom-60 bg-white px-4 pt-2 pb-4 rounded-2xl'
          {...animatedItem}
        >
          <div className={
            (text.length > 0)
            ? 'flex items-center border-b-2 border-brand px-2 text-md'
            : 'flex items-center border-b-2 border-slate-300 px-2 text-md'
          }>
            <IoSearchSharp className={
              (text.length > 0)
              ? 'text-2xl text-brand font-medium'
              : 'text-2xl text-slate-300 font-medium'
            } />
            <input
              className='appearance-none bg-transparent border-none w-full text-md font-medium text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
              type='text'
              value={text}
              onChange={handleInputChange}
              placeholder='어떤 강아지와 산책하고 싶으신가요?'
              aria-label='Search'
            />

            <button
              className={
                (text.length > 0)
                ? 'flex-shrink-0 border-transparent border-4 text-brand text-lg font-medium py-1 px-2 rounded'
                : 'flex-shrink-0 border-transparent border-4 text-slate-300 text-lg font-medium py-1 px-2 rounded'
              }
              
              type='button'
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
