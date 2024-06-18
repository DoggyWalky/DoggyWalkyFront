import { useEffect, useState } from "react";
import axiosInstance from "api/api";
const RequestList: React.FC = () => {
    const [myPost, setMyPost] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            

            try {
                const response = await axiosInstance('/api/job-post/my-post');
                const postList = response.data;
                setMyPost(postList)
                console.log(postList);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }

        };

        fetchPosts();
    }, []);
    return (
        <div>
            
        </div>
    )
}
export default RequestList;