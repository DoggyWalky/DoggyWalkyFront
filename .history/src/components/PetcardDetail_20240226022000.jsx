import React from 'react';

export default function PetcardDetail() {
  return (
    <div className='p-4 mx-auto max-w-xl'>
      <div className=' '>
        <div className=' text-lg  items-center justify-center'>
          <img
            className='rounded-xl w-64 h-64 mb-3 mx-auto '
            src='images/pet.jpg'
            alt='Pet'
          />
          <div className='bg-white rounded-lg max-w-lg'>
            <div className='flex'>
              <p className='px-4'>이름 :</p>
              <p>테리</p>
            </div>
            <div className='flex'>
              <p className='px-4'>이름 :</p>
              <p>테리</p>
            </div>
            <div className='flex'>
              <p className='px-4'>분류 :</p>
              <p>대형견</p>
            </div>
            <div className='flex'>
              <p className='px-4'>몸무게 :</p>
              <p>45KG</p>
            </div>
            <div className='flex'>
              <p className='px-4'>소개 :</p>
              <p className=''>
                한시간 정도 산책 시켜줘야 합니다. 사람의 우측에 서서 산책하는
                것을 좋아합니다. 나이는 6살입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
