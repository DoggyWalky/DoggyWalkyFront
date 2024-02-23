import React from 'react';

export default function MemberProfile() {
  return (
    <div>
      <div className='relative mt-28 z-20 max-w-xs mx-auto'>
        <p className='font-bold text-3xl text-center mb-5'>My Profile</p>
        <img className='rounded-md' src='images/pet.jpg' alt='Pet' />
      </div>
      <div className='relative h-96 -top-40  bg-gray-100 rounded-3xl '>
        <section className='text-lg'>
          <div className='flex mb-3.5'>
            <p className='font-bold mr-3'>닉네임 :</p>
            <p>아 시츄키울껄</p>
          </div>
          <div className='flex'>
            <p className='font-bold w-1/7'>소개 :</p>
            <p className='w-4/5'>
              안녕하세요. 테리와 라이어의 주인입니다! 저도 애견인으로써 산책
              걱정이 이만저만이 아닐 때가 많다는 거 공감합니다. 저희 아이들도
              활동량이 장난이 아니라 저도 자연스레 체력이 늘어나더라구요. 그런
              점에서 대형견들 산책을 수월하게 시킬 수 있지 않나 생각합니다. 많은
              관심 부탁드려요~!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
