import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Fab from './components/Fab';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/fab' && <Navbar />}
      <Outlet />
      {location.pathname !== '/fab' && <Footer />}
      {location.pathname !== '/fab' && <Fab />}
    </>
  );
}

export default App;
