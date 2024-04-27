import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostCard() {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`/Posts/id`)} //postcard 클릭 시 PostDetail로 이동
      className='card w-full bg-base-100 shadow-xl cursor-pointer transition-all hover:scale-105'
    >
      <figure>
        <img
          src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          Shoes!
          <div className='badge badge-secondary'>NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div>
        </div>
      </div>
    </li>
  );
}
