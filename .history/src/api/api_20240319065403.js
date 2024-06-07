// import axios from 'axios';

// const BASEURL = 'http://localhost:8080';

// //---------------회원 관련--------------
// //회원정보 조회
// export async function searchMember() {
//   try {
//     const response = await axiosInstance('/members');
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //회원정보 프로필 수정
// export async function modifyProfile() {
//   try {
//     const response = await axiosInstance.patch(`/members/profile`, {
//       rate: '',
//       imgUrl: '',
//       content: '',
//     });
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //회원 탈퇴
// export async function deleteMember() {
//   try {
//     const response = await axiosInstance.delete(`/members`);

//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //신고하기
// export async function Report() {
//   try {
//     const response = await axiosInstance.post(`/reports`, {
//       targetId : '',
//       reportType : '',
//       reportContent : '',
//     });

//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //신고조회
// export async function searchReport() {
//   try {
//     const response = await axiosInstance('/reports', {
//       reporterId : '',
//       targetId : '',
//       reportType : '',
//       reportContent : '',
//       startDate: '',
//       endDate: '',
//     });
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }

// //--------------강아지관련--------------
// //강아지 조회
// export async function searchPet(dogId) {
//   try {
//     const response = await axiosInstance(`/dogs/${dogId}`);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //유저의 강아지 목록 조회
// export async function searchUserPet(ownerId) {
//   try {
//     const response = await axiosInstance(`/owners/${ownerId}/dogs`);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //강아지 등록
// export async function registerPet() {
//   try {
//     const response = await axiosInstance.post(`/owners/dogs`, {
//       Kind : '',
//       Weight : '',
//       Description : '',
//       Name : '',
//     });

//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //강아지 수정
// export async function modifyPet(dogId) {
//   try {
//     const response = await axiosInstance.patch(`/dogs/${dogId}`, {
//       Kind : '',
//       Weight : '',
//       Description : '',
//       Name : '',
//     });
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //강아지 삭제
// export async function deletePet(dogId) {
//   try {
//     const response = await axiosInstance.delete(`/dogs/${dogId}`);

//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }

// //--------------게시글 관련--------------
// //게시글 상세 조회
// export async function searchPostDetail(boardId) {
//   try {
//     const response = await axiosInstance(`/api/job-post/${boardId}`);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //게시글 조회
// export async function searchPost(searchCondition) {
//   try {
//     const response = await axiosInstance(`/api/job-post/${searchCondition}`);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //게시글 등록
// export async function registerPost() {
//   try {
//     const response = await axiosInstance.post(`/owners/dogs`, {
//       title: "",
//       content: ".",
//       status: "WAITING",
//       startPoint: "",
//       endPoint: "",
//       dogId: 1,
//     },{
//       images: ["imageUrl","imageUrl2"]
//     } );
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //게시글 수정
// export async function modifyPost(boardId) {
//   try {
//     const response = await axiosInstance.patch(`/job-post/${boardId}`, {
//       Title : '',
//       Description : '',
//       Status : '',
//       StartPoint : '',
//       EndPoint : '',
//       DogKind : '',
//     });
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //게시글 삭제
// export async function deletePost(boardId) {
//   try {
//     const response = await axiosInstance.delete(`/api/job-post/${boardId}`);

//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //게시글 찜
// export async function bookmark(boardId) {
//   try {
//     const response = await axiosInstance.post(`/api/job-post/${boardId}/like`);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }

// //--------------후기 관련--------------
// //후기 조회
// export async function searchReview(searchCondition) {
//   try {
//     const response = await axiosInstance(`/reviews/${searchCondition}`);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //후기 등록(평점 포함)
// export async function writeReview() {
//   try {
//     const response = await axiosInstance.post(`/reviews`, {
//       Description : '',
//       Score : '',
//       DogKind : '',
//     } );
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }

// //--------------파일 관련--------------
// //파일 리스트 조회
// export async function searchFile() {
//   try {
//     const response = await axiosInstance('/files');
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //파일 등록
// export async function registerFile() {
//   try {
//     const response = await axiosInstance.post(`/files`, {
//       files : '',
//     });
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }

// //--------------채팅 관련--------------
// //채팅목록 조회
// export async function searchChatRoom() {
//   try {
//     const response = await axiosInstance('/chatRoom');
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //채팅 상세 조회
// export async function searchChatDetail(chatroomId) {
//   try {
//     const response = await axiosInstance('/chats/${chatroomId}');
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //채팅목록 삭제(채팅방 나가기)
// export async function deleteChat(chatroomId) {
//   try {
//     const response = await axiosInstance.delete(`/chats/${chatroomId}`);

//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }

// //-----------GPS좌표 관련--------------
// //gps좌표 조회
// export async function searchGps(boardId) {
//   try {
//     const response = await axiosInstance(`/gps/${boardId}`);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }
// //gps좌표 등록
// export async function registerGps(boardId) {
//   try {
//     const response = await axiosInstance.post(`/gps/${boardId}`,  {
//       Latitude:'',
//       Longitude:'',
//       Time:'',
//     },
//     {
//       Latitude:'',
//       Longitude:'',
//       Time:'Date,'
//     } );
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// }

// //------------------------------------------------------------------

// export const axiosInstance = axios.create({
//   baseURL: BASEURL,
//   headers: {
//     'Content-Type': 'application/json',
//     accept: 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//   },
//   withCredentials: true,
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem('accessToken');
//     const refreshToken = localStorage.getItem('refreshToken');
//     if (accessToken) {
//       config.headers['Authorization'] = accessToken;
//     }

//     if (refreshToken) {
//       config.headers['Refresh'] = refreshToken;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   async (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = await error.config;
//     const accessToken = localStorage.getItem('accessToken');
//     console.log('interceptor 지나감');

//     // 네트워크 에러 잡아야함
//     // 서버와의 연결이 끊겼을 시 error.code는 ERR_NETWORK를 내뱉는다.
//     console.log(error);
//     console.log(error.code);

//     if (error.code === 'ERR_NETWORK') {
//       console.log('네트워크 에러 발생');
//       throw error;
//     } else if (error.response.headers && error.response.headers.authorization) {
//       // 헤더에 새 토큰이 있을 경우 - 토큰 변경 및 기존 요청을 재요청
//       const newToken = error.response.headers.authorization;
//       if (newToken) {
//         originalRequest.headers.authorization = newToken;
//         localStorage.setItem('accessToken', newToken);
//         return axiosInstance(originalRequest);
//       }
//       //리프레시 토큰 만료시 - 로그아웃 처리
//       else if (error.response.status === 401 && accessToken) {
//         localStorage.removeItem('accessToken');
//       }
//     }

//     console.log('axiosInstance interceptor response error :');
//     console.log(error);
//     console.log('Promise reject 객체');
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
