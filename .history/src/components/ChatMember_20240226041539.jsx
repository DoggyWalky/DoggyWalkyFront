import React from 'react';

export default function ChatMember() {
  return (
    <button className='flex items-center p-3  hover:bg-gray-300 rounded-2xl w-full'>
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
