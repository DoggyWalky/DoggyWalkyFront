import React from 'react';
import { TbCategory2 } from 'react-icons/tb';
import Button from '../components/ui/Button';

export default function PostDetail() {
  return (
    <>
      <div className='flex items-center mt-28 px-4 py-5'>
        <TbCategory2 />
        <p>분류 : 소형견</p>
      </div>
      <hr />
      <section className='flex flex-col md:flex-row p-4'>
        <div className='basis-8/12'>
          <img className=' w-full px-4' src='/images/testPost.jpg' alt='test' />
        </div>
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2>뽀삐의 친구를 구합니다!</h2>
          <h3>유가영</h3>
          <span>강아지 분류 : </span>
          <p>소형견</p>
          <div className=' h-40 snap-y ... flex mb-10 overflow-y-auto'>
            <p className='snap-center ...'>
              뽀삐는 활발하고 애정 넘치는 강아지로, 우리 가족에게 큰 기쁨을 주고
              있는 존재입니다. 작고 귀여운 외모와 함께 능란하고 민첩한 몸짓으로
              우리를 항상 웃음 짓게 만듭니다. 그의 유쾌한 에너지는 집 안을
              활기차게 만들어 주며, 산책이나 놀이 시간에는 끊임없는 호기심으로
              주변을 탐험합니다. 뽀삐는 사교성이 풍부하고 다른 강아지나
              사람들과의 교감을 즐깁니다. 특히 어린 아이들과 잘 어울려, 가족
              모두의 애정을 받고 있습니다. 마음이 따뜻하고 충성스러운 성품으로,
              우리의 힘든 순간에도 늘 곁에서 지지해 주는 친구입니다. 뽀삐는
              놀이를 즐기는 것 외에도, 새로운 트릭을 배우는 것을 즐겨하며,
              훈련에 대한 호기심이 많습니다. 그의 똑똑한 두뇌와 학습 능력은 항상
              우리를 놀라게 합니다. 한편, 뽀삐는 건강에도 무척이나 신경
              써주는데, 규칙적인 운동과 맛있는 간식을 통해 항상 활기차게
              생활하고 있습니다. 우리 가족에게는 뽀삐와 함께하는 매 순간이
              특별하고 행복한 경험이 되고 있습니다.
            </p>
          </div>
          <div className='flex w-full gap-3'>
            <Button text={'신청하기'} />
            <Button text={'견주와 대화하기'} />
          </div>
        </div>
      </section>
    </>
  );
}
