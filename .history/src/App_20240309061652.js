import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Fab from './components/Fab';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
      <Footer />
      <Fab />
    </AuthProvider>
  );
}

export default App;
