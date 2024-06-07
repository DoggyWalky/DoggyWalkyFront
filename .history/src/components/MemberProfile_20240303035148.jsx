import React from 'react';
import Petcard from './Petcard';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function MemberProfile() {
  return (
    <div className='w-full '>
      <div className='ml-auto'>
        <Link to='/ModifyProfile' className='text-lg'>
          <img
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
            {/* nickname */}
            <p className='font-bold'>님</p>
          </div>
          <p>
            안녕하세요. 테리와 라이어의 주인입니다! 저도 애견인으로써 산책
            걱정이 이만저만이 아닐 때가 많다는 거 공감합니다. 저희 아이들도
            활동량이 장난이 아니라 저도 자연스레 체력이 늘어나더라구요. 그런
            점에서 대형견들 산책을 수월하게 시킬 수 있지 않나 생각합니다. 많은
            관심 부탁드려요~!
          </p>
          {/* description */}
        </div>
      </div>

      <div className=' relative flex -top-24   z-10 w-2/5 h-12 items-center mx-auto  shadow-2xl text-lg bg-white rounded-lg'>
        <button
          className=' w-1/2 text-center  font-bold  hover:text-brand hover:scale-150'
          onClick={() => scrollToSection('section1')}
        >
          등록된 강아지
        </button>
        <div className='  divider  divider-horizontal h-10 pt-2 '></div>
        <button
          className=' w-1/2  text-center font-bold  hover:text-brand hover:scale-150'
          onClick={() => scrollToSection('section2')}
        >
          후기
        </button>
      </div>

      <div
        id='section1'
        className='pt-28 pb-40 w-screen bg-slate-100  mx-auto -translate-x-80'
      >
        <div className=' '>
          <p className='font-bold text-4xl text-center mb-24 '>등록된 강아지</p>
          <Link to='/AddDog' className='text-lg'>
            <img src='../images/add.png' alt='add' className='w-7  mb-3' />
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
//
// api에 memberId /nickname / description 받아와서
// {
//   "memberId": 24,
//   "nickName": "김강욱",
//   "description": "기본 자기 소개글을 작성해주시기 바랍니다.",
//   "createdAt": "2024-02-22 20:33:10",
//   "updatedAt": "2024-02-22 20:33:10",
//   "profileImage": "https://doggywalky-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg"
// }
