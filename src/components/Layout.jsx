import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Fab from '../components/Fab';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Fab />
    </>
  );
};

export default Layout;
