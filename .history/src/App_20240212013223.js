import './App.css';
import Login from './Login';
import { Outlet } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';

const queryClient = new QueryClient();
function App() {
  return (

  );
}

export default App;
