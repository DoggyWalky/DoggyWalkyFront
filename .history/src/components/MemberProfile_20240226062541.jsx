import React from 'react';
import Petcard from './Petcard';

export default function MemberProfile() {
  return (
    <div>
      <div className='flex'>
        <div className=' max-w-lg mx-auto'>
          <img
            className='rounded-full w-60 mx-auto'
            src='images/pet.jpg'
            alt='Pet'
          />
        </div>
        <div className=' h-auto -top-24 pb-10 bg-gray-200 rounded-3xl '>
          <section className='text-lg ml-7 pt-32'>
            <div className='flex mb-3.5'>
              <p className='font-bold mr-5'>닉네임 :</p>
              <p>아 시츄키울껄</p>
            </div>
            <div className='flex'>
              <p className='font-bold  mr-9'>소개 :</p>
              <p className='w-5/6'>
                안녕하세요. 테리와 라이어의 주인입니다! 저도 애견인으로써 산책
                걱정이 이만저만이 아닐 때가 많다는 거 공감합니다. 저희 아이들도
                활동량이 장난이 아니라 저도 자연스레 체력이 늘어나더라구요. 그런
                점에서 대형견들 산책을 수월하게 시킬 수 있지 않나 생각합니다.
                많은 관심 부탁드려요~!
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className='py-4  bg-gray-200 '>
        <div className='ml-7'>
          <p className='font-semibold text-xl text-left mb-3 '>등록된 강아지</p>
          <section className='grid grid-cols-2 text-lg font-semibold  '>
            <Petcard />
            <Petcard />
            <Petcard />
          </section>
        </div>
      </div>
    </div>
  );
}
