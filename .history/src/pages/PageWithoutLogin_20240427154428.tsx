interface AuthProps {
  children: React.ReactNode;
}
const PageWithoutLogin: React.FC<AuthProps> = ({ children }) => {
  return (
    <>
      <>{children}</>
    </>
  );
};

export default PageWithoutLogin;
