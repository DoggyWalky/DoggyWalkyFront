import React from 'react';
import Petcard from './Petcard';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function MemberProfile() {
  return (
    // <div>
    //   <div className=' p-4 pt-3 mb-16 items-center  bg-gray-200 rounded-3xl'>
    //     <div className='mx-auto '>
    //       <img
    //         className='rounded-full w-64 mx-auto '
    //         src='images/pet.jpg'
    //         alt='Pet'
    //       />
    //     </div>
    //     <div className='  text-center   text-lg  p-4 mb-7'>
    //       <div className='flex items-baseline justify-center'>
    //         <p className='text-2xl font-extrabold mb-5'>아 시츄키울껄</p>
    //         <p className='font-bold'>님</p>
    //       </div>
    //       <p>
    //         안녕하세요. 테리와 라이어의 주인입니다! 저도 애견인으로써 산책
    //         걱정이 이만저만이 아닐 때가 많다는 거 공감합니다. 저희 아이들도
    //         활동량이 장난이 아니라 저도 자연스레 체력이 늘어나더라구요. 그런
    //         점에서 대형견들 산책을 수월하게 시킬 수 있지 않나 생각합니다. 많은
    //         관심 부탁드려요~!
    //       </p>
    //     </div>
    //   </div>
    //   <div className=' relative flex -top-24 z-10 w-2/5 h-12 items-center mx-auto shadow-2xl text-lg bg-white rounded-lg'>
    //     <div
    //       href='#divet'
    //       className=' w-1/2 text-center border-r-2 border-gray-300'
    //     >
    //       등록된 강아지
    //     </div>
    //     <div href='#review ' className=' w-1/2  text-center'>
    //       후기
    //     </div>
    //   </div>

    //   <div className='py-4  mb-6'>
    //     <div className='ml-7'>
    //       <p className='font-semibold text-xl mb-8 text-left'>등록된 강아지</p>
    //       <div class='snap-x ... flex mb-10 overflow-x-auto'>
    //         <div class='snap-center ...'>{<Petcard />}</div>
    //         <div class='snap-center ...'>{<Petcard />}</div>
    //         <div class='snap-center ...'>{<Petcard />}</div>
    //         <div class='snap-center ...'>{<Petcard />}</div>
    //         <div class='snap-center ...'>{<Petcard />}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      {/* 클릭 이벤트가 발생하면 scrollToSection 함수 호출 */}
      <button onClick={() => scrollToSection('section1')}>Go to Section 1</button>
      <button onClick={() => scrollToSection('section2')}>Go to Section 2</button>

      {/* 스크롤될 섹션들 */}
      <div id="section1" style={{ height: '1000px', backgroundColor: 'lightblue' }}>
        Section 1
      </div>
      <div id="section2" style={{ height: '1000px', backgroundColor: 'lightgreen' }}>
        Section 2
      </div>
    </div>
  );
}

export default MemberProfile;
