import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ApplyPagiNation from "./ApplyPagiNation";

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


interface AppProps {
    Token: ApplyToken[];
    Total: TotalItem;
}


const ApplyPost: React.FC<AppProps> = ({Token, Total}) => {
    const [totalItems, setTotalItems] = useState(Total.TotalNumber);
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page"); 

    // sample
    const itemCountPerPage = 5;
    const pageCount = 10;
    const currentPage = 1;

    useEffect(() => {
        window.scrollTo(0, 0); // 페이지 이동 시 스크롤 위치 맨 위로 초기화
        /* api 호출 및 데이터(totalItems, books) 저장 */
      }, [page]);

    const handleResponse = async (applyId: number, action: 'accept' | 'refuse') => {
        const url = `/apply/{apply-Id}/${action}/${applyId}`;
        try {
            const response = await fetch(url, {
                method: 'POST'
            });
            if (response.ok) {
                alert(`신청이 성공적으로 ${action === 'accept' ? '허락' : '거절'}되었습니다.`);
            } else {
                alert('신청 처리 중 오류가 발생했습니다.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('네트워크 오류가 발생했습니다.');
        }
    };

 return (
    <div>
        {/* {Token.map(post => (
            <>
                <div key={post.jobPostId} className="cursor-pointer flex items-center bg-slate-100 text-base rounded-xl p-4">
                    <img src="../images/profile.jpg" className="w-12 h-12 rounded-full"/>
                    <p className="px-4 text-nowrap text-ellipsis overflow-hidden">{post.workerNickName}</p>
                    <p className="">2024/05/04</p>
                </div>
                <div className="flex p-4">
                    <button className="w-16 h-12 mr-1 text-base bg-emerald-400 rounded-md  from-transparent to-emerald-400 hover:bg-emerald-300 hover:shadow-md hover:shadow-gray-300" onClick={() => handleResponse(post.applyId, 'accept')}>승인</button>
                    <button className="w-16 h-12 ml-1 text-base bg-red-500 rounded-md  from-transparent to-red-500 hover:bg-red-400 hover:shadow-lg hover:shadow-gray-200" onClick={() => handleResponse(post.applyId, 'refuse')}>거절</button>
                </div>
            </>
        ))} */}
        <li className="flex justify-between">
            <div className="cursor-pointer flex items-center text-base rounded-xl p-4">
                <img src="../images/profile.jpg" className="w-12 h-12 rounded-full"/>
                <p className="px-4 text-nowrap text-ellipsis overflow-hidden">닉네임</p>
                <p className="">2024/05/04</p>
            </div>
            <div className="flex p-4">
                <button className="w-16 h-12 mr-1 text-base bg-emerald-400 rounded-md  from-transparent to-emerald-400 hover:bg-emerald-300 hover:shadow-md hover:shadow-gray-300">승인</button>
                <button className="w-16 h-12 ml-1 text-base bg-red-500 rounded-md  from-transparent to-red-500 hover:bg-red-400 hover:shadow-lg hover:shadow-gray-200">거절</button>
            </div>
        </li>
        <li className="flex justify-between">
            <div className="cursor-pointer flex items-center text-base rounded-xl p-4">
                <img src="../images/profile.jpg" className="w-12 h-12 rounded-full"/>
                <p className="px-4 text-nowrap text-ellipsis overflow-hidden">닉네임</p>
                <p className="">2024/05/04</p>
            </div>
            <div className="flex p-4">
                <button className="w-16 h-12 mr-1 text-base bg-emerald-400 rounded-md  from-transparent to-emerald-400 hover:bg-emerald-300 hover:shadow-md hover:shadow-gray-300">승인</button>
                <button className="w-16 h-12 ml-1 text-base bg-red-500 rounded-md  from-transparent to-red-500 hover:bg-red-400 hover:shadow-lg hover:shadow-gray-200">거절</button>
            </div>
        </li>
        <li className="flex justify-between">
            <div className="cursor-pointer flex items-center text-base rounded-xl p-4">
                <img src="../images/profile.jpg" className="w-12 h-12 rounded-full"/>
                <p className="px-4 text-nowrap text-ellipsis overflow-hidden">닉네임</p>
                <p className="">2024/05/04</p>
            </div>
            <div className="flex p-4">
                <button className="w-16 h-12 mr-1 text-base bg-emerald-400 rounded-md  from-transparent to-emerald-400 hover:bg-emerald-300 hover:shadow-md hover:shadow-gray-300">승인</button>
                <button className="w-16 h-12 ml-1 text-base bg-red-500 rounded-md  from-transparent to-red-500 hover:bg-red-400 hover:shadow-lg hover:shadow-gray-200">거절</button>
            </div>
        </li>
        <li className="flex justify-between">
            <div className="cursor-pointer flex items-center text-base rounded-xl p-4">
                <img src="../images/profile.jpg" className="w-12 h-12 rounded-full"/>
                <p className="px-4 text-nowrap text-ellipsis overflow-hidden">닉네임</p>
                <p className="">2024/05/04</p>
            </div>
            <div className="flex p-4">
                <button className="w-16 h-12 mr-1 text-base bg-emerald-400 rounded-md  from-transparent to-emerald-400 hover:bg-emerald-300 hover:shadow-md hover:shadow-gray-300">승인</button>
                <button className="w-16 h-12 ml-1 text-base bg-red-500 rounded-md  from-transparent to-red-500 hover:bg-red-400 hover:shadow-lg hover:shadow-gray-200">거절</button>
            </div>
        </li>
        <li className="flex justify-between">
            <div className="cursor-pointer flex items-center text-base rounded-xl p-4">
                <img src="../images/profile.jpg" className="w-12 h-12 rounded-full"/>
                <p className="px-4 text-nowrap text-ellipsis overflow-hidden">닉네임</p>
                <p className="">2024/05/04</p>
            </div>
            <div className="flex p-4">
                <button className="w-16 h-12 mr-1 text-base bg-emerald-400 rounded-md  from-transparent to-emerald-400 hover:bg-emerald-300 hover:shadow-md hover:shadow-gray-300">승인</button>
                <button className="w-16 h-12 ml-1 text-base bg-red-500 rounded-md  from-transparent to-red-500 hover:bg-red-400 hover:shadow-lg hover:shadow-gray-200">거절</button>
            </div>
        </li>
        <ApplyPagiNation
                totalItems={totalItems}
                itemCountPerPage={itemCountPerPage}
                pageCount={pageCount}
                currentPage={currentPage}
            />
    </div>
 )
}

export default ApplyPost;