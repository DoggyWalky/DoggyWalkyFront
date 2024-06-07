import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Fab from 'components/Fab';
import SideBar from "components/SideBar";
import Profile from '../components/Profile';
import AppListOwn from "components/AppListOwn";
import RequestList from "components/RequestList";
import NotFound from "./NotFound";
import { createBrowserRouter } from 'react-router-dom';


const MyPage:React.FC = () => {

    return (
        <div>
            <Navbar/>
            <div className="flex text-sm" >
                <div className="mt-28 p-2">
                    <div className="h-20 p-5 flex bg-violet-600 rounded-3xl overflow-hidden">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-5">
                            <img src="../images/profile.jpg"/>
                        </div>
                    <div>
                        <p className="font-bold">Nickname</p>
                        <p className="font-normal">doggy@email.com</p>
                    </div>
                </div>
                    <div>
                        <ul className="py-2">
                            <Link to={'/MyProfile'}><li className="hover:bg-gray-400 font-normal hover:text-white rounded-3xl p-4 m-2 cursor-pointer"><p>프로필</p></li></Link>
                            <Link to={'/MyProfile/ApplyList'}><li className="hover:bg-gray-400 font-normal hover:text-white rounded-3xl p-4 m-2 cursor-pointer"><p className="w-full">산책 신청 목록</p></li></Link>
                            <Link to={'/MyProfile/RequestList'}><li className="hover:bg-gray-400 font-normal hover:text-white rounded-3xl p-4 m-2 cursor-pointer"><p className="w-full">나의 산책 신청 목록</p></li></Link>
                            <Link to={'/MyProfile/DeleteMember'}><li className="hover:bg-gray-400 font-normal hover:text-white rounded-3xl p-4 m-2 cursor-pointer"><p className="w-full">회원 탈퇴</p></li></Link>
                        </ul>
                    </div>
                </div>
                <div className="w-4/5 mt-28">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
            <Fab/>
        </div>
    )
}


export default MyPage