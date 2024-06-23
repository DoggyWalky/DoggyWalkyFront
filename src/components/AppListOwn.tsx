/* 산책 신청 목록 */
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

  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const response = await axiosInstance.get('/api/job-post/my-post?page=2&sort=createdDate,DESC');
              console.log(response);
              setMyPost(response.data)
          } catch (error) {
              console.error("Error fetching posts:", error);
          }
      };
      fetchPosts();
  }, []);

  const handlePostClick = async () => {
    try {
        const response = await axiosInstance.get(`/api/apply/job-post/402?page=0&size=10&sort=createdDate%2CDESC`);
    } catch (error) {
    }
  }  
    return (
        <div className="w-full h-screen flex">
            <div className="w-1/2 pr-2 pb-24">
                <h2 className="font-bold text-2xl pb-8">작성 게시글 목록</h2>
                <div className="h-full p-4 shadow-inner rounded-lg bg-slate-100">
                    <ul className="h-full pr-4 overflow-y-scroll grid grid-cols-1 gap-y-2">
                        <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                        <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                        <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                        <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                        <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                        <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                        <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                        <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                        <MyPost myPost={myPost} handlePostClick={handlePostClick}/>
                    </ul>
                </div>
                
            </div>
            <div className="w-1/2 pl-2">
                <h2 className="font-bold text-2xl pb-8">신청 목록 현황</h2>
                <ul className="bg-slate-100 shadow-inner rounded-lg grid gap-y-1">
                <ApplyPost Token={myApp} Total={postLength} />
                </ul>
            </div>
        </div>
    )
}

export default AppListOwn;