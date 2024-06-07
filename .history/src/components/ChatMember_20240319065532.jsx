import React from 'react';
import * as api from '../../service/api';

/*
// 채팅목록 조회
// api.searchChatRoom

// [
//   {
//     "memberId" : string,
//     "fileImage" : string,
//     "Title" : string,
//     "Message" : string
//   },
//   {
//     "memberId" : string,
//     "fileImage" : string,
//     "Title" : string,
//     "Message" : string
//   }, ...
// ]
*/

export default function ChatMember() {
  return (
    <button className='flex items-center p-3  hover:bg-gray-200 rounded-2xl w-full'>
      <img
        alt='Tailwind CSS chat bubble component'
        src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
        className='w-14 rounded-full mr-3'
      />
      <div>
        <p className='chat-header font-bold'>Obi-Wan Kenobi</p>
        <p>I hate you!</p>
      </div>
    </button>
  );
}
