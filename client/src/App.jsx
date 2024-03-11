import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import {UserProvider} from './Context/userContext';
import {useQuery} from '@tanstack/react-query';
import useAuth from './Hooks/useAuth';
import {useEffect} from 'react';
function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
