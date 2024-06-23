/* 나의 산책 신청 목록 */
import React, { useEffect, useState } from "react";
import axiosInstance from "api/api";
interface Post {
    writerId : number;
    NickName : string;
    profileImage : string;
    jobPostId : number;
    title : string;
    postImage : string;
    status : string;
    dogId : number;
    kind : string;
    applyId : number;
    applyStatus : string;
}

const AppListPt : React.FC = () => {
    const [ApplyPost, setApplyPost] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosInstance.get('/api/apply/my-apply?page=0&size=10&sort=createdDate,DESC');
                const postData = response.data;
                console.log(postData)
                setApplyPost(postData.content);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }

        };

        fetchPosts();
    }, []);
    
    return (
        <div className="w-full pb-24">
            <ul className="grid gap-12 grid-cols-3">
            <li className="w-[300px] h-[310px] p-[10px] bg-white shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] duration-100 hover:ease-in-out cursor-pointer">
                <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden shadow-inner-lg">
                    <img src='../images/dog.png' className="w-[300px] h-auto"/>
                </div>
                <div className="w-[280px] px-[5px] flex flex-wrap">
                    <p className="p-2 text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">이것은 제목 입니다.</p>
                    <div className="w-[280px] flex justify-between items-center font-bold text-base">
                        <p className="text-gray-400 font-medium">닉네임</p>
                        <p className="text-white bg-amber-400 px-4 py-2 rounded-full shadow-md">소형견</p>
                    </div>
                </div>
            </li>
            <li className="w-[300px] h-[310px] p-[10px] bg-white shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] cursor-pointer">
                <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden">
                    <img src='../images/dog.png' className="w-[300px] h-auto"/>
                </div>
                <div className="w-[280px] px-[5px] flex flex-wrap">
                    <p className="text-xl font-bold">이것은 제목 입니다.</p>
                    <div className="w-[280px] flex justify-between items-center font-bold text-base">
                        <p className="text-gray-400 font-medium">닉네임</p>
                        <p className="text-white bg-amber-400 px-4 py-2 rounded-full shadow-md">소형견</p>
                    </div>
                </div>
            </li>
            <li className="w-[300px] h-[310px] p-[10px] bg-white shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] cursor-pointer">
                <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden">
                    <img src='../images/dog.png' className="w-[300px] h-auto"/>
                </div>
                <div className="w-[280px] px-[5px] flex flex-wrap">
                    <p className="text-xl font-bold">이것은 제목 입니다.</p>
                    <div className="w-[280px] flex justify-between items-center font-bold text-base">
                        <p className="text-gray-400 font-medium">닉네임</p>
                        <p className="text-white bg-amber-400 px-4 py-2 rounded-full shadow-md">소형견</p>
                    </div>
                </div>
            </li>
            <li className="w-[300px] h-[310px] p-[10px] bg-white shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] cursor-pointer">
                <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden">
                    <img src='../images/dog.png' className="w-[300px] h-auto"/>
                </div>
                <div className="w-[280px] px-[5px] flex flex-wrap">
                    <p className="text-xl font-bold">이것은 제목 입니다.</p>
                    <div className="w-[280px] flex justify-between items-center font-bold text-base">
                        <p className="text-gray-400 font-medium">닉네임</p>
                        <p className="text-white bg-amber-400 px-4 py-2 rounded-full shadow-md">소형견</p>
                    </div>
                </div>
            </li>
            {
                ApplyPost.map(post => 
                    <li key={post.writerId} className="w-[300px] h-[310px] p-[10px] bg-white shadow-lg rounded-2xl flex flex-wrap hover:scale-[1.02] duration-100 hover:ease-in-out cursor-pointer">
                <div className="w-[280px] h-[180px] rounded-2xl flex justify-center items-center overflow-hidden">
                    <img src='../images/dog.png' className="w-[300px] h-auto"/>
                </div>
                <div className="w-[280px] px-[5px] flex flex-wrap">
                    <p className="text-xl font-bold">{post.title}</p>
                    <div className="w-[280px] flex justify-between items-center font-bold text-base">
                        <p className="text-gray-400 font-medium">{post.NickName}</p>
                        {post.kind === 
                        '대형견' ? <p className="text-white bg-sky-400 px-4 py-2 rounded-full shadow-md">대형견</p>
                        : (
                          post.kind === '중형견' ? <p className="text-white bg-lime-500 px-4 py-2 rounded-full shadow-md">중형견</p>
                          : <p className="text-white bg-amber-400 px-4 py-2 rounded-full shadow-md">소형견</p>
                        )}
                    </div>
                </div>
            </li>
                )
            }
        </ul>
        </div>
        
    )
}

export default AppListPt;