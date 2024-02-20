import React from "react";

const Naver = () = {
const NAVER_CLIENT_ID = env.local.REACT_APP_CLIENT_ID // 발급받은 클라이언트 아이디
const REDIRECT_URI = "http://Localhost:3000/callback"; // Callback URL
const STATE = "flase";
const NAVER_AUTH_URL =`https://nid.naver.com/oauth2.0/authorize?client_id=4MhQd67NJONrPkqRDQd1&response_type=code&redirect_uri=http://localhost:3000/callback`

const NaverLogin = () => {
window. location.href = NAVER_AUTH_URL;
};

return 〈button onClick={NaverLogin}>네이버 로그인</button>;
};

export default Naver;