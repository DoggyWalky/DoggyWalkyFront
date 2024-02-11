import './App.css';
import Login from './Login';
import { Outlet } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return <Login />;
}

export default App;
