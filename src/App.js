import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Fab from './components/Fab';
import { RouterProvider, Outlet } from 'react-router-dom';
import { RouterObj } from './router/RouterInfo';
function App() {
  return (
    <div>
      <RouterProvider router={RouterObj} />
      {/* <Navbar />
        <Outlet />
        <Footer />
        <Fab /> */}
    </div>
  );
}

export default App;
