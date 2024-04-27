import Footer from './Footer';
import Navbar from './Navbar';
import Fab from './Fab';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Fab />
    </>
  );
}

export default Layout;
