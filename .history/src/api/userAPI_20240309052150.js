import axiosInstance from './axiosInstance';

// 로그인
export async function login() {
  try {
    const response = await axiosInstance.get(
      '/auth/naver/callback?code=${authCode}'
    );

    return response;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 유저 정보 조회
export async function getUserInfo() {
  try {
    const response = await axiosInstance('/members/me/info');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
