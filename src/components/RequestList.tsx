import { useEffect, useState } from "react";
import axiosInstance from "api/api";
const RequestList: React.FC = () => {
    const [myPost, setMyPost] = useState([]);
    const token = localStorage.getItem("accessToken"); // 토큰을 로컬 스토리지에서 가져옴

    useEffect(() => {
        const fetchPosts = async () => {
            if (!token) {
                console.error("No token found");
                return;
            }

            try {
                const response = await axiosInstance('http://localhost:8080/api/job-post/my-post');
                const postList = response.data;
                setMyPost(postList)
                console.log(postList);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }

        };

        fetchPosts();
    }, [token]);
    return (
        <div>
            
        </div>
    )
}
export default RequestList;