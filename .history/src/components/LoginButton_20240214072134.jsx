import React from "react";

const Naver = () = {
const NAVER_CLIENT_ID = procesS.env•REACT_APP_NAVER_CLIENT_ID; // 발급받은 클라이언트 아이디
const REDIRECT_URI = "http://Localhost:3000/oauth"; // Callback URL
const STATE = "flase";
const NAVER_AUTH_URL =
https://nid.naver.com/oauth2.0/authorizeresponse_type=code&cLient_id={NAVER_CLIENT Dj&stat

const NaverLogin = ()
=> {
window. location.href = NAVER_AUTH_URL;
return
〈button oncLick={NaverLogin}>네이버 로그인</button>;
Js
export default Naver;