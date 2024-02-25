import React from 'react';
import ChatMember from '../components/ChatMember';

export default function Chat() {
  return (
    <div>
      <p className='font-bold text-2xl pm-5 mt-5'>Chat</p>
      <div className='flex py-5'>
        <div className='w-2/5 '>
          <ChatMember />
          <ChatMember />
          <ChatMember />
        </div>
        <div className='w-3/5  border-l-2 border-gray-300 px-5'>
          <div className=' border-b-2 border-gray-300 '>
            <img
              alt='Tailwind CSS chat bubble component'
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              className='w-12 rounded-full'
            />
            <p className='font-semibold text-xl'>Obi-Wan Kenobi</p>
          </div>
          <div>
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
              <div className='chat-bubble bg-slate-200 text-black'>
                You were the Chosen One!
              </div>
              <div className='chat-footer opacity-50'>Delivered</div>
            </div>
            <div className='chat chat-end'>
              <div className='chat-bubble bg-blue'>I hate you!</div>
              <div className='chat-footer opacity-50'>Seen at 12:46</div>
            </div>
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
              <div className='chat-bubble  bg-slate-200 text-black'>
                You were the Chosen One!
              </div>
              <div className='chat-footer opacity-50'>Delivered</div>
            </div>
            <div className='chat chat-end'>
              <div className='chat-image avatar'></div>
              <div className='chat-bubble  bg-blue'>I hate you!</div>
              <div className='chat-footer opacity-50'>Seen at 12:46</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
