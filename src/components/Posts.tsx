import React, {useState} from 'react';
import PostCard from './PostCard';

interface Post {
  memberId: string;
  title: string;
  fileImage: string;
  insertDate: string;
  // 추가적인 게시물 정보에 대한 타입을 여기에 추가할 수 있어요.
}

// Posts 컴포넌트에서 posts props의 타입을 정의합니다.
interface Props {
  posts: Post[]; // Post 타입의 배열
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-10 p-6 mb-10 text-text'>
        {posts.map(post => (
          <div key={post.memberId} className="w-72 h-72 bg-brand rounded-3xl overflow-hidden flex justify-center items-center relative cursor-pointer shadow-lg shadow-gray-300 hover:scale-[1.02]">
            <img src={post.fileImage} className='w-76 h-76'/>
            <div className='font-normal text-sm w-72 h-28 bg-white/30 absolute inset-x-0 bottom-0 pb-2 px-4 shadow-[2px_-5px_20px_5px_rgba(0,0,0,0.1)]'>
              <h2 className='text-center text-xl font-normal m-3 overflow-hidden truncate'>{post.title}</h2>
              <p>작성자 {post.memberId}</p>
              <p>날짜 {post.insertDate}</p>
            </div>
            {/* 추가적인 게시물 정보 표시 */}
          </div>
        ))}
      </ul>
      <div className='flex justify-center mb-20' /*페이지네이션 */>
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

export default Posts;
