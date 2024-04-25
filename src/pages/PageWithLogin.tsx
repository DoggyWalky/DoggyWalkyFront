import { useState } from 'react';

interface WithoutAuthProps {
    children: React.ReactNode;
}

const PageWithLogin : React.FC<WithoutAuthProps> = ({ children }) => {

    const [isLogged, setIsLogged] = useState(true); //localstorage에서 받아오기
    if (!isLogged) {
        return <>로그인이 필요합니다.</>;
        //여기서 로그인해달라고 알린 다음 로그인페이지로 리다이렉트한다.
    }


    return (
        <>
            with auth
            <>{children}</>
        </>
    );
};

export default PageWithLogin;