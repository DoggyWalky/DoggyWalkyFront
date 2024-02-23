import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <div>
        <button class='p-0 w-20 h-20 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'>
          <img src='images/fab.png' alt='fab' />
        </button>
      </div>
    </>
  );
}

export default App;
