import React from 'react';
import ChatMember from '../components/ChatMember';

export default function Chat() {
  return (
    <div className='flex '>
      <div className='bg-gray-200 rounded-xl w-2/5 mr-5 h-auto'>
        <ChatMember />
        <ChatMember />
        <ChatMember />
      </div>
      <div className='w-3/5 bg-yellow-100 rounded-xl'>
        <div className='chat chat-start '>
          <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS chat bubble component'
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </div>
          <div className='chat-header'>
            Obi-Wan Kenobi
            <time className='text-xs opacity-50'>12:45</time>
          </div>
          <div className='chat-bubble'>You were the Chosen One!</div>
          <div className='chat-footer opacity-50'>Delivered</div>
        </div>
        <div className='chat chat-end'>
          <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS chat bubble component'
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </div>
          <div className='chat-header'>
            Anakin
            <time className='text-xs opacity-50'>12:46</time>
          </div>
          <div className='chat-bubble'>I hate you!</div>
          <div className='chat-footer opacity-50'>Seen at 12:46</div>
        </div>
      </div>
    </div>
  );
}
