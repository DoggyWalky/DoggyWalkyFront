import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Fab from 'components/Fab';

const MyPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="flex mt-28 font-bold">
                <div className="mt-14">
                    <ul className="py-2 text-lg">
                        <li className="my-8 cursor-pointer">
                            <NavLink 
                                to="/MyProfile" 
                                end
                                className={({ isActive }) => isActive ? 'text-brand underline' : 'hover:underline active:text-brand'}>
                                프로필
                            </NavLink>
                        </li>
                        <li className="my-8 cursor-pointer">
                            <NavLink 
                                to="/MyProfile/ApplyList"
                                className={({ isActive }) => isActive ? 'text-brand underline' : 'hover:underline active:text-brand'}>
                                산책 신청 목록
                            </NavLink>
                        </li>
                        <li className="my-8 cursor-pointer">
                            <NavLink 
                                to="/MyProfile/RequestList"
                                className={({ isActive }) => isActive ? 'text-brand underline' : 'hover:underline active:text-brand'}>
                                나의 산책 신청 목록
                            </NavLink>
                        </li>
                        <li className="my-8 cursor-pointer">
                            <NavLink 
                                to="/MyProfile/DeleteMember"
                                className={({ isActive }) => isActive ? 'text-brand underline' : 'hover:underline active:text-brand'}>
                                회원 탈퇴
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-3/4 mx-auto">
                    <Outlet />
                </div>
            </div>
            <Footer />
            <Fab />
        </div>
    )
}

export default MyPage;
