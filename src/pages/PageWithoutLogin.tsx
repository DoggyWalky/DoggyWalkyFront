interface AuthProps {
    children: React.ReactNode;
}
const PageWithoutLogin: React.FC<AuthProps> = ({ children }) => {
    return (
        <>
            without auth
            <>{children}</>
        </>
    );
};

export default PageWithoutLogin;