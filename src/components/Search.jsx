import { React, useEffect, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { useNavigate, useParams } from 'react-router-dom';
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
// http://localhost:8080/api/jobpost/search
export default function Search({onSearch}) {
  const navigate = useNavigate()
  const [text, setText] = useState('');
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleSearchClick = () => {
    onSearch(text);
    console.log(text)
  };

  console.log(text)
  const animatedItem = useScrollFadeIn('up', 1, 0.3); //애니메이션
  return (
    <section className=' relative'>
      <div className='relative text-center mx-auto mt-28 max-w-2xl z-20 opacity-90'>
        <img
          className=' w-full rounded-md'
          src='images/Search.jpg'
          alt='Search'
        />
      </div>
      <div className='relative h-96 -top-40 z-10 bg-gray-100 rounded-3xl'>
        <form
          className=' relative w-full max-w-3xl mx-auto -bottom-60 bg-white px-4 pt-2 pb-4 rounded-full'
          {...animatedItem}
        >
          <div className='  flex  items-center border-b border-teal-500 px-2 text-md '>
            <IoSearchSharp className='text-2xl text-gray-500' />

            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  leading-tight focus:outline-none'
              type='text'
              value={text}
              onChange={handleInputChange}
              placeholder='어떤 강아지와 산책하고 싶으신가요?'
              aria-label='Full name'
            />
            <button
              className='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-md py-1 px-2 rounded'
              type='button'
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
