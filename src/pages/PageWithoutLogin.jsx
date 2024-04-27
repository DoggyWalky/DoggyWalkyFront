const PageWithoutLogin = ({ children }) => {
  return (
    <>
      without auth
      <>{children}</>
    </>
  );
};

export default PageWithoutLogin;
