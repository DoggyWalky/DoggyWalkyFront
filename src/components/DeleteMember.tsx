/* 회원 탈퇴 */
import axiosInstance from 'api/api';
import React, { useState } from 'react';

const DeleteMember:React.FC = () => {
    const [deleteID, setDeleteId] = useState();
    const [memberId, setMemberId] = useState();
    // const fetchPosts = async () => {
    //   try {
    //     const response = await axiosInstance(`http://localhost:8080/api/members`);
    //   } catch (error) {
    //     console.error("Error fetching posts:", error);
    //   }

    // }  
  // 로컬스토리지에서 토큰 가져오기
function getTokenFromLocalStorage(): string | null {
  return localStorage.getItem('jwtToken'); // 'jwtToken'은 저장된 토큰의 키입니다.
}

// 회원 개인정보를 요청하는 함수
async function fetchMemberProfile(token: string): Promise<string | null> {
  try {
    const response = await axiosInstance.get('/api/members/profile');

    setMemberId(response.data.memberId);
    if (response.data.memberId) {
      return response.data.memberId;
    } else {
      console.error("memberId not found in response data");
      return null;
    }
  } catch (error) {
    console.error("Error fetching member profile:", error);
    return null;
  }
}
  async function handleClick () {
        const userConfirmed = window.confirm('정말로 탈퇴 하시겠습니까?');
        if (userConfirmed) {
          // "예" 클릭 했을 때
          console.log("User confirmed");
          const deleteRequest = await axiosInstance.delete(`http://localhost:8080/api/members/memberId=${memberId}`);
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