/* 나의 산책 신청 목록 */
import React, { useEffect, useState } from "react";
import axiosInstance from "api/api";

const AppListPt : React.FC = () => {
    const [appPost, setAppPost] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosInstance.get('/api/apply/my-apply?page=0&size=10&sort=createdDate,DESC');
                const postList = response.data;
                setAppPost(postList)
                console.log(response);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }

        };

        fetchPosts();
    }, []);
    
    return (
        <></>
    )
}

export default AppListPt;