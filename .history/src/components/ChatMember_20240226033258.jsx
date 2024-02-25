import React, { useEffect } from 'react';

export default function ChatMember() {
  //   return (
  //     <div className='flex items-center mb-3'>
  //       <img
  //         alt='Tailwind CSS chat bubble component'
  //         src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //         className='w-10 rounded-full mr-3'
  //       />
  //       <div className='chat-header'>Obi-Wan Kenobi</div>
  //     </div>

  const targetRef = useRef(null);
  const handleScroll = () => {
    console.log('scrolling');

    if (window.scrollY > 0) {
      targetRef.current.style.position = 'fixed';
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      <div ref={targetRef}>이벤트 발생위치</div>
    </div>
  );
}
