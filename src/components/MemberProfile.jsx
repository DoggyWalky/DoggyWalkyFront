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
    <div>
      <div className='ml-auto'>
        <Link to='/ModifyProfile' className='text-lg'>
          <img // 이미지 클릭 시 /ModifyProfile 로 이동
            src='../images/modify.png'
            alt='modify'
            className='w-10 ml-auto mr-6'
          />
        </Link>
      </div>
      <div className='w-4/5 min-h-[540px] max-h-[960px] mx-auto flex flex-wrap justify-center content-between py-8 px-12 bg-white'>
        <div className='w-[240px] h-[240px] rounded-full overflow-hidden flex justify-center content-center shadow-inner'>
          <img
            className='w-full h-auto'
            src='images/pet.jpg'
            alt='Pet'
          />
        </div>
          <p className='w-full text-center text-2xl font-bold'>시츄키울껄</p>
          <p className='w-full text-center text-lg font-normal line-clamp-2'>
            안녕하세요. 테리와 라이어의 주인입니다! 저도 애견인으로써 산책
            걱정이 이만저만이 아닐 때가 많다는 거 공감합니다. 저희 아이들도
            활동량이 장난이 아니라 저도 자연스레 체력이 늘어나더라구요. 그런
            점에서 대형견들 산책을 수월하게 시킬 수 있지 않나 생각합니다. 많은
            관심 부탁드려요~!
          </p>
        <div className='flex mx-auto text-lg'>
          <button
            className='w-[160px] h-[60px] mx-4 rounded text-center font-semibold border-2 border-brand text-brand shadow-sm hover:scale-[1.02]'
            onClick={() => scrollToSection('section1')} //요소 클릭 시 section1로 이동
          >
            등록된 강아지
          </button>
          <button
            className='w-[160px] h-[60px] mx-4 rounded bg-brand text-center font-bold text-white shadow-sm hover:scale-[1.02]'
            onClick={() => scrollToSection('section2')} //요소 클릭 시 section2로 이동
          >
            후기
          </button>
      </div>
    </div>
      <div
        id='section1'
        className='py-24 px-4 bg-blue  mx-auto'
      >
        <div>
          <p className='text-white font-bold text-3xl text-center mb-24'>등록된 강아지</p>
          <div className='bg-white p-10'>
            <Link to='/AddPet' className='text-lg'>
            <img //이미지 클릭 시 /AddPet 로 이동
              src='../images/add.png'
              alt='add'
              className='w-10 mx-auto mb-3'
            />
            </Link>
            <div class='snap-x ... flex p-10 overflow-x-auto'>
              <div class='snap-center ...'>{<Petcard />}</div>
              <div class='snap-center ...'>{<Petcard />}</div>
              <div class='snap-center ...'>{<Petcard />}</div>
              <div class='snap-center ...'>{<Petcard />}</div>
              <div class='snap-center ...'>{<Petcard />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
