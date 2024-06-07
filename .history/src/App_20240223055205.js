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
        <button class='p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'>
          <svg
            viewBox='0 0 20 20'
            enable-background='new 0 0 20 20'
            class='w-6 h-6 inline-block'
          ></svg>
        </button>
      </div>
    </>
  );
}

export default App;
