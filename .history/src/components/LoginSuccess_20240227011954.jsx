// Callback.js
import React, { useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNaverCallback = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get('code');
      const state = queryParams.get('state');

      try {
        const response = await fetch('http://localhost:5000/naver-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code, state }),
        });

        const data = await response.json();

        if (response.ok) {
          navigate('/login-success');
        } else {
          console.error('Server error:', data.error);
          // 에러 처리 로직 추가
        }
      } catch (error) {
        console.error('Fetch error:', error);
        // 에러 처리 로직 추가
      }
    };

    handleNaverCallback();
  }, [navigate]);

  return (
    <div>
      <FaSpinner className='loading-spinner' />
    </div>
  );
};

export default Callback;
