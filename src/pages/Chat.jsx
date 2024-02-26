import React from 'react';
import ChatMember from '../components/ChatMember';

export default function Chat() {
  return (
    <div>
      <div className='flex m-3'>
        <p className='font-bold text-4xl  '>Chat</p>
        <img src='images/logo.png' alt='logo ' className='w-56 ml-auto mr-3' />
      </div>
      <div className='flex  border-t-2 border-gray-300 h-screen'>
        <div className='w-2/5 '>
          <ChatMember />
          <ChatMember />
          <ChatMember />
        </div>
        <div className='w-3/5  border-l-2 border-gray-300 '>
          <div className=' flex items-center justify-center border-b-2 border-gray-300 pl-5 p-2 '>
            <img
              alt='Tailwind CSS chat bubble component'
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              className='w-12 rounded-full mr-3'
            />
            <p className='font-semibold text-xl'>Obi-Wan Kenobi</p>
          </div>
          <div className=' px-5'>
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
          <div className='flex items-center justify-cneter px-8 py-3 bg-slate-100 fixed bottom-0  w-3/5'>
            <textarea
              type='text'
              placeholder='메시지 입력...'
              className='input  border-black rounded-xl h-20 w-10/12 items-center '
            />
            <button className='border bg-lightYellow p-2 rounded-xl ml-3'>
              전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
