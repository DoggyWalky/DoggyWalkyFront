import React from 'react';
import { ReactTyped } from 'react-typed';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { IoIosArrowDown } from 'react-icons/io';

export default function Banner() {
  const animatedItem = useScrollFadeIn('up', 1, 1); //배너 글 애니메이션 속도조절

  return (
    <section className='relative left-1/2 transform -translate-x-1/2 w-screen  h-[800px] bg-yellow-900 '>
      <div className='w-full h-full bg-cover bg-banner opacity-80' />
      <div className='absolute grid w-full bottom-2 text-center text-gray-50 drop-shadow-2xl justify-center'>
        <ReactTyped //'DoggyWalky'텍스트를 타이핑 애니메이션
          strings={['DoggyWalky']} // 타이핑할 문자열을 포함하는 배열
          typeSpeed={100} // 타이핑 속도 (밀리초)
          loop={false} // 반복 여부
          showCursor={false} // 커서 표시 여부
          className='text-7xl font-bold' // 스타일을 지정하는 CSS 클래스
        />
        <div className=' mx-auto' {...animatedItem}>
          <p className='text-2xl font-bold'>
            <br />
            is a revolutionary platform designed to bring together passionate
            dog owners
            <br /> and enthusiastic dog walkers, creating a seamless and
            enjoyable experience for both parties.
            <br />
          </p>
        </div>
        <IoIosArrowDown
          className=' mx-auto my-8 text-6xl font-bold animate-bounce text-gray-300 opacity-45' /**화살표 */
        />
      </div>
    </section>
  );
}
