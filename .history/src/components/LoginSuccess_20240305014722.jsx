// Callback.js
import React, { useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNaverCallback = async () => {
      // 네이버 콜백 로직을 서버로 전송
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get('code');
      const state = queryParams.get('state');

      // 서버로 code와 state를 전송
      try {
        const response = await fetch('http://localhost:5000/naver-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code, state }),
        });

        const data = await response.json();

        if (data.success) {
          // 로그인이 성공하면 다음 경로로 이동
          navigate('/login-success');
        } else {
          console.error('Server error:', data.error);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    handleNaverCallback();
  }, [navigate]);

  return (
    <div>
      {/* 로그인 중임을 표시할 수 있는 로딩 중 화면 */}
      <FaSpinner className='loading-spinner' />
    </div>
  );
};

export default Callback;
