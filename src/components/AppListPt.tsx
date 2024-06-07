import React, { useEffect, useState } from "react";
import axiosInstance from "api/api";


const AppListPt : React.FC = () => {
    const [appPost, setAppPost] = useState();
    const token = localStorage.getItem("accessToken"); // 토큰을 로컬 스토리지에서 가져옴

    useEffect(() => {
        const fetchPosts = async () => {
            if (!token) {
                console.error("No token found");
                return;
            }

            try {
                const response = await axiosInstance.post('http://localhost:8080//api/apply/my-apply?sort=createdDate,desc');
                const postList = response.data;
                setAppPost(postList)
                console.log(postList);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }

        };

        fetchPosts();
    }, [token]);
    return (
        <></>
    )
}