import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Fab from './components/Fab';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Fab />
    </>
  );
}

export default App;
