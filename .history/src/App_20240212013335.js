import './App.css';
import Login from './Login';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  <QueryClientProvider client={queryClient}>
    return <Login />;
  </QueryClientProvider>;
}

export default App;
