import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import useScrollClipPath from '../hooks/useScrollClipPath';
import useScrollCount from '../hooks/useScrollCount';

const Introduce = () => {
  const animatedItem1 = useScrollFadeIn('up', 1, 0);
  const animatedItem2 = useScrollFadeIn('up', 1, 0.2);
  const animatedItem3 = useScrollFadeIn('up', 1, 0.3);
  const { ref } = useScrollCount(1000, 900);
  const animatedImage = useScrollClipPath('left', 1, 0);

  return (
    <section className='relative left-1/2 transform -translate-x-1/2 w-screen ml-auto '>
      <section className=' justify-between items-center py-10 text-center '>
        <h2 className='text-brand pt-4 text-xl font-bold'>Our Services</h2>
        <div className='flex justify-center items-center py-10 w-max_width mx-auto'>
          <div
            className='w-1/4 p-5 m-10 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg h-52 '
            {...animatedItem1}
          >
            <h3 className='text-2xl text-text font-bold py-3'>
              Passionate Dog Owners
            </h3>
            <hr />
            <p className='text-md text-text py-3'>
              Connect with dog owners who share your love for these wonderful
              companions.
            </p>
          </div>
          <div
            className='w-1/4 p-5 m-10 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg h-52'
            {...animatedItem2}
          >
            <h3 className='text-2xl text-text font-bold py-3'>
              Dedicated Dog Walkers
            </h3>
            <hr />
            <p className='text-md text-text py-3'>
              Join our community of reliable and enthusiastic dog walkers
              committed to ensuring the well-being of every furry friend.
            </p>
          </div>
          <div
            className='w-1/4 p-5 m-10 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg h-52'
            {...animatedItem3}
          >
            <h3 className='text-2xl text-text font-bold py-3'>
              Seamless Experience
            </h3>
            <hr />
            <p className='text-md text-text py-3'>
              Our platform provides a user-friendly interface, making it easy
              for dog owners to find the perfect walker and for walkers to
              discover opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className='py-10 flex items-center justify-between bg-gray-50 '>
        <div className=' flex justify-between items-center py-10 w-max_width mx-auto'>
          <div className='w-introduceImg rounded-full overflow-hidden mx-10'>
            <img
              className='w-full'
              src='images/introduceImg1.jpg'
              alt='introduceImg1'
            />
          </div>
          <div className='grid  justify-center text-center px-auto w-2/5 text-text'>
            <h2 className='text-5xl font-bold'>DoggyWalky</h2>
            <br />
            <hr />
            <br />
            <div className='flex text-center mx-auto font-bold text-lg'>
              <p>반려인구</p>
              <div className='ml-3' ref={ref} />
              <p>만 시대</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-10 flex items-center  justify-between '>
        <div className=' flex justify-between items-center py-10 w-max_width mx-auto'>
          <div className='text-center ml-16'>
            <h1 className='text-5xl font-bold'>실시간 이동 경로 확인</h1>
            <br />
            <p className='text-2xl'>We connect people with their dog</p>
          </div>
          <div className='w-introduceImg rounded-2 overflow-hidden mr-10'>
            <img
              className='w-full'
              src='images/introduceImg3.jpg'
              alt='introduceImg3'
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Introduce;
