import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <div className='fixed'>
        <button class='p-0 w-20 h-20 border-black border-2 rounded-full'>
          <img src='images/fab.png' alt='fab' />
        </button>
      </div>
    </>
  );
}

export default App;
