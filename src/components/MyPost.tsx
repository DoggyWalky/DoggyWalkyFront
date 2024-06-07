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
        <div className="h-40 m-2 hover:bg-lightYellow flex cursor-pointer rounded-3xl" >
            {myPost.map(post => (
                <div key={post.postId}>
                    <div>
                        <img className="w-32 m-4 spect-w-1 aspect-h-1 rounded-3xl" src='../images/mypost.jpg' alt="pet"/>
                    </div>
                    <div onClick={() => handlePostClick(post)}>
                        <div className="flex h-1/2 items-center font-normal text-base text-gray-500 from-tranceparent from-gray-800">
                            <p className="mx-2">2024-04-30</p>
                            <p className="w-26 mx-2 whitespace-nowrap text-ellipsis overflow-hidden">부산광역시 부산진구</p>
                        </div>
                        <p className="h-1/2 flex items-top justify-center text-center mx-2 text-lg font-bold">서면 근처 산책 해주실분!</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyPost;