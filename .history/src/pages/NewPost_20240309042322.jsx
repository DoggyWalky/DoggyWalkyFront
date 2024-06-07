import React, { useState } from 'react';
import Button from '../components/ui/Button';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import axios from 'axios';

export default function NewPost() {
  const [isChecked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    size: '',
    image: null,
    pay: '',
    content: '',
  });

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      image: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('size', formData.size);
      formDataToSend.append('image', formData.image);
      formDataToSend.append('pay', formData.pay);
      formDataToSend.append('content', formData.content);

      const response = await axios.post('/api/job-post', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('게시물 등록 성공:', response.data);
      // 성공적으로 게시물이 등록된 경우에 대한 처리
    } catch (error) {
      console.error('게시물 등록 오류:', error);
      // 게시물 등록 중 오류가 발생한 경우에 대한 처리
    }
  };

  const animatedItem = useScrollFadeIn('up', 1, 0.2);

  return (
    <>
      <div
        className='relative top-28  font-bold text-xl  text-center '
        {...animatedItem}
      >
        <div className='text-text '>
          강아지의 <span className='text-red-400'>산책 친구</span>를 찾고
          계신가요?
          <br />
          함께 <span className='text-brand'>즐거운 시간</span>을 보낼 친구들이
          기다리고 있어요!
        </div>
      </div>
      <section className='flex w-full h-screen  items-center justify-center '>
        <div className='flex w-3/6 h-4/6  justify-center bg-ExPost  opacity-80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
          <img src='' alt='' />
        </div>
        <div className='h-4/6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-16 px-8 rounded-md'>
          <form
            className='grid px-12 justify-center gap-8'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              name='title'
              placeholder='제목을 입력해주세요.'
              className='input input-bordered w-full max-w-xs'
              value={formData.title}
              onChange={handleChange}
            />
            <div className='flex items-center justify-center'>
              <input
                type='radio'
                name='size'
                className='radio radio-primary'
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className='mr-3 ml-1'>소형견</label>
              <input type='radio' name='size' className='radio radio-primary' />
              <label className='mr-3 ml-1'>중형견</label>
              <input type='radio' name='size' className='radio radio-primary' />
              <label className='mr-3 ml-1'>대형견</label>
            </div>
            <input
              type='file'
              name='image'
              placeholder='강아지 사진을 업로드해주세요.'
              className='file-input file-input-bordered w-full max-w-xs'
              onChange={handleFileChange}
            />
            <input
              type='text'
              name='pay'
              placeholder='알바비를 입력해주세요.'
              className='input input-bordered w-full max-w-xs'
              onChange={handleChange}
            />
            <input
              type='text'
              name='content'
              placeholder='내용을 입력해주세요'
              className='input input-bordered w-full max-w-xs'
              value={formData.content}
              onChange={handleChange}
            />
            <Button text={'등록하기'} />
          </form>
        </div>
      </section>
    </>
  );
}
