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
        <button class='p-0 w-20 h-20 border-black border-2 rounded-full'>
          <img src='images/fab.png' alt='fab' />
        </button>
      </div>

      <div class='fixed bottom-4 left-4'>
        <button class='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg'>
          Feedback
        </button>
      </div>
    </>
  );
}

export default App;
