import axios from 'axios';

const BASEURL = 'http://localhost:8080';

//----회원 관련---
//회원정보 조회
export async function login() {
  try {
    const response = await axiosInstance('/members');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//회원정보 프로필 수정
export async function changeReview() {
  try {
    const response = await axiosInstance.patch(`/members/profile`, {
      rate: '',
      imgUrl: '',
      content: '',
    });
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//회원 탈퇴
export async function deleteReview() {
  try {
    const response = await axiosInstance.delete(`/members`);

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//신고하기
export async function writeReview() {
  try {
    const response = await axiosInstance.post(`/reports`, {
      targetId : '',
      reportType : '',
      reportContent : '',
    });

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//신고조회
export async function login() {
  try {
    const response = await axiosInstance('/reports', {
      reporterId : '',
      targetId : '',
      reportType : '',
      reportContent : '',
      startDate: '',
      endDate: '',
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

//---강아지관련---
//강아지 조회
export async function login(dog-id) {
  try {
    const response = await axiosInstance('/dogs/${dog-id}');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//유저의 강아지 목록 조회
export async function login(owner-id) {
  try {
    const response = await axiosInstance('/owners/${owner-id}/dogs');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//강아지 등록
export async function writeReview() {
  try {
    const response = await axiosInstance.post(`/owners/dogs`, {
      Kind : '',
      Weight : '',
      Description : '',
      Name : '',
    });

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//강아지 수정
export async function changeReview(dog-id) {
  try {
    const response = await axiosInstance.patch(`/dogs/${dog-id}`, {
      Kind : '',
      Weight : '',
      Description : '',
      Name : '',
    });
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//강아지 삭제
export async function deleteReview(dog-id) {
  try {
    const response = await axiosInstance.delete(`/dogs/${dog-id}`);

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

//---게시글 관련---
//게시글 상세 조회
export async function login(board-id) {
  try {
    const response = await axiosInstance('/api/job-post/${board-id}');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//게시글 조회
export async function login(search-condition) {
  try {
    const response = await axiosInstance('/api/job-post/${search-condition}');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//게시글 등록
export async function writeReview() {
  try {
    const response = await axiosInstance.post(`/owners/dogs`, {
      title: "",
      content: ".",
      status: "WAITING",
      startPoint: "",
      endPoint: "",
      dogId: 1,
    },{
      images: ["imageUrl","imageUrl2"]
    } ); 
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//게시글 수정
export async function changeReview(board-id) {
  try {
    const response = await axiosInstance.patch(`/job-post/${board-id}`, {
      Title : '',
      Description : '',
      Status : '',
      StartPoint : '',
      EndPoint : '',
      DogKind : '',
    });
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//게시글 삭제
export async function deleteReview(board-id) {
  try {
    const response = await axiosInstance.delete(`/api/job-post/${board-id}`);

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//게시글 찜
export async function campLike(board-id) {
  try {
    const response = await axiosInstance.post(`/api/job-post/${board-id}/like`);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

//---후기 관련---
//후기 조회
export async function login(search-condition) {
  try {
    const response = await axiosInstance('/reviews/${search-condition}');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//후기 등록(평점 포함)
export async function writeReview() {
  try {
    const response = await axiosInstance.post(`/reviews`, {
      Description : '',
      Score : '',
      DogKind : '',
    } ); 
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

//---파일 관련---
//파일 리스트 조회
export async function login() {
  try {
    const response = await axiosInstance('/files');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//파일 등록
export async function campLike() {
  try {
    const response = await axiosInstance.post(`/files`, {
      files : '',
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

//---채팅 관련---
//채팅목록 조회
export async function login() {
  try {
    const response = await axiosInstance('/chatRoom');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//채팅 상세 조회
export async function login(chatroom-id) {
  try {
    const response = await axiosInstance('/chats/${chatroom-id}');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//채팅목록 삭제(채팅방 나가기)

//---GPS좌표 관련---
//gps좌표 조회
export async function login(board-id) {
  try {
    const response = await axiosInstance('/gps/${board-id}');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
//gps좌표 등록
export async function writeReview(board-id) {
  try {
    const response = await axiosInstance.post(`/gps/${board-id}`,  {
      Latitude:'',
      Longitude:'',
      Time:'',
    },
    {
      Latitude:'',
      Longitude:'',
      Time:'Date,'
    } ); 
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

//------------------------------------------------------------------

export const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }

    if (refreshToken) {
      config.headers['Refresh'] = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = await error.config;
    const accessToken = localStorage.getItem('accessToken');
    console.log('interceptor 지나감');

    // 네트워크 에러 잡아야함
    // 서버와의 연결이 끊겼을 시 error.code는 ERR_NETWORK를 내뱉는다.
    console.log(error);
    console.log(error.code);

    if (error.code === 'ERR_NETWORK') {
      console.log('네트워크 에러 발생');
      throw error;
    } else if (error.response.headers && error.response.headers.authorization) {
      // 헤더에 새 토큰이 있을 경우 - 토큰 변경 및 기존 요청을 재요청
      const newToken = error.response.headers.authorization;
      if (newToken) {
        originalRequest.headers.authorization = newToken;
        localStorage.setItem('accessToken', newToken);
        return axiosInstance(originalRequest);
      }
      //리프레시 토큰 만료시 - 로그아웃 처리
      else if (error.response.status === 401 && accessToken) {
        localStorage.removeItem('accessToken');
      }
    }

    console.log('axiosInstance interceptor response error :');
    console.log(error);
    console.log('Promise reject 객체');
    return Promise.reject(error);
  }
);

export default axiosInstance;
