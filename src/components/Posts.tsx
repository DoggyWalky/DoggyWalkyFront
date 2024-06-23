import React, {useState} from 'react';
import PostCard from './PostCard';

interface Post {
  memberId: string;
  title: string;
  fileImage: string;
  insertDate: string;
  dogSize: string;
  // 추가적인 게시물 정보에 대한 타입을 여기에 추가할 수 있어요.
}

// Posts 컴포넌트에서 posts props의 타입을 정의합니다.
interface Props {
  posts: Post[]; // Post 타입의 배열
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <>
      <ul className='grid gap-8 grid-cols-4'>
        {posts.map(post => (
          <li key={post.memberId} className="w-[300px] h-[310px] p-[10px] bg-white shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] cursor-pointer">
            <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden shadow-inner-lg">
                    <img src={post.fileImage} className='w-[300px] h-auto'/>
                </div>
              <div className="w-[280px] px-[5px] flex flex-wrap">
                  <p className="p-2 text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">{post.title}</p>
                  <div className="w-[280px] flex justify-between items-center font-bold text-base">
                      <p className="text-gray-400 font-medium">아이디{post.memberId}</p>
                      <p className="text-white bg-amber-400 px-4 py-2 rounded-full shadow-md">소형견</p>
                    </div>
                </div>
            {/* 추가적인 게시물 정보 표시 */}
          </li>
        ))}
        {posts.map(post => (
          <li key={post.memberId} className="w-[300px] h-[310px] p-[10px] bg-white shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] cursor-pointer">
            <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden shadow-inner-lg">
                    <img src={post.fileImage} className='w-[300px] h-auto'/>
                </div>
              <div className="w-[280px] px-[5px] flex flex-wrap">
                  <p className="p-2 text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">{post.title}</p>
                  <div className="w-[280px] flex justify-between items-center font-bold text-base">
                      <p className="text-gray-400 font-medium">아이디{post.memberId}</p>
                      <p className="text-white bg-lime-500 px-4 py-2 rounded-full shadow-md">중형견</p>
                    </div>
                </div>
            {/* 추가적인 게시물 정보 표시 */}
          </li>
        ))}
        {posts.map(post => (
          <li key={post.memberId} className="w-[300px] h-[310px] p-[10px] bg-white shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] cursor-pointer">
            <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden shadow-inner-lg">
                    <img src={post.fileImage} className='w-[300px] h-auto'/>
                </div>
              <div className="w-[280px] px-[5px] flex flex-wrap">
                  <p className="p-2 text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">{post.title}</p>
                  <div className="w-[280px] flex justify-between items-center font-bold text-base">
                      <p className="text-gray-400 font-medium">아이디{post.memberId}</p>
                      <p className="text-white bg-sky-400 px-4 py-2 rounded-full shadow-md">대형견</p>
                    </div>
                </div>
            {/* 추가적인 게시물 정보 표시 */}
          </li>
        ))}
        {posts.map(post => (
          <li key={post.memberId} className="w-[300px] h-[310px] p-[10px] bg-white shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] cursor-pointer">
            <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden shadow-inner-lg">
                    <img src={post.fileImage} className='w-[300px] h-auto'/>
                </div>
              <div className="w-[280px] px-[5px] flex flex-wrap">
                  <p className="p-2 text-text text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">{post.title}</p>
                  <div className="w-[280px] flex justify-between items-center font-bold text-base">
                      <p className="text-gray-400 font-medium">아이디{post.memberId}</p>
                      <p className="text-white bg-amber-400 px-4 py-2 rounded-full shadow-md">소형견</p>
                    </div>
                </div>
            {/* 추가적인 게시물 정보 표시 */}
          </li>
        ))}
        {posts.map(post => (
          <li key={post.memberId} className="w-[300px] h-[310px] p-[10px] bg-white text-text shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] duration-100 hover:ease-in-out cursor-pointer">
            <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden shadow-inner-lg">
                    <img src={post.fileImage} className='w-[300px] h-auto'/>
                </div>
              <div className="w-[280px] px-[5px] flex flex-wrap">
                  <p className="p-2 text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">{post.title}</p>
                  <div className="w-[280px] flex justify-between items-center font-bold text-base">
                      <p className="text-gray-400 font-medium">아이디{post.memberId}</p>
                      {post.dogSize === 
                        'LARGE' ? <p className="text-white bg-sky-400 px-4 py-2 rounded-full shadow-md">대형견</p>
                        : (
                          post.dogSize === 'MEDIUM' ? <p className="text-white bg-lime-500 px-4 py-2 rounded-full shadow-md">중형견</p>
                          : <p className="text-white bg-amber-400 px-4 py-2 rounded-full shadow-md">소형견</p>
                        )}
                    </div>
                </div>
            {/* 추가적인 게시물 정보 표시 */}
          </li>
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
