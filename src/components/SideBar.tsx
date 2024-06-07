import React from "react";
import { Link } from "react-router-dom";

const SideBar:React.FC = () => {
    return (
        <ul className="w-1/5 pt-96">
            <li><Link to="/MyPage/Profile">프로필</Link></li>
            <li><Link to='/MyPage/AppList'>실시간 산책 경로 조회</Link></li>
        </ul>
    )
}

export default SideBar