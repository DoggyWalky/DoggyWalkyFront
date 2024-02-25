import React from 'react';

export default function ChatMember() {
  return (
    <div className='flex items-center mb-3'>
      <img
        alt='Tailwind CSS chat bubble component'
        src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
        className='w-11 rounded-full mr-3'
      />
      <div>
        <p className='chat-header'>Obi-Wan Kenobi</p>
        <p>I hate you!</p>
      </div>
    </div>
  );
}
