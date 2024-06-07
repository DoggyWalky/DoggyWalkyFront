import React from 'react';
import PostCard from './PostCard';
import { useParams } from 'react-router-dom';

export default function Posts() {
  const { keyword } = useParams();
  return (
    <>
      {keyword ? `${keyword}` : '검색한 게시물을 찾을 수 없습니다.'}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-10 p-6 mb-10'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ul>
      <div className='flex justify-center mb-20'>
        <div className='join'>
          <input
            className='join-item btn btn-square'
            type='radio'
            name='options'
            aria-label='1'
            defaultChecked={true}
          />
          <input
            className='join-item btn btn-square'
            type='radio'
            name='options'
            aria-label='2'
          />
          <input
            className='join-item btn btn-square'
            type='radio'
            name='options'
            aria-label='3'
          />
          <input
            className='join-item btn btn-square'
            type='radio'
            name='options'
            aria-label='4'
          />
        </div>
      </div>
    </>
  );
}
