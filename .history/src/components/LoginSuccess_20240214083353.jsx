import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../assets/Spinner1.gif';

const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인이 성공하면 다음 경로로 이동하는 로직
    navigate('/main');
  }, [navigate]);

  return (
    <Wrap>
      {/* 로그인 중임을 표시할 수 있는 로딩 중 화면 */}
      <img src={Spinner} alt='로딩' width='10%' />
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`;

export default LoginSuccess;
