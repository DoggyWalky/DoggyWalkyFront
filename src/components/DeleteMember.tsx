/* 회원 탈퇴 */
import axiosInstance from 'api/api';
import React, { useState } from 'react';

const DeleteMember:React.FC = () => {

async function handleClick () {
        const userConfirmed = window.confirm('정말로 탈퇴 하시겠습니까?');
        if (userConfirmed) {
          // "예" 클릭 했을 때
          console.log("User confirmed");
          const deleteRequest = await axiosInstance.delete(`/api/members`);
        } else {
          // "아니오" 클릭 했을 때
          console.log("User cancelled");
        }
      };
 return (
    <div>
        <button onClick={handleClick}>탈퇴하기</button>
    </div>
 )
}

export default DeleteMember;