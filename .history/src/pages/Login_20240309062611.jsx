// // Login.js
// import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import LoginEffect from '../api/userAPI';

// const Login = () => {
//   const [searchParams] = useSearchParams();
//   const [loading, setLoading] = useState(true);

//   const authCode = searchParams.get('code');

//   return (
//     <>
//       <LoginEffect authCode={authCode} setLoading={setLoading} />
//       {loading ? (
//         <p className='my-28'>로그인 중...</p>
//       ) : (
//         <div>hi{authCode}</div>
//       )}
//     </>
//   );
// };

// export default Login;
