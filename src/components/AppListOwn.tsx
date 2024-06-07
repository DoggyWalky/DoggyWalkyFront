import React, { useState, useEffect } from "react";
import axiosInstance from "../api/api";
import axios from "axios";
import * as api from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import MyPost from "./MyPost";
import ApplyPost from "./ApplyPost";
import { useScrollClipPath } from "hooks";
import { Link } from "react-router-dom";

interface Post {
  memberId : string;
  title : string;
  postId : string;
  fileImage : string;
  Statue : string;
  DogKind : string;
  Region : string;
  Writer : string;
  insertDate : number;
}

interface ApplyToken {
  applyId : number;
  jobPostId : number;
  ownerId : number;
  workerId : number;
  workerName : string;
  workerNickName : string;
  workerDescription : string;
  workerProfileImage : string;
  status : string;
  createdAt : string;
  updatedAt : string;
}

interface TotalItem {
    TotalNumber: number;
}


const AppListOwn: React.FC = () => {
  const [myPost, setMyPost] = useState<Post[]>([]);
  const [myApp, setMyApp] = useState<ApplyToken[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [postLength, setPostLength] = useState<TotalItem>({ TotalNumber: 0 });
  const token = localStorage.getItem("accessToken"); // 토큰을 로컬 스토리지에서 가져옴

  useEffect(() => {
      const fetchPosts = async () => {
          if (!token) {
              console.error("No token found");
              return;
          }

          try {
              const response = await axiosInstance.get<Post[]>('http://localhost:8080/api/job-post/my-post');
              const postList = response.data;
              setMyPost(postList)
              console.log(postList);
          } catch (error) {
              console.error("Error fetching posts:", error);
          }

      };

      fetchPosts();
  }, [token]);

  const handlePostClick = async (post: Post) => {
    setSelectedPost(post);

    const jobPostId = post.postId;

    try {
        const response = await axiosInstance<ApplyToken[]>(`http://localhost:8080/apply/jobPost/${jobPostId}`);
        const applyList = response.data;
        setMyApp([...applyList]);
        //setPostLength(applyList.length);
        console.log("Applications for selected post:", response.data);
    } catch (error) {
        console.error("Error fetching applications:", error);
    }
  }  
    return (
        <div className="flex">
            <div className="w-1/2 py-4 pr-4">
                <h2 className="font-bold text-2xl pb-8">작성 게시글 목록</h2>
                <div className="h-4/5 overflow-y-scroll shadow-inner rounded-3xl">
                 
                <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                </div>
            </div>
            <div className="w-1/2 py-4 pr-8 pl-4">
                <h2 className="font-bold text-2xl pb-8">신청 목록 현황</h2>
                <div className="h-4/5 overflow-y-hidden shadow-inner rounded-3xl flex flex-wrap">
                <ApplyPost Token={myApp} Total={postLength} />
                </div>
            </div>
        </div>
    )
}

export default AppListOwn;