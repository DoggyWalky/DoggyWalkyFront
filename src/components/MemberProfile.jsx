import React from 'react';
import Petcard from './Petcard';
import { Link } from 'react-router-dom';
import * as api from '../api/api';

/*
회원정보 조회
api.searchMember

*/

/*
  강아지 조회
  api.searchPet

  {
    "DogId" : string,
    "Kind" : string,
    "Weight" : number,
    "Description" : string,
    "Name" : string,
    "InsertDate" : date
  }
 */

/*
후기조회
api.searchReview

[
  {
   "memberId" : string,
   "Description" : string,
   "Score" : number,
   "DogKind" : string
  },
  {
   "memberId" : string,
   "Description" : string,
   "Score" : number,
   "DogKind" : string
  }
]
 */

const scrollToSection = (id) => {
  // scrollToSection 함수 정의
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' }); // 요소가 화면 안으로 스무스하게 스크롤되도록 함
  }
};

export default function MemberProfile() {
  return (
    <div className='w-full'>
      <div className='ml-auto'>
        <Link to='/ModifyProfile' className='text-lg'>
          <img // 이미지 클릭 시 /ModifyProfile 로 이동
            src='../images/modify.png'
            alt='modify'
            className='w-7 ml-auto mr-7 mb-3'
          />
        </Link>
      </div>
      <div className=' p-4 pt-3 mb-16 items-center  bg-slate-200 shadow-2xl  rounded-3xl'>
        <div className='mx-auto '>
          <img
            className='rounded-full w-64 mx-auto '
            src='images/pet.jpg'
            alt='Pet'
          />
        </div>
        <div className='  text-center   text-lg  p-4 mb-7'>
          <div className='flex items-baseline justify-center'>
            <p className='text-2xl font-extrabold mb-5'>아 시츄키울껄</p>
            <p className='font-bold'>님</p>
          </div>
          <p>
            안녕하세요. 테리와 라이어의 주인입니다! 저도 애견인으로써 산책
            걱정이 이만저만이 아닐 때가 많다는 거 공감합니다. 저희 아이들도
            활동량이 장난이 아니라 저도 자연스레 체력이 늘어나더라구요. 그런
            점에서 대형견들 산책을 수월하게 시킬 수 있지 않나 생각합니다. 많은
            관심 부탁드려요~!
          </p>
        </div>
      </div>

      <div className=' relative flex -top-24   z-10 w-2/5 h-12 items-center mx-auto  shadow-2xl text-lg bg-white rounded-lg'>
        <button
          className=' w-1/2 text-center  font-bold  hover:text-brand hover:scale-150'
          onClick={() => scrollToSection('section1')} //요소 클릭 시 section1로 이동
        >
          등록된 강아지
        </button>
        <div className='  divider  divider-horizontal h-10 pt-2 '></div>
        <button
          className=' w-1/2  text-center font-bold  hover:text-brand hover:scale-150'
          onClick={() => scrollToSection('section2')} //요소 클릭 시 section2로 이동
        >
          후기
        </button>
      </div>

      <div
        id='section1'
        className='pt-28 pb-40 bg-slate-100  mx-auto'
      >
        <div className=' '>
          <p className='font-bold text-4xl text-center mb-24 '>등록된 강아지</p>
          <Link to='/AddPet' className='text-lg'>
            <img //이미지 클릭 시 /AddPet 로 이동
              src='../images/add.png'
              alt='add'
              className='w-7 mx-auto mb-3'
            />
          </Link>
          <div class='snap-x ... flex mb-10 p-10 mx-80  bg-white shadow-2xl rounded-2xl overflow-x-auto'>
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
