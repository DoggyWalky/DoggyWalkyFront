import React from 'react';

export default function ChatMember() {
  return (
    <div className='flex items-center'>
      <img
        alt='Tailwind CSS chat bubble component'
        src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
        className='w-10 rounded-full'
      />
      <div className='chat-header'>Obi-Wan Kenobi</div>
    </div>
  );
}
