import React from 'react';
import Petcard from './Petcard';

export default function MemberProfile() {
  return (
    <div>
      <div className=' p-4 pt-9 items-center  bg-gray-200 rounded-3xl'>
        <div className='mx-auto '>
          <img
            className='rounded-full w-64 mx-auto '
            src='images/pet.jpg'
            alt='Pet'
          />
        </div>
        <div className='  text-center   text-lg  p-4'>
          <p className='text-2xl font-extrabold mb-9'>아 시츄키울껄</p>
          <p className='mb-5'>
            안녕하세요. 테리와 라이어의 주인입니다! 저도 애견인으로써 산책
            걱정이 이만저만이 아닐 때가 많다는 거 공감합니다. 저희 아이들도
            활동량이 장난이 아니라 저도 자연스레 체력이 늘어나더라구요. 그런
            점에서 대형견들 산책을 수월하게 시킬 수 있지 않나 생각합니다. 많은
            관심 부탁드려요~!
          </p>
        </div>
      </div>

      <div className='py-4  mb-6'>
        <div className='ml-7'>
          <p className='font-semibold text-xl mb-8 text-center'>
            등록된 강아지
          </p>
          <div class='snap-x ... flex mb-10 overflow-x-auto'>
            <div class='snap-center ...'>{<Petcard />}</div>
            <div class='snap-center ...'>{<Petcard />}</div>
            <div class='snap-center ...'>{<Petcard />}</div>
            <div class='snap-center ...'>{<Petcard />}</div>
            <div class='snap-center ...'>{<Petcard />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
