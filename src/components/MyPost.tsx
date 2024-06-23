import React from "react";

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

interface MyPostProps {
    myPost: Post[];
    handlePostClick: (post: Post) => Promise<void>;
}


const MyPost: React.FC<MyPostProps> = ({ myPost, handlePostClick }) => {
    return (
        <li className="w-full h-24 bg-white flex justify-between items-center cursor-pointer p-4 hover:shadow-lg" >
            <span className="w-4 h-4 rounded-full flex justify-center items-center bg-green-200">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </span>
            <div className="pr-4 text-start cursor-pointer flex flex-col justify-start text-base rounded-xl">
                <p>강아지 산책 해주세요</p>
                <p className="text-gray-500">부산광역시</p>
            </div>
            <p className="text-center text-base pr-4">2024-05-04</p>
        </li>
    )
}

export default MyPost;